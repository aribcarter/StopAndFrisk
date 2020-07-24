<template>
  <div id="app" class="antialiased">
    <Intro v-if="sampleData" :sampleData="this.sampleData" :svgSize="this.svgSize"></Intro>

    <div class="flex">
      <div class="w-1/2 bg-viz-black text-gray-100 text-center font-bold p-2 text-2xl"><h1>Black New Yorkers</h1></div>
      <div class="w-1/2 bg-gray-100 text-viz-black text-center font-bold p-2 text-2xl"><h1>White New Yorkers</h1></div>
    </div>

    <div v-for="yearData in safData" :key="yearData.year">
      <AnnualSlot v-bind:yearData="yearData"></AnnualSlot>
    </div>

  </div>
</template>

<script>

  //javascript libraries
  import * as d3 from "d3";

  //vue assets
  import Intro from "@/components/Intro.vue"
  import AnnualSlot from "@/components/AnnualSlot.vue"

export default {
  name: 'App',

  components:{
    Intro,
    AnnualSlot,
  },

  data: function(){
    return{
      safData: [],
      sampleData: null,
      smallestRadius: 5,
      largestRadius: 30,
      svgSize: 400,
    }
  },

  created(){
    this.CompleteData();
    document.title="Broken Windows"
  },

  computed:{
    holeScale(){
      return d3.scaleLinear().range([this.smallestRadius,this.largestRadius]).domain(
        [
          d3.min(this.safData, function(d){
            if(d.blackSplit.unarmed < d.whiteSplit.unarmed){return d.blackSplit.unarmed;}
            else{return d.whiteSplit.unarmed}
          }),
          d3.max(this.safData, function(d){
            if(d.blackSplit.unarmed > d.whiteSplit.unarmed){return d.blackSplit.unarmed;}
            else{return d.whiteSplit.unarmed}
          })
        ]
      )
    },
    crackScale(){
      return d3.scaleLinear().range([0,this.svgSize/2-this.largestRadius]).domain([0,1])
    }
  },

  methods:{

    VerifyData(){
      return new Promise((resolve, reject)=>{
        if(this.safData.length > 1){resolve("resolved")}
        else{reject("fail")}
      })
    },

    YearSplitProcessor:function(d){
      return {
        year: d.Year,
        totalStops: parseFloat(d.TotalStops),
        blackSplit:{
          stops: parseFloat(d.BlackStops),
          innocent: parseFloat(d.BlackInnocents),
          unarmed: parseFloat(d.BlackUnarmed),
        },
        whiteSplit:{
          stops: parseFloat(d.WhiteStops),
          innocent: parseFloat(d.WhiteInnocents),
          unarmed: parseFloat(d.WhiteUnarmed)
        }
      };
    },

    async CompleteData(){
      let data = await d3.csv("StopAndFriskByYear.csv", this.YearSplitProcessor).then(function(response) {
        return response
      });
      this.safData = data
      this.sampleData = data[14]
    },

    async MakeBreak(split, totalStops, tag){
      this.VerifyData().then(()=>{
        var svgSize = this.svgSize;
        var degreesPerCrack=12;

        var baseRadius = this.holeScale(split.unarmed);

        if(tag=='#sampleBreak'){baseRadius=35}

        var crackSwath = (split.innocent/split.stops)*360
        var normalizedStops = split.stops/totalStops

        var svg = d3.select(tag)
                    .append("svg")
                    .classed("svg-content-responsive", true)
                    .attr("preserveAspectRatio", "xMinYMin meet")
                    .attr("viewBox", "0 0 "+svgSize + " "+svgSize)
                    .append("g")


      for(var i=0; i<crackSwath; i++){
        var initialX = svgSize/2+(baseRadius*Math.sin(i*(Math.PI/180)))
        var initialY = svgSize/2+(baseRadius*Math.cos(i*(Math.PI/180)))
        var finalX = svgSize/2+((baseRadius+this.crackScale(normalizedStops))*Math.sin(i*(Math.PI/180)))
        var finalY = svgSize/2+((baseRadius+this.crackScale(normalizedStops))*Math.cos(i*(Math.PI/180)))

        var crackCoords=this.JaggedPath({x:initialX, y:initialY}, {x:finalX, y:finalY})

        var crack = d3.line()
                      .x(function(d){return d.x})
                      .y(function(d){return d.y})

        svg.append("path")
            .attr("d", crack(crackCoords))
            .attr("stroke-width", .8)
            .attr("fill", "none")

        i=i+degreesPerCrack;
        }
        if(tag=='#sampleBreak'){this.AnnotateCrack()}
      })

    },

    JaggedPath(startPosition, endPosition){
      var crackCoords=[
        startPosition,
      ]

      var pathLine = this.LineEquation(startPosition, endPosition, false)

      var bendPositions = [Math.round(Math.random()*(pathLine.length/5, pathLine.length/2))]
      var crackRemaining = pathLine.length-bendPositions[0]

      while(crackRemaining>0){
        var newBend = Math.round(Math.random()*(pathLine.length/20, pathLine.length/5))
        crackRemaining = crackRemaining-newBend
        if(crackRemaining>0){bendPositions.push(newBend+bendPositions[bendPositions.length-1])}
      }

      for(var i=0;i<bendPositions.length;i++){
        var jagHeight = Math.round(Math.random()*(-(pathLine.length/7), pathLine.length/7))

        var pointAlong = pathLine.ComputePointFromDistanceAndStart(startPosition, bendPositions[i])
        var perpLine = this.ReturnPerpendicularLine(pathLine, pointAlong)

        var perpCoord = perpLine.ComputePointFromDistanceAndStart(pointAlong, jagHeight)

        /*
        console.log("First point: (" + startPosition.x + ", " + startPosition.y +
                    ")\nIntermediate point: " + + pointAlong.x + ", " + pointAlong.y + ')'
                    +")\nSecond Point: " + + perpCoord.x + ", " + perpCoord.y + ')'+
                    ")\nFinal point: " + + endPosition.x + ", " + endPosition.y + ')')*/

        crackCoords.push(perpCoord)
      }



      crackCoords.push(endPosition)
      return crackCoords
    },

    LineEquation(startPosition, endPosition, overwriteBounds){

      var xBound = []
      var yBound = []
      if(startPosition.x  > endPosition.x){xBound=[endPosition.x,startPosition.x]}
      else{xBound=[startPosition.x,endPosition.x]}

      if(startPosition.y  > endPosition.y){yBound=[endPosition.y,startPosition.y]}
      else{yBound=[startPosition.y,endPosition.y]}

      if(overwriteBounds){
        xBound = [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY]
        yBound = [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY]
      }

      return {
        slope: (endPosition.y-startPosition.y)/(endPosition.x-startPosition.x),
        xBound: xBound,
        yBound: yBound,
        length: Math.sqrt(Math.pow(endPosition.x-startPosition.x, 2)+Math.pow(endPosition.y-startPosition.y,2)),
        ComputePointFromDistanceAndStart(point, distance){
          var x = Math.sqrt(Math.pow(distance,2)/(Math.pow(this.slope,2)+1))+point.x
          if(x>xBound[1] || x<xBound[0]){x=-(Math.sqrt(Math.pow(distance,2)/(Math.pow(this.slope,2)+1)))+point.x}

          var y = Math.sqrt(Math.pow(distance,2)/(Math.pow(1/this.slope,2)+1))+point.y
          if(y<yBound[0] || y>yBound[1]){y=-(Math.sqrt(Math.pow(distance,2)/(Math.pow(1/this.slope,2)+1)))+point.y}
          return{
                  x: x,
                  y: y
                }
        },
        ComputePointsInEitherDirection(point, distance){
          var x1 = Math.sqrt(Math.pow(distance,2)/(Math.pow(this.slope,2)+1))+point.x
          var x2= -(Math.sqrt(Math.pow(distance,2)/(Math.pow(this.slope,2)+1)))+point.x

          var y1 = Math.sqrt(Math.pow(distance,2)/(Math.pow(1/this.slope,2)+1))+point.y
          var y2 = -(Math.sqrt(Math.pow(distance,2)/(Math.pow(1/this.slope,2)+1)))+point.y
          return[{x: x1,y: y1},{x:x2, y:y2}]
        }
      }
    },

    ReturnPerpendicularLine(lineObject, point){
      var slope = -1/lineObject.slope
      var samplePoint = {
                      x: Math.sqrt(1/(Math.pow(slope,2)+1))+point.x,
                      y: Math.sqrt(1/(Math.pow(1/slope,2)+1))+point.y
                    }

      var perpLine = this.LineEquation(point, samplePoint, true)
      return perpLine
    },

    //making this flexible for any type of path not just circle
    EndpointArrow(pointSet, length, pointingRight, pointingUp){
      var guideLine = this.LineEquation(pointSet[0], pointSet[1], true)
      if(pointingRight){guideLine.xBound[0]=pointSet[0].x}
      else{guideLine.xBound[1]=pointSet[0].x}

      if(pointingUp){guideLine.yBound[0]=pointSet[0].y}
      else{guideLine.yBound[1]=pointSet[0].y}

      var guideDistance = length/Math.sqrt(2)
      var perpPoint = guideLine.ComputePointFromDistanceAndStart(pointSet[0], guideDistance)
      var perpLine = this.ReturnPerpendicularLine(guideLine, perpPoint)

      var arrowEnds = perpLine.ComputePointsInEitherDirection(perpPoint, guideDistance)

      return [[pointSet[0], arrowEnds[0]], [pointSet[0], arrowEnds[1]]]
    },

    EndpointBar(line, endpoint, barsize){
      var mainLine = this.LineEquation(line[0], line[1], true);
      var perpLine = this.ReturnPerpendicularLine(mainLine, endpoint)
      return perpLine.ComputePointsInEitherDirection(endpoint, barsize/2)
    },

    AnnotateCrack(){
      var svg = d3.select("#sampleBreak")
                  .select("svg")

      var radius=150

      var outerArc = d3.arc()
                          .innerRadius(radius)
                          .outerRadius(radius+.5)
                          .startAngle(-.38*Math.PI)
                          .endAngle(1*Math.PI)

      var guideArc = d3.arc()
                          .innerRadius(radius+5)
                          .outerRadius(radius+5.5)
                          .startAngle(-.38*Math.PI)
                          .endAngle(1*Math.PI)

      svg.append("path")
          .attr("d", outerArc)
          .attr("transform", "translate("+this.svgSize/2+","+this.svgSize/2+")")

      svg.append("path")
          .attr("id", "arcAround")
          .attr("d", guideArc)
          .attr("transform", "translate("+this.svgSize/2+","+this.svgSize/2+")")
          .attr("stroke", "none")
          .attr("fill", "none")

      svg.append("text")
          .append("textPath") //append a textPath to the text element
          .attr("xlink:href", "#arcAround") //place the ID of the path here
          .style("text-anchor","right") //place the text halfway on the arc
          .attr("startOffset", "1.5%")
          .text("Percent of stops finding no wrongdoing (not arrested or summoned to court)")
            .classed("text-xs font-thin tracking-wide", true)

      var lineFunction = d3.line()
                      .x(function(d){return d.x})
                      .y(function(d){return d.y})

      var arrowLines = []
      arrowLines = arrowLines.concat(this.EndpointArrow([this.PolarToCartesian(150, (Math.PI/2)),this.PolarToCartesian(150, (Math.PI/2)+.001)],
                                          10, true, false))

      arrowLines = arrowLines.concat(this.EndpointArrow([this.PolarToCartesian(150, (201.2*Math.PI/180)),this.PolarToCartesian(150, (201.2*Math.PI/180)+.001)],
                                          10, true, false))

      for(var i=0;i<arrowLines.length;i++){
        svg.append("path")
            .attr("d", lineFunction(arrowLines[i]))
            .attr("stroke-width", .8)
            .attr("fill", "none")
      }


      svg.append("text")
          .style("text-anchor", "center")
          .attr("transform", "translate("+((this.svgSize/2)-25)+","+((this.svgSize/2)-5)+")")
          .text("Gun draws")
            .classed("text-3xs font-hairline tracking-wide text-center", true)

      svg.append("text")
          .style("text-anchor", "center")
          .attr("transform", "translate("+((this.svgSize/2)-35)+","+((this.svgSize/2)+5)+")")
          .text("against unarmed")
            .classed("text-3xs font-hairline tracking-wide text-center", true)

      svg.append("text")
          .style("text-anchor", "center")
          .attr("transform", "translate("+((this.svgSize/2)-25)+","+((this.svgSize/2)+15)+")")
          .text("New Yorkers")
            .classed("text-3xs font-hairline tracking-wide text-center", true)

      var radiusLine = [
                        {
                          x: this.svgSize/2+((35+110)*Math.cos(120*(Math.PI/180))),
                          y: this.svgSize/2+((35+110)*Math.sin(120*(Math.PI/180)))
                        },
                        {
                          x: this.svgSize/2+(35*Math.cos(120*(Math.PI/180))),
                          y: this.svgSize/2+(35*Math.sin(120*(Math.PI/180)))
                        },
                      ]

      var offset = 5
      var guideLine = [{x:radiusLine[0].x-offset, y:radiusLine[0].y-offset},
                        {x:radiusLine[1].x-offset, y:radiusLine[1].y-offset}]

      svg.append("path")
          .attr("d", lineFunction(radiusLine))
          .attr("stroke-width", .8)
          .attr("fill", "none")

      svg.append("path")
          .attr("id", "radiusLine")
          .attr("d", lineFunction(guideLine))
          .attr("fill", "none")
          .attr("stroke", "none")

      svg.append("text")
          .append("textPath")
          .attr("xlink:href", "#radiusLine")
          .attr("startOffset", "3%")
          .text("Portion of total stops")
            .classed("text-2xs font-thin tracking-wide", true)

      var endBars = [this.EndpointBar(radiusLine, radiusLine[0], 10)]
      endBars.push(this.EndpointBar(radiusLine, radiusLine[1], 10))

      for(i=0;i<endBars.length;i++){
        console.log(endBars[i])
        svg.append("path")
            .attr("d", lineFunction(endBars[i]))
            .attr("stroke-width", .8)
            .attr("fill", "none")
      }

    },

    PolarToCartesian(r, theta){
      return {x: this.svgSize/2+r*Math.cos(theta), y: this.svgSize/2+r*Math.sin(theta)}
    }

  }
}
</script>

<style>
  .svg-content-responsive {
  display: inline-block;
  position: absolute;
  top: 10px;
  left: 0;
  }
</style>
