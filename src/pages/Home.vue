<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page illustration -->
      <div class="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
        <PageIllustration />
      </div>

      <!-- Page sections -->
      <HeroHome />
      <FeaturesHome/>
      <GatewayHome />
      <TokenHome />
      <EarlyAccess />
      <News />
      <CtaContact />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import PageIllustration from './../partials/PageIllustration.vue'
import HeroHome from './../partials/HeroHome.vue'
import FeaturesHome from './../partials/FeaturesHome.vue'
import GatewayHome from './../partials/GatewayHome.vue'
import TokenHome from './../partials/TokenHome.vue'
import EarlyAccess from './../partials/EarlyAccess.vue'
import News from './../partials/News.vue'
import CtaContact from './../partials/CtaContact.vue'
import Footer from './../partials/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    PageIllustration,
    HeroHome,
    FeaturesHome,
    GatewayHome,
    TokenHome,
    EarlyAccess,
    News,
    CtaContact,
    Footer,
  },
};
</script>
