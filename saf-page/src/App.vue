<template>
  <div id="app" class="antialiased">
    <Intro v-if="sampleData" v-bind:sampleData="this.sampleData"> {{ sampleData.totalStops }} </Intro>

    <div v-for="yearData in safData" :key="yearData.year">
      <AnnualSlot v-bind:yearData="yearData"></AnnualSlot>
    </div>

  </div>
</template>

<script>

  //javascript libraries
  import * as d3 from "d3";
  //import { gsap } from 'gsap';

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
      largestRadius: 30,
      svgSize: 400,
    }
  },

  created(){
    this.CompleteData();
  },

  computed:{
    holeScale(){
      return d3.scaleLinear().range([5,this.largestRadius]).domain(
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

    GetSampleData(){
        this.VerifyData().then(()=>{
          return this.safData[3];
        })
        .catch((message)=>{
          console.log(message)
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
      this.sampleData = data[3]
    },

    async MakeBreak(split, totalStops, tag){
      this.VerifyData().then(()=>{
        var svgSize = this.svgSize;
        var degreesPerCrack=12;

        var baseRadius = this.holeScale(split.unarmed);
        var crackSwath = (split.innocent/split.stops)*360
        var normalizedStops = split.stops/totalStops

        /*var centerCircle = d3.arc()
                            .innerRadius(baseRadius)
                            .outerRadius(baseRadius)
                            .startAngle(2*Math.PI)
                            .endAngle(0)
                            */

        var svg = d3.select(tag)
                    .append("svg")
                    .attr("width", svgSize)
                    .attr("height", svgSize)
        /*
        svg.append("path")
            .attr("d", centerCircle)
            .attr("transform", "translate("+svgSize/2+","+svgSize/2+")")
        */
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

      
      })

    },

    JaggedPath(startPosition, endPosition){
      var crackCoords=[
        startPosition,
      ]

      var pathLine = this.LineEquation(startPosition, endPosition)

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

        console.log("First point: (" + startPosition.x + ", " + startPosition.y +
                    ")\nIntermediate point: " + + pointAlong.x + ", " + pointAlong.y + ')'
                    +")\nSecond Point: " + + perpCoord.x + ", " + perpCoord.y + ')'+
                    ")\nFinal point: " + + endPosition.x + ", " + endPosition.y + ')')

        crackCoords.push(perpCoord)
      }



      crackCoords.push(endPosition)
      return crackCoords
    },
    LineEquation(startPosition, endPosition){

      var xBound = []
      var yBound = []
      if(startPosition.x  > endPosition.x){xBound=[endPosition.x,startPosition.x]}
      else{xBound=[startPosition.x,endPosition.x]}

      if(startPosition.y  > endPosition.y){yBound=[endPosition.y,startPosition.y]}
      else{yBound=[startPosition.y,endPosition.y]}

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
        }
      }
    },
    ReturnPerpendicularLine(lineObject, point){
      var slope = -1/lineObject.slope
      var samplePoint = {
                      x: Math.sqrt(1/(Math.pow(slope,2)+1))+point.x,
                      y: Math.sqrt(1/(Math.pow(1/slope,2)+1))+point.y
                    }

      var perpLine = this.LineEquation(point, samplePoint)
      perpLine.xBound = [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY]
      perpLine.yBound = [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY]
      return perpLine
    }
  }
}
</script>

<style>

</style>
