<template>
  <div class="m-1">
    <h3 class="capitalize text-2xl font-semibold">{{ title }}</h3>
    <BaseImg :src="imageSrc" />
    <div class="mt-2">
      <h3 class="capitalize text-2xl font-semibold" v-if="titleBelowImage">
        {{ titleBelowImage }}
      </h3>
      {{ description }}
    </div>
    <div class="mt-2">
      <BaseSvg :path="footerSvgPath" v-if="footerSvgPath" />
      {{ footer }}
    </div>
    <a
      :href="buttonLink"
      class="block w-1/2 mx-auto mt-2 px-6 py-2 text-center font-bold border-2 rounded-full hover:bg-blue-200 focus:border-blue-900 focus:rounded-full focus:outline-none"
      v-if="buttonText"
    >
      {{ buttonText }}
    </a>
  </div>
</template>

<script>
import BaseImg from './BaseImg'
import BaseSvg from './BaseSvg'

export default {
  name: 'BaseCard',
  components: {
    BaseImg,
    BaseSvg
  },
  props: {
    title: { type: String, default: '' },
    titleBelowImage: { type: String, default: '' },
    imageSrc: {
      type: String,
      default: 'https://via.placeholder.com/300x300.png'
    },
    description: { type: String, default: 'Description' },
    footer: { type: String, default: '' },
    footerSvgPath: { type: String, default: '' },
    buttonText: { type: String, default: '' },
    buttonLink: { type: String, default: '/' }
  }
}
</script>
