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
      <div v-for="(client, index) in clients" :key="index">
        <BaseCard :image="client.logo" :title="client.name" :description="''" />
      </div>
    </div>
  </section>
</template>

<script>
import BaseImg from '../base/BaseImg'
import BaseCard from '../base/BaseCard'

export default {
  components: {
    BaseImg,
    BaseCard
  },
  computed: {
    clients() {
      return this.$jsonData('our_clients').clients
    }
  }
}
</script>
