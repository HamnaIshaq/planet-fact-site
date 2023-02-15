<template>
  <div>
    <div class="flex border-b">
      <header class="uppercase container flex-header flex-jsp">
        <router-link
          :to="{ name: 'earth' }"
          exact-active-class="no-active"
          class="flex-header--logo"
          >the planets</router-link
        >
        <input
          type="checkbox"
          class="flex-header__nav--toggle"
          id="flex-header__nav--toggle"
          :checked="isMenuOpen"
          @click="onMenuClick"
        />

        <nav class="flex-header__nav" @click="isMenuOpen = false">
          <ul class="flex-header__nav--ul">
            <li class="flex-header__nav--ul-li">
              <router-link
                :to="{ name: 'mercury' }"
                class="flex-header__nav--ul-li-link"
                >mercury</router-link
              >
            </li>
            <li class="flex-header__nav--ul-li">
              <router-link
                :to="{ name: 'venus' }"
                class="flex-header__nav--ul-li-link"
                >venus</router-link
              >
            </li>
            <li class="flex-header__nav--ul-li">
              <router-link
                :to="{ name: 'earth' }"
                class="flex-header__nav--ul-li-link"
                >earth</router-link
              >
            </li>
            <li class="flex-header__nav--ul-li">
              <router-link
                :to="{ name: 'mars' }"
                class="flex-header__nav--ul-li-link"
                >mars</router-link
              >
            </li>
            <li class="flex-header__nav--ul-li">
              <router-link
                :to="{ name: 'jupiter' }"
                class="flex-header__nav--ul-li-link"
                >jupiter</router-link
              >
            </li>
            <li class="flex-header__nav--ul-li">
              <router-link
                :to="{ name: 'saturn' }"
                class="flex-header__nav--ul-li-link"
                >saturn</router-link
              >
            </li>
            <li class="flex-header__nav--ul-li">
              <router-link
                :to="{ name: 'uranus' }"
                class="flex-header__nav--ul-li-link"
                >uranus</router-link
              >
            </li>
            <li class="flex-header__nav--ul-li">
              <router-link
                :to="{ name: 'neptune' }"
                class="flex-header__nav--ul-li-link"
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
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    onMenuClick() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>
