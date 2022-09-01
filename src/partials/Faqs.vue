<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t border-gray-800">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12">
          <h2 class="h2">Frequently asked questions</h2>
        </div>

        <!-- Faqs -->
        <ul class="grid gap-8 md:grid-cols-2 xl:gap-x-16 lg:gap-y-12">
          <li>
            <h4 class="text-xl font-medium mb-2">What is idntty?</h4>
            <p class="text-lg text-gray-400">Idntty is infrastructure for digital ID & web-of-trust founded in mid 2021. Based on its own blockchain network, utility token and and a set of own SaaS. The Idntty infrastructure is designed to allow not only highly specialized specialists, but also mainstream users, to build decentralized applications and integrate with it.</p>
          </li>
          <li>
            <h4 class="text-xl font-medium mb-2">Who can verify my IDs and how?</h4>
            <p class="text-lg text-gray-400">Unlike centralized services with a single certification center, we allow anyone to become the validator of your digital ID. Depending on the level of trust you require in your ID and the task you are solving - it could be ordinary people, KYC providers, corporations or government agencies. For verification, it will be enough to issue a special transaction on our network to validate your ID. The more participants validate your ID, the more trustworthy it is.</p>
          </li>
          <li>
            <h4 class="text-xl font-medium mb-2">Why do I need to verify my ID?</h4>
            <p class="text-lg text-gray-400">You only need to validate your digital ID if you want to increase the level of trust in the actions you take - whether it's notarizing data or digitally signing documents. For your partners or counter-parties to understand that it is your address and names of your digital signature - they must somehow verify it. If they take your word for it or trust you for some other reason - you don't have to do it.</p>
          </li>
          <li>
            <h4 class="text-xl font-medium mb-2">What data may be subject to notarization?</h4>
            <p class="text-lg text-gray-400">Theoretically, any data can be subject to notarization. We have specially designed two transactions that are designed to notarize both structured data (such as those evaluated by the system) or unstructured data (such as normal files of any format). You can find the SDK and API in the special section with documentation for developers.</p>
          </li>
          <li>
            <h4 class="text-xl font-medium mb-2">What can I do besides notarize data?</h4>
            <p class="text-lg text-gray-400">There is a whole set of cases that can be implemented using a public digital ID infrastructure. Here is a set of the best known uses: P2P communication, authentication and authorization, 2FA, key rotation and ID recovery, and many others. We hope that after some time we ourselves or other developers will be able to provide such services for mainstream users base on idntty infrastructure.</p>
          </li>
          <li>
            <h4 class="text-xl font-medium mb-2">What is idntty token?</h4>
            <p class="text-lg text-gray-400">Like any decentralized infrastructure - idntty and requires transaction verification to write data to the decentralized storage using blockchain technology. To "pay" for these transactions is what tokens are needed. We don't have "gas" or any other tricky mechanisms - only the type of transaction and the amount of data you want to store in the decentralized storage affects the cost of the transaction.</p>
          </li>
        </ul>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Faqs'
}
</script>