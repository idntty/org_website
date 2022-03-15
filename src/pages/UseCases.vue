<template>
  <Header/>
  <UseCasesZigzag/>
  <Roadmap/>
  <Faqs/>
  <CtaContact/>
  <Footer/>
</template>
<script>
import UseCasesZigzag from '../partials/UseCasesZigzag.vue'
import Roadmap from '../partials/Roadmap.vue'
import Faqs from '../partials/Faqs.vue'
import Header from './../partials/Header.vue'
import CtaContact from './../partials/CtaContact.vue'
import Footer from './../partials/Footer.vue'
export default {
  name: 'UseCases',
  components: {
    UseCasesZigzag,
    Header,
    Roadmap,
    Faqs,
    CtaContact,
    Footer
  }
}
</script>