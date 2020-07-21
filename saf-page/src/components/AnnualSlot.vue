<template>
  <div class="flex w-full">

    <div class="bg-viz-black w-1/2 p-8 flex items-center justify-center relative">

        <div class="fill-current stroke-current text-gray-100" :id="this.blackTag"></div>

        <div class="absolute right-0" id="yearText">
          <h1 class="text-gray-100 text-xl font-semibold">{{this.yearData.year[0] + this.yearData.year[1]}}</h1>
        </div>
    </div>

    <div class="bg-gray-100 w-1/2 p-12 flex items-center justify-center relative">

        <div class="fill-current stroke-current text-viz-black" :id="this.whiteTag"></div>

        <div class="absolute left-0" id="yearText">
          <h1 class="text-viz-black text-xl font-semibold">{{this.yearData.year[2] + this.yearData.year[3]}}</h1>
        </div>
    </div>

  </div>
</template>

<script>
  export default{
    name: 'AnnualSlot',
    props: ['yearData'],

    mounted(){
      this.$parent.MakeBreak(this.yearData.blackSplit, this.yearData.totalStops, '#'+this.blackTag)
      this.$parent.MakeBreak(this.yearData.whiteSplit, this.yearData.totalStops, '#'+this.whiteTag)
    },

    data: function(){
      return{
        whiteTag: 'whiteside'+this.yearData.year,
        blackTag: 'blackside'+this.yearData.year,
      }
    },
  }
</script>
