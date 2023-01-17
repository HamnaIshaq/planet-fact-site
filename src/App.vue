<template>
  <Header></Header>
  <main class="main">
    <PlanetDetails :planetInfo="planetInfo"></PlanetDetails>
    <PlanetStats :planetInfo="planetInfo"></PlanetStats>
  </main>
</template>

<script>
  import data from "./data.json"
  import Header from './components/Header.vue'
  import PlanetDetails from './components/PlanetDetails.vue'
  import PlanetStats from './components/PlanetStats.vue'

  export default {
    name: "App",
    components: {
      Header,
      PlanetDetails,
      PlanetStats
    },
    data(){
      return {
        planetInfo: data[0],
      }
    },
  }

</script>