<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t border-gray-800">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16" data-aos-id-testimonialcar>
          <h2 class="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-testimonialcar]">Join the idntty delegates team</h2>
          <p class="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-testimonialcar]">Deploy your own node and become a member of the network to increase its decentralization and receive tokens for it</p>
        </div>

        <!-- Check list -->
        <div class="max-w-3xl mx-auto pb-16">
          <ul class="flex flex-col sm:flex-row flex-wrap justify-center items-center text-lg text-gray-400 -mx-3 -my-2">
            <li class="flex items-center mx-3 my-2" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-testimonialcar]">
              <svg class="w-6 h-6 mr-3 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle class="fill-current text-green-500" cx="12" cy="12" r="12" />
                <path class="fill-current text-white" d="M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z" />
              </svg>
              <span>Easy installation</span>
            </li>
            <li class="flex items-center mx-3 my-2" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-testimonialcar]">
              <svg class="w-6 h-6 mr-3 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle class="fill-current text-green-500" cx="12" cy="12" r="12" />
                <path class="fill-current text-white" d="M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z" />
              </svg>
              <span>Low cost to run the node</span>
            </li>
            <li class="flex items-center mx-3 my-2" data-aos="fade-up" data-aos-delay="600" data-aos-anchor="[data-aos-id-testimonialcar]">
              <svg class="w-6 h-6 mr-3 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle class="fill-current text-green-500" cx="12" cy="12" r="12" />
                <path class="fill-current text-white" d="M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z" />
              </svg>
              <span>Low competition</span>
            </li>
          </ul>
        </div>

        <!-- Carousel area-->
        <div class="max-w-2xl mx-auto">

          <!-- World map -->
          <div class="py-12">
            <div class="relative">
              <!-- Map -->
              <div class="absolute inset-0 flex justify-center items-end" aria-hidden="true">
                <div class="bottom-0 border-l border-dashed border-gray-500 transform translate-y-8" style="height: 50%;"></div>
              </div>
              <!-- People pics -->
              <img src="../images/worldmap.png" width="672" height="330" alt="World map">
              <img class="absolute rounded-full" style="top: 22%;left: 52%;" src="../images/avatar_01.png" width="32" height="32" alt="avatar 01" data-aos="fade-up" />
              <img class="absolute rounded-full" style="top: 50%;left: 58%;" src="../images/avatar_02.png" width="48" height="48" alt="avatar 02" data-aos="fade-up" data-aos-delay="400" />
              <img class="absolute rounded-full" style="top: 8.5%;left: 70.5%;" src="../images/avatar_03.png" width="56" height="56" alt="avatar 02" data-aos="fade-up" data-aos-delay="100" />
              <img class="absolute rounded-full" style="top: 34%;left: 76.5%;" src="../images/avatar_04.png" width="72" height="72" alt="avatar 04" data-aos="fade-up" data-aos-delay="700" />
              <img class="absolute rounded-full" style="top: 29.5%;left: 8.5%;" src="../images/avatar_05.png" width="48" height="48" alt="avatar 05" data-aos="fade-up" data-aos-delay="500" />
              <img class="absolute rounded-full" style="top: 56%;left: 19%;" src="../images/avatar_06.png" width="56" height="56" alt="avatar 06" data-aos="fade-up" data-aos-delay="200" />
              <img class="absolute rounded-full" style="top: 20%;left: 24.5%;" src="../images/avatar_07.png" width="64" height="64" alt="avatar 07" data-aos="fade-up" data-aos-delay="600" />
              <img class="absolute rounded-full" style="top: 39%;left: 43%;" src="../images/avatar_08.png" width="40" height="40" alt="avatar 08" data-aos="fade-up" data-aos-delay="300" />
            </div>
          </div>

          <!-- Carousel -->
          <div class="mt-6">

            <!-- Testimonials -->
            <transition-group
              tag="div"
              class="relative flex items-start"
              enter-active-class="transition ease-in-out duration-500 transform order-first"
              enter-from-class="opacity-0 scale-98"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="transition ease-out duration-300 transform absolute"
              leave-from-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-98"
            >
              <template :key="index" v-for="(item, index) in items">
                <div
                  v-show="active === index"
                  class="text-center"
                >
                  <div class="relative inline-flex flex-col justify-center mb-4">
                    <img class="rounded-full" :src="item.img" width="56" height="56" :alt="item.alt" />
                    <svg class="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                  </div>
                  <blockquote class="text-lg text-gray-400">{{item.quote}}</blockquote>
                  <div class="text-gray-700 font-medium mt-3">
                    <cite class="text-gray-200 not-italic">{{item.name}}</cite> / <span class="text-purple-600">{{item.role}}</span>
                  </div>
                </div>
              </template>
            </transition-group>

            <!-- Bullets -->
            <div class="flex justify-center mt-6">

              <template :key="index" v-for="(item, index) in items">
                <button class="p-1 group" @click="active = index; stopAutorotate();">
                  <span class="block w-2 h-2 rounded-full group-hover:bg-gray-400 transition duration-150 ease-in-out" :class="active === index ? 'bg-gray-200' : 'bg-gray-500'"></span>
                </button>
              </template>

            </div>

          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Image01 from '../images/avatar_01.png'
import Image02 from '../images/avatar_02.png'
import Image03 from '../images/avatar_03.png'

export default {
  name: 'DelegatesTeam',
  data: function () {
    return {
      active: 0,
      autorotate: true,
      autorotateTiming: 7000,
      items: [
        {
          img: Image01,
          alt: 'Testimonial 01',
          quote: '“ I don`t really understand why I need it, but I decided to make myself a digital ID, because once upon a time nobody believed in Bitcoin either “',
          name: 'Some anonymous user',
          role: 'Feedback form'
        },
        {
          img: Image02,
          alt: 'Testimonial 02',
          quote: '“ Oh, an interesting twist on the intersection of non-transferrable NFT and generative art in the avatar “',
          name: 'Thunder54',
          role: 'Discord chat'
        },
        {
          img: Image03,
          alt: 'Testimonial 03',
          quote: '“ О! To deploy a node - just a simple cloud server for $5-10, 30 minutes of time and the ability to read the documentation “',
          name: 'Backend developer',
          role: 'Shardul Puneker'
        }
      ]
    }
  },
  methods: {
    stopAutorotate() {
      clearInterval(this.autorotateInterval)
    }
  },
  mounted() {
    if (this.autorotate) {
        this.autorotateInterval = setInterval(() => {
            this.active = this.active + 1 === this.items.length ? 0 : this.active + 1
        }, this.autorotateTiming)
    }
  },
  beforeUnmount() {
    this.stopAutorotate()
  }
}
</script>