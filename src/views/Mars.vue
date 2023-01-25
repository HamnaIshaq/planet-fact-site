<template>
  <PlanetDetails
    :planetName="planetName"
    :planetImg="planetImg"
    :planetContent="planetContent"
    :planetSource="planetSource"
    :isOverviewBtnActive="isOverviewBtnActive"
    :isStructureBtnActive="isStructureBtnActive"
    :isSurfaceBtnActive="isSurfaceBtnActive"
    :activeBtnClass="activeBtnClass"
    :onClickOverview="onClickOverview"
    :onClickStructure="onClickStructure"
    :onClickSurface="onClickSurface"
  />
  <PlanetStats
    :planetRotation="planetRotation"
    :planetRevolution="planetRevolution"
    :planetRadius="planetRadius"
    :planetTemperature="planetTemperature"
  />
</template>

<script>
import PlanetDetails from "../components/PlanetDetails.vue";
import PlanetStats from "../components/PlanetStats.vue";
import { mars } from "../data/planet-data";

const planet = mars;

export default {
  name: "Mars",
  components: {
    PlanetDetails,
    PlanetStats,
  },
  data() {
    return {
      planetName: planet.name,
      planetImg: planet.assets.planet,
      planetContent: planet.overview.content,
      planetSource: planet.overview.source,
      isOverviewBtnActive: true,
      isStructureBtnActive: false,
      isSurfaceBtnActive: false,
      activeBtnClass: "main-content__btn-active",
      planetRotation: planet.rotation,
      planetRevolution: planet.revolution,
      planetRadius: planet.radius,
      planetTemperature: planet.temperature,
    };
  },
  methods: {
    onClickOverview() {
      this.isOverviewBtnActive = true;
      this.isStructureBtnActive = false;
      this.isSurfaceBtnActive = false;
      this.planetContent = planet.overview.content;
      this.planetSource = planet.overview.source;
      this.planetImg = planet.assets.planet;
    },
    onClickStructure() {
      this.isOverviewBtnActive = false;
      this.isStructureBtnActive = true;
      this.isSurfaceBtnActive = false;
      this.planetContent = planet.structure.content;
      this.planetSource = planet.structure.source;
      this.planetImg = planet.assets.structure;
    },
    onClickSurface() {
      this.isOverviewBtnActive = false;
      this.isStructureBtnActive = false;
      this.isSurfaceBtnActive = true;
      this.planetContent = planet.geology.content;
      this.planetSource = planet.geology.source;
      this.planetImg = planet.assets.geology;
    },
  },
};
</script>
