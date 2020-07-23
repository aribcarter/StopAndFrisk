<template>
  <div class="flex w-full">

    <div class="bg-viz-black w-1/2 p-8 flex items-center justify-center relative">

      <div class="relative inset-0 flex items-center justify-center align-top inline-block w-full text-gray-100 fadeBlock">

        <div class="fill-current stroke-current removeFade" :id="this.blackTag"></div>

        <div class="absolute text-center leading-tight opacity-0 addFade text-xs p-8 lg:text-lg lg:p-2" :id="this.blackFade">
          <p>Black New Yorkers experienced {{ this.FormatStopPercentage(this.yearData.blackSplit) }} of total stops</p>
          <br>
          <p>{{ this.FormatInnocentPercentage(this.yearData.blackSplit) }} of these stops found no wrongdoing</p>
          <br>
          <p>On {{ this.yearData.blackSplit.unarmed }} stops officers drew
          <br>their gun against an unarmed black New Yorker</p>
        </div>

      </div>

      <div class="absolute right-0 text-gray-100 text-xl font-semibold text-right" id="yearText">
          <h1 class="">{{this.yearData.year[0] + this.yearData.year[1]}}</h1>
          <h1 class="text-base">{{ this.FormatTotalStops(true) }}</h1>
        </div>

    </div>

    <div class="bg-gray-100 w-1/2 p-12 flex items-center justify-center relative">

      <div class="relative inset-0 flex items-center justify-center align-top inline-block w-full text-viz-black fadeBlock">

        <div class="fill-current stroke-current removeFade" :id="this.whiteTag"></div>

        <div class="absolute text-center leading-tight opacity-0 addFade text-xs p-8 lg:text-lg lg:p-2" :id="this.whiteFade">
          <p>White New Yorkers experienced {{ this.FormatStopPercentage(this.yearData.whiteSplit) }} of total stops</p>
          <br>
          <p>{{ this.FormatInnocentPercentage(this.yearData.whiteSplit) }} of these stops found no wrongdoing</p>
          <br>
          <p>On {{ this.yearData.whiteSplit.unarmed }} stops officers drew
          <br>their gun against an unarmed white New Yorker</p>
        </div>

      </div>


        <div class="absolute left-0 text-viz-black text-xl font-semibold" id="yearText">
          <h1 class="">{{this.yearData.year[2] + this.yearData.year[3]}}</h1>
          <h1 class="text-base">{{ this.FormatTotalStops(false) }}</h1>
        </div>

    </div>

  </div>
</template>

<script>
  import { gsap } from 'gsap';
  import $ from 'jquery'

  export default{
    name: 'AnnualSlot',
    props: ['yearData'],

    mounted(){
      this.$parent.MakeBreak(this.yearData.blackSplit, this.yearData.totalStops, '#'+this.blackTag)
      this.$parent.MakeBreak(this.yearData.whiteSplit, this.yearData.totalStops, '#'+this.whiteTag)
      this.EstablishFade()
    },

    data: function(){
      return{
        whiteTag: 'whiteside'+this.yearData.year,
        blackTag: 'blackside'+this.yearData.year,
        whiteFade: 'whiteFade'+this.yearData.year,
        blackFade: 'blackFade'+this.yearData.year,
      }
    },

    methods:{
      EstablishFade: function(){
        $('.fadeBlock').each(function(index, element){
          element.animation = gsap.timeline({paused:true})
              .to($(element).find("div.removeFade"), {autoAlpha: 0, duration: .5})
              .to($(element).find("div.addFade"), {autoAlpha: 1, duration: .5}, "-=.25")
        })

        $('.fadeBlock').hover(function(){
          $(this)[0].animation.play()
        }, function(){
          $(this)[0].animation.reverse()
        })

        $('.fadeBlock').on('touchstart',function(){
          $(this)[0].animation.play()
        })

        $('.fadeBlock').on('touchend',function(){
          $(this)[0].animation.play()
        })
      },

      FormatStopPercentage(split){
        return (100*split.stops/this.yearData.totalStops).toFixed(2)+'%'
      },
      FormatInnocentPercentage(split){
        return (100*split.innocent/split.stops).toFixed(2)+'%'
      },
      FormatTotalStops(leftSide){
        var rawText = this.numberWithCommas(this.yearData.totalStops) + ' total stops'
        var halfway = Math.floor(rawText.length/2)
        if(leftSide){return rawText.substring(0, halfway)}
        else{return rawText.substring(halfway, rawText.length)}
      },
      numberWithCommas(x) {return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");},

  }
}
</script>
