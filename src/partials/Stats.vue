<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 pt-32 md:pt-40 pb-12 md:pb-20">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 class="h2 mb-4">Decentralized  infrastructure designed for those who wants to create and operate solutions</h1>
        </div>

        <div class="grid md:grid-cols-3 bg-gray-800 divide-y md:divide-y-0 md:divide-x divide-gray-700 px-6 md:px-0 md:py-8 text-center">
          <!-- 1st item -->
          <div class="py-6 md:py-0 md:px-8">
            <div class="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">{{blocksNumber}}</div>
            <div class="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">Blocks</div>
          </div>
          <!-- 2nd item -->
          <div class="py-6 md:py-0 md:px-8">
            <div class="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">
              <!-- {{transactionsNumber}} -->
              -
            </div>
            <div class="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">Transactions</div>
          </div>
          <!-- 3rd item -->
          <div class="py-6 md:py-0 md:px-8">
            <div class="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">{{peersNumber}}</div>
            <div class="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">Peers</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import api from '../api'
export default {
  name: 'Stats',
  data () {
    return {
      peersNumber: 0,
      blocksNumber: 0,
      transactionsNumber: 0,
    }
  },
  async created () {
    try {
      const nodeInfo = await api.getNodeInfo()
      this.peersNumber = nodeInfo.data.network.seedPeers.length
      this.blocksNumber = nodeInfo.data.height
    } catch (e) {
      console.log(e)
    }
    // try {
    //   const transactionsQuantity = await api.getTransactionsQuantity()
    //   this.transactionsNumber = transactionsQuantity.data.transactionscount
    // } catch (e) {
    //   console.log(e)
    // }
  }
}
</script>