<template>
    <section class="mx-auto py-8 w-full bg-black">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center text-center mb-16">
          <div class="w-full lg:w-6/12 px-4">
            <h2 class="text-4xl font-semibold text-white">What We Do</h2>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap container mx-auto justify-center">
            <div v-for="product in products" :key="product" class="w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto shadow-white shadow rounded-lg">
                  <h6 class="text-xl font-semibold">{{product}}</h6>
                </div>
              </div>
            </div>
          </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      products: [
        "Uniformed Guards (Local or Nepalese)",
        "Event Security",
        "Armed Guards",
        "Bodyguards",
        "Armed and Unarmed Escorts",
        "Private Detectives",
        "Guard Dogs"
      ]
    }
  }
}
</script>

