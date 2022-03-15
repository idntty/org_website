<template>
  <Header/>
  <Stats/>
  <DelegatesTeam/>
  <Documentation/>
  <CtaContact/>
  <Footer/>
</template>
<script>
import Header from './../partials/Header.vue'
import Stats from './../partials/Stats.vue'
import DelegatesTeam from './../partials/DelegatesTeam.vue'
import Documentation from './../partials/Documentation.vue'
import CtaContact from './../partials/CtaContact.vue'
import Footer from './../partials/Footer.vue'
export default {
  name: 'Network',
  components: {
    Header,
    Stats,
    DelegatesTeam,
    Documentation,
    CtaContact,
    Footer
  }
}
</script>