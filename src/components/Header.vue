<template>
  <div>
    <div class="flex border-b">
      <header class="uppercase container flex-header flex-jsp">
        <router-link to="/earth" class="flex-header--logo"
          >the planets</router-link
        >
        <input
          type="checkbox"
          class="flex-header__nav--toggle"
          id="flex-header__nav--toggle"
        />

        <nav class="flex-header__nav">
          <ul class="flex-header__nav--ul">
            <li class="flex-header__nav--ul-li">
              <router-link
                to="/mercury"
                class="flex-header__nav--ul-li-link"
                :class="
                  activePlanet == 'mercury'
                    ? 'flex-header__nav--ul-li-link--active'
                    : ''
                "
                @click.prevent="onChangeActivePlanet('mercury')"
                >mercury</router-link
              >
            </li>
            <li class="flex-header__nav--ul-li">
              <router-link
                to="/venus"
                class="flex-header__nav--ul-li-link"
                :class="
                  activePlanet == 'venus'
                    ? 'flex-header__nav--ul-li-link--active'
                    : ''
                "
                @click.prevent="onChangeActivePlanet('venus')"
                >venus</router-link
              >
            </li>
            <li class="flex-header__nav--ul-li">
              <router-link
                to="/earth"
                class="flex-header__nav--ul-li-link"
                :class="
                  activePlanet == 'earth'
                    ? 'flex-header__nav--ul-li-link--active'
                    : ''
                "
                @click.prevent="onChangeActivePlanet('earth')"
                >earth</router-link
              >
            </li>
            <li class="flex-header__nav--ul-li">
              <router-link
                to="/mars"
                class="flex-header__nav--ul-li-link"
                :class="
                  activePlanet == 'mars'
                    ? 'flex-header__nav--ul-li-link--active'
                    : ''
                "
                @click.prevent="onChangeActivePlanet('mars')"
                >mars</router-link
              >
            </li>
            <li class="flex-header__nav--ul-li">
              <router-link
                to="/jupiter"
                class="flex-header__nav--ul-li-link"
                :class="
                  activePlanet == 'jupiter'
                    ? 'flex-header__nav--ul-li-link--active'
                    : ''
                "
                @click.prevent="onChangeActivePlanet('jupiter')"
                >jupiter</router-link
              >
            </li>
            <li class="flex-header__nav--ul-li">
              <router-link
                to="/saturn"
                class="flex-header__nav--ul-li-link"
                :class="
                  activePlanet == 'saturn'
                    ? 'flex-header__nav--ul-li-link--active'
                    : ''
                "
                @click.prevent="onChangeActivePlanet('saturn')"
                >saturn</router-link
              >
            </li>
            <li class="flex-header__nav--ul-li">
              <router-link
                to="/uranus"
                class="flex-header__nav--ul-li-link"
                :class="
                  activePlanet == 'uranus'
                    ? 'flex-header__nav--ul-li-link--active'
                    : ''
                "
                @click.prevent="onChangeActivePlanet('uranus')"
                >uranus</router-link
              >
            </li>
            <li class="flex-header__nav--ul-li">
              <router-link
                to="/neptune"
                class="flex-header__nav--ul-li-link"
                :class="
                  activePlanet == 'neptune'
                    ? 'flex-header__nav--ul-li-link--active'
                    : ''
                "
                @click.prevent="onChangeActivePlanet('neptune')"
                >neptune</router-link
              >
            </li>
          </ul>
        </nav>

        <label
          for="flex-header__nav--toggle"
          class="flex-header__nav--toggle-label"
        >
          <span></span>
        </label>
      </header>
    </div>
    <div class="planet-info-btn-container border-b">
      <div class="container btn-container flex flex-jsp">
        <button type="button" class="btn uppercase btn-header">overview</button>
        <button type="button" class="btn uppercase btn-header">
          structure
        </button>
        <button type="button" class="btn uppercase btn-header">surface</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["activePlanet", "onChangeActivePlanet"],
};
</script>
