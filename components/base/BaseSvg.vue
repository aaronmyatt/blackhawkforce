<template>
  <svg
    :height="height"
    :width="width"
    class="stroke-current inline-block"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path :d="path" />
  </svg>
</template>

<script>
export default {
  name: 'BaseSvg',
  props: {
    path: {
      type: String,
      default:
        'M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
    },
    width: {
      type: String,
      default: '24'
    },
    height: {
      type: String,
      default: '24'
    }
  }
}
</script>
