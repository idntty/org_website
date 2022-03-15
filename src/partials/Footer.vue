<template>
  <footer>
    <div class="py-12 md:py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">

        <!-- Top area: Blocks -->
        <div class="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

          <!-- 1st block -->
          <div class="md:col-span-4 lg:col-span-5">
            <div class="mb-2">
              <!-- Logo -->
              <router-link to="/" class="inline-block" aria-label="Idntty">
            <svg width="91" height="33" viewBox="0 0 91 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.6734 31.0487C18.565 31.0487 22.2973 29.5028 25.0491 26.751C27.8009 23.9992 29.3468 20.2669 29.3468 16.3753C29.3468 12.4837 27.8009 8.75144 25.0491 5.99964C22.2973 3.24785 18.565 1.70191 14.6734 1.7019L14.6734 16.3753L14.6734 31.0487Z" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3.38848V31.0487H9.78227V1.7019H9.56507L0 3.38848Z" fill="white"/>
              <rect x="48.0732" y="1.677" width="9.78227" height="29.3468" fill="white"/>
              <rect x="62.7461" y="1.677" width="9.78227" height="29.3468" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M80.7505 1.8167L75.6005 31.0237H85.5336L90.6836 1.8167H80.7505ZM90.9762 0.157616L91.0001 0.0216824L90.9762 0.0174561V0.157616ZM75.3245 32.5886V32.7333L75.2998 32.7289L75.3245 32.5886Z" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M34.8132 31.0064L29.6386 1.65964H39.5717L44.7464 31.0064H34.8132ZM45.023 32.7158L45.047 32.7116L45.023 32.5756V32.7158ZM29.3467 0.00436038L29.3714 0V0.144605L29.3467 0.00436038Z" fill="white"/>
            </svg>
              </router-link>
            </div>
            <div class="text-gray-400">We made every part of private data management and digital signatures better with simple solution for end users, business, and developers.</div>
          </div>

          <!-- 2nd, 3rd and 4th blocks -->
          <div class="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

            <!-- 2nd block -->
            <div class="text-sm">
              <h6 class="text-gray-200 font-medium mb-1">Products</h6>
              <ul>
                <li class="mb-1">
                  <router-link to="#" class="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Web Studio</router-link>
                </li>
                <li class="mb-1">
                  <router-link to="#" class="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">DynamicBox Flex</router-link>
                </li>
                <li class="mb-1">
                  <router-link to="#" class="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Programming Forms</router-link>
                </li>
              </ul>
            </div>

            <!-- 3rd block -->
            <div class="text-sm">
              <h6 class="text-gray-200 font-medium mb-1">Resources</h6>
              <ul>
                <li class="mb-1">
                  <router-link to="#" class="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Nostrud exercitation</router-link>
                </li>
                <li class="mb-1">
                  <router-link to="#" class="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Visual mockups</router-link>
                </li>
                <li class="mb-1">
                  <router-link to="#" class="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Nostrud exercitation</router-link>
                </li>
                <li class="mb-1">
                  <router-link to="#" class="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Visual mockups</router-link>
                </li>
                <li class="mb-1">
                  <router-link to="#" class="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Nostrud exercitation</router-link>
                </li>
              </ul>
            </div>

            <!-- 4th block -->
            <div class="text-sm">
              <h6 class="text-gray-200 font-medium mb-1">Company</h6>
              <ul>
                <li class="mb-1">
                  <router-link to="#" class="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consectetur adipiscing</router-link>
                </li>
                <li class="mb-1">
                  <router-link to="#" class="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Labore et dolore</router-link>
                </li>
                <li class="mb-1">
                  <router-link to="#" class="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consectetur adipiscing</router-link>
                </li>
                <li class="mb-1">
                  <router-link to="#" class="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Labore et dolore</router-link>
                </li>
                <li class="mb-1">
                  <router-link to="#" class="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consectetur adipiscing</router-link>
                </li>
              </ul>
            </div>

          </div>

        </div>

        <!-- Bottom area -->
        <div class="md:flex md:items-center md:justify-between">

          <!-- Social links -->
          <ul class="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <router-link to="#" class="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
                <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                </svg>
              </router-link>
            </li>
            <li class="ml-4">
              <router-link to="#" class="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Github">
                <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </router-link>
            </li>
            <li class="ml-4">
              <router-link to="#" class="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Facebook">
                <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </router-link>
            </li>
            <li class="ml-4">
              <router-link to="#" class="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20.145" cy="11.892" r="1" />
                  <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                  <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                </svg>
              </router-link>
            </li>
            <li class="ml-4">
              <router-link to="#" class="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
                <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                </svg>
              </router-link>
            </li>
          </ul>

          <!-- Copyrights note -->
          <div class="text-gray-400 text-sm mr-4">&copy; 2022 IDNTTY. All rights reserved.</div>

        </div>

      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>