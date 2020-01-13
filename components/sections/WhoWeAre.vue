<template>
  <section class="text-white mx-auto py-12 bg-black">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-center text-center mb-24">
        <div class="w-full lg:w-6/12 px-4">
          <h2 class="text-4xl font-semibold">Who We Are</h2>
          <p class="text-lg leading-relaxed m-4 text-gray-600">
            ...
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap justify-center container mx-auto">
      <BaseProfile
        v-for="profile in profiles"
        :key="profile"
        :name="profile.name"
        :role="profile.role"
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
  data() {
    return {
      profiles: [
        {
          name: 'Ayub Hamzah',
          role: 'Managing Director',
          image: ''
        },
        {
          name: 'Salleh Husin',
          role: 'Executive Director',
          image: ''
        },
        {
          name: 'Wan Ahmad bin Wan Abas',
          role: 'Executive Director',
          image: ''
        },
        {
          name: 'Hamizan Shahudin',
          role: 'Operation Manager',
          image: ''
        },
        {
          name: 'Sallehudin Hj Moomin',
          role: 'Marketing Manager',
          image: ''
        }
      ]
    }
  }
}
</script>
