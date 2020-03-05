<template>
  <section class="mx-auto py-8 w-full bg-black">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-center text-center mb-16">
        <div class="w-full lg:w-6/12 px-4">
          <h2 class="text-4xl font-semibold text-white">{{ header }}</h2>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap container mx-auto justify-center">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="w-full md:w-4/12 px-4 text-center"
      >
        <div
          class="flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
        >
          <div class="flex-auto shadow-white shadow rounded-lg">
            <img
              alt="..."
              :src="product.image"
              class="w-full align-middle rounded-t-lg"
            />
            <div class="p-4">
              <h6 class="text-2xl font-bold">{{ product.title }}</h6>
              <p>
                {{ product.body }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-center text-center mb-4">
        <div class="w-full lg:w-6/12 px-4">
          <h2 class="text-2xl font-semibold text-gray-400">
            Additional Services
          </h2>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap container mx-auto justify-center">
      <div class="w-full md:w-3/12 px-4 text-center">
        <div
          class="flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
        >
          <div class="flex-auto shadow-white shadow rounded-lg">
            <div class="p-4">
              <h6 class="text-xl font-bold">Security Consultation</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-3/12 px-4 text-center">
        <div
          class="flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
        >
          <div class="flex-auto shadow-white shadow rounded-lg">
            <div class="p-4">
              <h6 class="text-xl font-bold">Private Investigators</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    header() {
      return this.$jsonData('our_services').header
    },
    products() {
      return this.$jsonData('our_services').products
    }
  }
}
</script>
