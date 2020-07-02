# Visualizing Stop and Frisk in NYC

## Inspiration
As part of my summer effort to practice data visualiztion, I chose to participate in the Storytelling with Data monthly challenge, and even though I was late to the party, wanted to do the [June Black and White Challenge](https://community.storytellingwithdata.com/challenges/52e943ac-9468-4b4e-a8d8-14eadd6a3394). I found the theme appropriate due to the BLM protests- a cause that emphasizes the contrast between black and white experiences, especially experiences related to policing. Thus, my goal for this visualiztion is to provide a sense of the qualitative and quantitative difference for how people of different races feel the NYPD's presence. 

My hope to make to make a page in the vein of Shirley Wu's [Movie Flower](http://bl.ocks.org/sxywu/raw/8d1b563586bf411383345e95a3418715/) visualization where black and white stop and frisk statistics as documented by the NYPD are visualized differently shaped breaks in glass as an allusion to broken window policing.

## Process
1. I first used R to port in 17 years of data from the NYPD and clean it so each year's datasheet plays nice with the others

## Challenges
- I had trouble verifying the accurateness of my data in R. I viewed the source datasheets a lot and cross referenced the [NYC ACLU's Published Numbers](https://www.nyclu.org/en/Stop-and-Frisk-data), but there were still several inconsistencies, most notably hundreds of thousands of fewer stops overall in the 2000's that I counted than were published by the ACLU. I contacted the woman on their staff who deals with the data to see if they counted a different way, but did not hear back. However, between independently computing totals for data cross-sections outside of the functions I wrote in R and accounting for edge-cases in the NYPD's data (like from 2017-2019 they only confirm weapons being present so there were many NULL values), I am confident that the data I publish in the visualization is accurate.
