<template>
  <section class="text-white mx-auto py-12 bg-black">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-center text-center mb-24">
        <div class="w-full lg:w-6/12 px-4">
          <h2 class="text-4xl font-semibold">{{ header }}</h2>
          <p class="text-lg leading-relaxed m-4 text-gray-600">
            ...
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap justify-center container mx-auto">
      <BaseProfile
        v-for="(profile, index) in profiles"
        :key="index"
        :name="profile.name"
        :role="profile.role"
        :image="profile.image"
      />
    </div>
  </section>
</template>

<script>
import BaseProfile from '../base/BaseProfile'

export default {
  components: {
    BaseProfile
  },
  computed: {
    profiles(){
      return this.$jsonData('our_people').profiles
    },
    header(){
      return this.$jsonData('our_people').header
    }
  }
}
</script>
