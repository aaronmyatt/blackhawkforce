<template>
  <div class="w-full md:w-6/12 lg:w-1/3 lg:mb-0 mb-12 px-4">
    <div class="px-6">
      <img
        alt="..."
        :src="image"
        class="shadow-lg rounded-full max-w-full mx-auto"
        style="max-width: 140px;"
      />
      <div class="pt-6 text-center">
        <h5 class="text-xl font-bold">{{ name }}</h5>
        <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
          {{ role }}
        </p>
        <div class="mt-6">
          <a
            v-if="linkedin_profile_url"
            class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
            type="button"
            :href="linkedin_profile_url"
          >
            <i class="fab fa-linkedin" /></a
          ><a
            v-if="facebook_profile_url"
            class="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
            type="button"
            :href="facebook_profile_url"
          >
            <i class="fab fa-facebook-f" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseProfile',
  props: {
    image: {
      type: String,
      default: "https://via.placeholder.com/100x100.png"
    },
    name: {
      type: String
    },
    role: {
      type: String
    },
    facebook_profile_url: {
      type: String
    },
    linkedin_profile_url: {
      type: String
    }
  }
}
</script>
