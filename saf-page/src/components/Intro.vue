<template>
  <div class="justify-center items-center bg-viz-black text-gray-200">
    <div id="title" class="flex flex-wrap p-4 justify-center items-center text-center">
      <div class="w-full mb-2">
        <h1 class="text-5xl font-semibold italic">Broken Windows</h1>
      </div>
      <div class="w-full mb-4">
        <h2 class="text-xl text-gray-300">Exploring racial disparities in the NPYD's use of Stop and Frisk from 2003 to 2019</h2>
      </div>
    </div>

    <div id="context" class="flex p-4 ml-4 mr-4 text-center text-sm">
      <p>

        Inspired by the national movement against racism in the police force (and police in general) I wanted to visualize how Broken Windows Policing, realized through the New York City Police Department’s Stop and Frisk policy, targeted Black citizens more readily than white citizens. The policy peaked in 2011, after which a lawsuit by The Center for Constitutional Rights lead to increased regulations for NYPD officers requiring them to thoroughly justify the reason for a stop.
        <br>
        <br>
        This visualization examines the total number of stops, the percent of stopped citizens found innocent, and the number of citizens who the police drew their guns against despite the citizen being unarmed. Innocence is is defined by the stopped person not being arrested or summoned to court. Note that these statistics are self reported by NYPD officers conducting the stops.
        <br>
        <br>
        If you are looking to donate to any organizations in the New York area, consider the Liberty Fund, a city wide bail fund, Communities United for Police Reform, or The Legal Aid Society.

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
    props: ['sampleData'],
    mounted(){
      this.$parent.MakeBreak(this.sampleData.blackSplit, this.sampleData.totalStops, '#sampleBreak')
      /*#console.log("mounting")
      this.$parent.VerifyScale("fuc").then(message=>{
        this.$parent.MakeBreak(this.sampleData.split, this.sampleData.totalStops, '#sampleBreak')
        console.log(message)
      })*/
    },
  }
</script>

<style>

</style>
