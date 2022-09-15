<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t border-gray-800">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2" data-aos="fade-up">Featured blog posts</h2>
        </div>

        <!-- Articles list -->
        <div class="max-w-sm mx-auto md:max-w-none">
          <div class="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">

            <article v-for="(post, index) in posts" :key="index" class="flex flex-col h-full" data-aos="fade-up" :data-aos-delay="index * 200">
              <header>
                <a :href="post.link" class="block mb-6">
                  <figure class="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                    <img class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" :src="post.image" :alt="post.title" />
                  </figure>
                </a>
                <div class="mb-3">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li v-for="(tag, index) in post.tags" :key="index" class="m-1">
                      <a :href="post.link" class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" >{{tag}}</a>
                    </li>
                  </ul>
                </div>
                <h3 class="h4 mb-2">
                  <a :href="post.link" class="hover:text-gray-100 transition duration-150 ease-in-out">{{post.title}}</a>
                </h3>
              </header>
              <p class="text-lg text-gray-400 grow">{{post.descpiption}}</p>
            </article>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'News',
  data () {
    return {
      posts: [
        {
          title: 'Why are we launching a testnet',
          link: 'https://idntty.medium.com/60b34387d231',
          image: 'https://miro.medium.com/max/600/1*NPBK8kJG_kdrclFPxMCFug.png',
          tags: ['Infrastructure'],
          descpiption: 'Any complex product can be developed and tested ad infinitum. That`s the essence of creating products, any products at all. But at some point in time, you have to stop doing this only with your team and show it publicly to get feedback and understand where you`re right and where you need to redo something again. That`s exactly the plan we have.'
        },
        {
          title: 'Cross-border transactions and data notary',
          link: 'https://medium.com/coinmonks/cross-border-transactions-and-data-notary-68829d192128',
          image: 'https://miro.medium.com/max/600/1*f4XgDBcuUDdCOF12dZG4uA.png',
          tags: ['Notary Platform'],
          descpiption: 'When we talk about electronic signatures, very often the question arises for some important documents, not just to confirm its authenticity and validity by signature, but also to notarize the fact of signing the document itself. Such a fact is usually registered by notaries, but what to do if all…'
        },
        {
          title: 'How to democratize e-signature using blockchain technology',
          link: 'https://medium.com/@idntty/how-to-democratize-e-signature-using-blockchain-technology-a7798c8c29e5',
          image: 'https://miro.medium.com/max/700/1*z9FtbphiNaBT7SUMs-IcYg.png',
          tags: ['E Sign'],
          descpiption: 'There is a rather famous quote “If you want to hide something, put it in the most prominent place” — approximately the same approach we use to store private data in the public infrastructure based on blockchain technology. We would like to explain why and most importantly why we want…'
        }
      ]
    }
  }
}
</script>