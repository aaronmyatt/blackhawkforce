<template>
  <div>
    <AboutUs />
    <WhatWeDo />
    <TheRightChoice />
    <WhoWeAre />
    <OurClients />
    <ContactUs />
  </div>
</template>

<script>

import AboutUs from '../components/sections/AboutUs'
import WhatWeDo from '../components/sections/WhatWeDo'
import TheRightChoice from '../components/sections/TheRightChoice'
import WhoWeAre from '../components/sections/WhoWeAre'
import OurClients from '../components/sections/OurClients'
import ContactUs from '../components/sections/ContactUs'

export default {
  components: {
    AboutUs,
    WhatWeDo,
    TheRightChoice,
    WhoWeAre,
    OurClients,
    ContactUs
  }
}
</script>
