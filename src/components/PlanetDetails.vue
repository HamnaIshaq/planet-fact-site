<template>
  <section class="main-content">
    <div class="main-content__planet-img-container">
      <img class="main-content__planet-img" :src="planetInfo.assets.planet" alt="planet"/>
    </div>

    <div class="main-content__planet-info-container">
      <div class="main-content__planet-info">
        <h1 class="main-content__planet-info-h1 uppercase">{{ planetInfo.name }}</h1>
        <p class="main-content__planet-info-p font-weight-300">
          {{ planetInfo.overview.content }}
        </p>
        <span class="capitalize font-weight-300">
          source:
          <a class="main-content__planet-link" target="_blank" :href="planetInfo.overview.source">
            wikipedia
            <img class="external-link-icon" src="../assets/resources/external-link.svg" alt="external link icon" aria-hidden="true">
          </a>
        </span>
      </div>

      <div class="btn-container main-content__btn-container flex">
        <button type="button" class="btn uppercase main-content__btn">
          <span class="main-content__btn-number">01</span>
          <span>overview</span>
        </button>
        <button type="button" class="btn uppercase main-content__btn">
          <span class="main-content__btn-number">02</span>
          <span>structure</span>
        </button>
        <button type="button" class="btn uppercase main-content__btn">
          <span class="main-content__btn-number">03</span>
          <span>surface</span>
        </button>
      </div>
    </div>  
  </section>
</template>

<script>
export default {
  name: "PlanetDetails",
  props: [ "planetInfo" ]
}
</script>