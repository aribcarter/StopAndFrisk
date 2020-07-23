<template>
  <div class="justify-center items-center bg-viz-black text-gray-200">
    <div id="title" class="flex flex-wrap p-4 justify-center items-center text-center">
      <div class="w-full mb-2">
        <h1 class="text-5xl lg:text-6xl font-bold italic">Broken Windows</h1>
      </div>
      <div class="w-full mb-4">
        <h2 class="text-xl lg:text-2xl text-gray-300">Exploring racial disparities in the NPYD's use of Stop and Frisk from 2003 to 2019</h2>
      </div>
    </div>

    <div id="context" class="flex p-4 ml-4 mr-4 text-center text-sm lg:text-lg">
      <p>

        Inspired by the national movement against racism in the police force (and police in general) I wanted to visualize how Broken Windows Policing, realized through the New York City Police Department’s Stop and Frisk policy, targeted Black citizens more readily than white citizens, especially in the late oughts and early 2010’s. Stop and Frisk saw a peak in 2012, after which a lawsuit by The Center for Constitutional Rights lead to increased regulations for NYPD officers requiring them to thoroughly justify the reason for a stop.
        <br>
        <br>
        This visualization seeks to underline Stop and Frisk’s disproportionate focus on Black New Yorkers, who experience roughly half of all annual stops despite only making up a quarter of the New York City population according to the <a href="https://www.census.gov/quickfacts/newyorkcitynewyork">2010 census</a>. Three major statistics are visualized here: percent of total stops, percent of stops finding no wrongdoing, and number of times a police officer reported drawing their service weapon despite reporting the New Yorker they stopped being completely unarmed. The choice to add the third statistic and its presence across all years of data represented highlights possible unnecessary force used by the NYPD in situations where it is not warranted. Note that all statistics are from the <a href="https://www1.nyc.gov/site/nypd/stats/reports-analysis/stopfrisk.page">NYPD’s self reported Stop and Frisk data</a>.
        <br>
        <br>
        If you are looking to donate to any organizations in the New York area, consider <a href="https://www.libertyfund.nyc/">The Liberty Fund</a>, <a href="https://www.changethenypd.org/">Communities United for Police Reform</a>, and/or <a href="https://www.legalaidnyc.org/">The Legal Aid Society</a>.
      </p>
    </div>

    <div id="sample" class="flex p-2 items-center justify-center w-full">
      <div class="fill-current stroke-current text-gray-100" id="sampleBreak"></div>
    </div>

  </div>
</template>

<script>

  export default{
    name: 'Intro',
    props: ['sampleData','svgSize'],
    mounted(){
      this.$parent.MakeBreak(this.sampleData.blackSplit, this.sampleData.totalStops, '#sampleBreak')
    }
  }
</script>

<style>
  a{
    text-decoration: underline !important;
  }
  a:hover{
    font-weight:bold;
  }
</style>
