<template>
  <Header
    :activePlanet="activePlanet"
    :onChangeActivePlanet="onChangeActivePlanet"
  ></Header>
  <main class="main">
    <router-view></router-view>
  </main>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      activePlanet: "earth",
    };
  },
  methods: {
    onChangeActivePlanet(planet) {
      this.activePlanet = planet;
    },
  },
};
</script>
