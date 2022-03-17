<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t border-gray-800">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2" data-aos="fade-up">One token for so many different tasks. Don't just hodl it, use it!</h2>
        </div>

        <!-- Items -->
        <div class="grid gap-20" data-aos-id-target>

          <!-- Item -->
          <div class="md:grid md:grid-cols-12 md:gap-6 items-center">

            <!-- Image -->
            <div class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:rtl" data-aos="fade-right" data-aos-delay="200" data-aos-anchor="[data-aos-id-target]">
              <img class="mx-auto md:max-w-none" src="../images/home-token-block.png" width="540" height="520" alt="Features 02" />
            </div>

            <!-- Content -->
            <div class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
              <div class="md:pl-4 lg:pl-12 xl:pl-16">
                <div class="font-architects-daughter text-xl text-purple-600 mb-2" data-aos="fade-left" data-aos-anchor="[data-aos-id-target]">Be the change you want to see</div>
                <div class="mt-6" data-aos="fade-left" data-aos-delay="200" data-aos-anchor="[data-aos-id-target]">
                  <h4 class="h4 mb-2"><span class="text-purple-600">.</span>For Web 3.0 Ambassadors</h4>
                  <p class="text-lg text-gray-400">Support user-driven governance and true decentralization by holding tokens. Become a delegates on a DPoS-network and get tokens for mining new blocks.</p>
                </div>
                <div class="mt-6" data-aos="fade-left" data-aos-delay="400" data-aos-anchor="[data-aos-id-target]">
                  <h4 class="h4 mb-2"><span class="text-teal-500">.</span>For individuals & business</h4>
                  <p class="text-lg text-gray-400">Store your private data and use your digital signature every day with a familiar mobile app. No monthly fee, just pay-as-you use with utility tokens. And we've hidden all the technological complexities under the hood. </p>
                </div>
                <div class="mt-6" data-aos="fade-left" data-aos-delay="600" data-aos-anchor="[data-aos-id-target]">
                  <h4 class="h4 mb-2"><span class="text-pink-500">.</span>For large enterprise</h4>
                  <p class="text-lg text-gray-400">Easy blockchain innovation to create new products. Use your existing decentralized infrastructure to integrate your applications and use the token to legally exchange data with your counterparties.</p>
                </div>
                <a class="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-8" href="https://airtable.com/shrEtAXpQtyfwP98I">
                  <span class="text-sm">Get it</span>
                  <svg class="w-3 h-3 fill-current text-purple-400 shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 5H0v2h6v4l6-5-6-5z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TokenHome'
}
</script>