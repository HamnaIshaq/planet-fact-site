<template>
  <section class="stats">
    <div class="stats__container uppercase">
      <h5 class="stats__container-h5">rotation time</h5>
      <p class="stats__container-p">
        {{ planetRotation }}
      </p>
    </div>

    <div class="stats__container uppercase">
      <h5 class="stats__container-h5">revolution time</h5>
      <p class="stats__container-p">
        {{ planetRevolution }}
      </p>
    </div>

    <div class="stats__container uppercase">
      <h5 class="stats__container-h5">radius</h5>
      <p class="stats__container-p">
        {{ planetRadius }}
      </p>
    </div>

    <div class="stats__container uppercase">
      <h5 class="stats__container-h5">average temp.</h5>
      <p class="stats__container-p">
        {{ planetTemperature }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "PlanetStats",
  props: [
    "planetRotation",
    "planetRevolution",
    "planetRadius",
    "planetTemperature",
  ],
};
</script>
