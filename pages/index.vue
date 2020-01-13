<template>
  <div>
    <AboutUs />
    <WhatWeDo />
    <TheRightChoice />
    <WhoWeAre />
    <!--  How we work  -->
    <!--  InAction  -->
    <ContactUs />
  </div>
</template>

<script>

import AboutUs from '../components/sections/AboutUs'
import WhatWeDo from '../components/sections/WhatWeDo'
import TheRightChoice from '../components/sections/TheRightChoice'
import WhoWeAre from '../components/sections/WhoWeAre'
import ContactUs from '../components/sections/ContactUs'

export default {
  components: {
    AboutUs,
    WhatWeDo,
    TheRightChoice,
    WhoWeAre,
    ContactUs
  },
  mounted() {
    console.info(this.$jsonData());
  }
}
</script>
