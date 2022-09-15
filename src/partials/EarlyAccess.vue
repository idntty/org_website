<template>
  <section class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t border-gray-800">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 data-aos="fade-up" class="h2 mb-4">Early Access</h2>
          <p data-aos="fade-up" class="text-xl text-gray-400">While we're testing the infrastructure, launching the app for all of our early users will be free. And after the public launch, in gratitude we will offer unique conditions for early adopters, and for other users - we will try to do everything to make our offer the best on the market.</p>
        </div>

        <div>
          <div class="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-center lg:max-w-none">
            <div class="relative flex flex-col"></div>
            <div class="relative flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="800">
              <div class="mb-4 pb-4 border-b border-gray-700">
                <div class="h4 text-purple-600 mb-1">What you will get</div>
              </div>
              <ul class="text-gray-400 -mb-3 grow">
                <li class="flex items-center mb-3">
                  <svg class="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Unlimited documents to sign</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Unlimited documents for notary</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Unlimited digital Id updates</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Integrations</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Influence on product features*</span>
                </li>
              </ul>
              <div class="border border-gray-700 p-3 mt-6">
                <a class="btn-sm text-white bg-purple-600 hover:bg-purple-700 w-full" href="http://testnet.idntty.org/faucet">Get testnet tokens</a>
              </div>
            </div>
            <div class="relative flex flex-col"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EarlyAccess'
}
</script>