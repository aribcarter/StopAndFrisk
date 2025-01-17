library(readxl)
library(dplyr)

GetZippedCsvFromNypd<-function(year){
  address <- paste("https://www1.nyc.gov/assets/nypd/downloads/zip/analysis_and_planning/stop-question-frisk/sqf-",year,"-csv.zip", sep="")
  fileName <- paste(year,".csv",sep="")
  temp <- tempfile()
  download.file(address, temp)
  table <- read.table(unz(temp, fileName), header=T, sep=",", fill=T)
  unlink(temp)
  table
}

GetCsvFromNypd<-function(year){
  address<-paste("https://www1.nyc.gov/assets/nypd/downloads/excel/analysis_and_planning/stop-question-frisk/sqf-", year,".csv", sep="")
  temp<-tempfile()
  download.file(address, temp)
  table <- read.table(temp, header=T, sep=",", fill=T)
  unlink(temp)
  table
}

GetExcelFromNypd<-function(year){
  address<-paste("https://www1.nyc.gov/assets/nypd/downloads/excel/analysis_and_planning/stop-question-frisk/sqf-", year,".xlsx", sep="")
  if(year == 2017)
    address <- "https://www1.nyc.gov/assets/nypd/downloads/excel/analysis_and_planning/stop-question-frisk/csi-2947-2019-sqf-cy2017-updated1-9-2020.xlsx"
  temp<-tempfile()
  download.file(address, temp)
  table <- read_excel(temp)
  unlink(temp)
  table
}

ReturnTable<-function(year){
  if(year>=2003 & year<=2014)
    table <- GetZippedCsvFromNypd(year)
  else if(year>2014 & year<2017)
    table <- GetCsvFromNypd(year)
  else if(year>2016 & year<=2019)
    table <- GetExcelFromNypd(year)
  else
    print("wrong year")
  
  if(year == 2006)
    table <- Fix2006(table)
  if(year>=2011)
    table <- RemoveForceUse(table)
  if(year>=2013)
    table <- Lowercm(table)
  
  if(year>2016)
    table<-FilterTable(table, "Ex")
  else
    table <- FilterTable(table, "Csv")
  
  table
}

CheckMatching<-function(){
  years <-c(2003:2019)
  
  prev<-NA
  
  for(year in years){
    yearTable <- ReturnTable(year)
    
    if(!is.na(prev)){
      truthVector <- sort(colnames(yearTable)) == prev
      if(FALSE %in% truthVector)
        print(paste(year-1, "and", year, "don't match"))
      else
        print(paste(year-1, "and", year, "match"))
    }
    print(yearTable$Year[[1]])
    prev <- sort(colnames(yearTable))
  }
}

#2006 labeling is riddled with typos and unclear documentation
Fix2006<-function(badTable){
   badTable <- renameCols(badTable, c("adrnum", "adrpct", "dettyp_c", "details_", "detail1_", "premtyp", "prenam", "rescod", "strintr", "strname"), 
                          c("addrnum", "addrpct", "dettypcm", "detailcm", "linecm", "premtype", "premname", "rescode", "stinter", "stname"))
   badTable$wepfound <- NULL
   badTable
}

#use for 2011 on when this variable started being used
#I don't need this for what I'm doing, but other option is adding column
#with NA for years without
RemoveForceUse<-function(table){
  table$forceuse <- NULL
  table
}

#2013-2016 capitalize their cm notation for some reason
Lowercm<-function(table){
  table <- renameCols(table, c("lineCM", "dettypCM", "detailCM"), c("linecm", "dettypcm", "detailcm"))
  table
}

renameCols<-function(table, oldName, newName){
  if(length(oldName) != length(newName))
    print("Need same size rename vectors")
  
  i<-1
  for(name in oldName){
    colnames(table)[which(colnames(table) == oldName[i])] <- newName[i]
    i<-i+1
  }
  
  table
}

FilterTable<-function(table, fileType="Csv"){
  codes <- paste(fileType, "Codes", sep="")
  rn <- paste(fileType, "Renames", sep="")
  
  filterTable <- read.csv("FilterCodes.csv", header = T, na.strings=c("","NA"))
  filterTable <- mutate_all(filterTable, as.character)
  filter <- filterTable[,codes]
  filter <- filter[!is.na(filter)]
  table <- table[,filter]
  
  renames <- filterTable[,c(codes, rn)]
  colnames(renames) <- c("Codes", "Renames")
  renames <- renames[!is.na(renames$Renames),]
  table <- renameCols(table, renames$Codes, renames$Renames)
  
  table <- mutate_all(table, as.character)
  table[,colnames(table)] <- lapply(table[,colnames(table)], function(x) gsub(" ", "", x))

  table
}

CompressForceOnUnarmed<-function(table){
  if(as.numeric(table$Year[[1]]) < 2017)
    table$Armed <- table$pistol=="Y" | table$riflshot=="Y" | table$asltweap=="Y" | table$machgun=="Y" | 
                      table$Knife=="Y" | table$othrweap=="Y"
  else
    table$Armed <- (table$Gun=="Y" | table$Knife=="Y" | table$OtherWeapon=="Y")
  
  View(table)
  nrow(table[which(table$Armed==FALSE & table$GunDrawn=="Y"),])
}

CompressInnocence<-function(table){
  nrow(table[which(table$Arrested=="N" & table$Summoned=="N"),])
}

#to be used for either annual or precinct data
GenerateTable<-function(table){
  blackSplit <- table[which(table$Race == "B" | table$Race == "BLACK"),]
  whiteSplit <- table[which(table$Race == "W" | table$Race == "WHITE"),]
  
  data.frame("TotalStops"=nrow(table),"BlackStops"=nrow(blackSplit),"BlackInnocents"=CompressInnocence(blackSplit),
             "BlackUnarmed"=CompressForceOnUnarmed(blackSplit), "WhiteStops"=nrow(whiteSplit), "WhiteInnocents"=CompressInnocence(whiteSplit),
             "WhiteUnarmed"=CompressForceOnUnarmed(whiteSplit)) 
}

#Want to get instance of black and white splits for:
  #Innocence, stops, guns drawn while unarmed
#Also have total # of stops per year
GenerateBreakData<-function(table){
  years <- c(2003:2019)
  AnnualSFData <- data.frame()
  #colnames(AnnualSFData)<-c("Year", "TotalStops", "BlackStops", "WhiteStops", "BlackInnocents", "White Innocents", "BlackGunDraws", "WhiteGunDraws")
  #View(AnnualSFData)
  for(year in years){
    yearTable <- GenerateTable(ReturnTable(year))
    yearFrame <- data.frame("Year"=year)
    AnnualSFData <- rbind(AnnualSFData, cbind(yearFrame, yearTable))
    #View(AnnualSFData)
    print(paste(year, "loaded"))
  }
  write.csv(AnnualSFData, "StopAndFriskByYear.csv", row.names = F)
}


