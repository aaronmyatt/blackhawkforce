<template>
  <nav
    class="flex items-center justify-between flex-wrap md:flex-no-wrap p-6 bg-black text-white"
  >
    <div class="flex items-center flex-shrink-0 mr-6">
      <span class="pr-4">
        <BaseImg :src="'/bhf_logo_gold_hawk.png'" class="w-16"/>
      </span>
      <span class="font-semibold text-xl tracking-wide uppercase">
        Blackhawk<span class="text-red-700">Force</span>
      </span>
    </div>
    <div class="block md:hidden">
      <button
        @click="mobileNavbarToggle"
        class="flex items-center px-3 py-2 border rounded"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div
      :class="{ hidden: mobileNavbarHidden }"
      class="w-full block flex-grow md:flex md:items-center md:justify-end"
    >
      <div class="text-sm md:text-base md:mr-4" v-for="link in links">
        <a class="block mt-4 lg:inline-block md:mt-0 mr-4">
          {{ link }}
        </a>
      </div>
      <!--      <div>-->
      <!--        <a-->
      <!--          class="inline-block text-sm px-4 py-2 leading-none border rounded mt-4 md:mt-0"-->
      <!--          href="#"-->
      <!--          >Company Profile</a-->
      <!--        >-->
      <!--      </div>-->
    </div>
  </nav>
</template>

<script>
import BaseImg from '../base/BaseImg'
export default {
  components: {
    BaseImg
  },
  name: 'Header',
  data() {
    return {
      links: [],
      mobileNavbarHidden: true
    }
  },
  methods: {
    mobileNavbarToggle() {
      this.mobileNavbarHidden = !this.mobileNavbarHidden
    }
  }
}
</script>
