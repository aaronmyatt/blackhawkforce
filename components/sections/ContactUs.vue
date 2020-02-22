<template>
  <section class="relative block bg-yellow-600">
    <div
      class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style="height: 80px; transform: translateZ(0px);"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          class="text-yellow-600 fill-current"
          points="2560 0 2560 100 0 100"
        />
      </svg>
    </div>
    <div class="relative block py-24">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center">
          <div class="w-full lg:w-6/12 px-4">
            <div
              class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-black"
            >
              <div class="flex-auto p-5 lg:p-10">
                <h4 class="text-2xl font-semibold text-white">
                  Contact Us
                </h4>
                <p class="leading-relaxed mt-1 mb-4 text-white">
                  Complete this form and we will get back to you in 24 hours.
                </p>
                <div class="relative w-full mb-3 mt-8">
                  <label
                    class="block uppercase text-white text-xs font-bold mb-2"
                    for="full-name"
                    >Full Name</label
                  ><input
                    type="text"
                    id="full-name"
                    class="px-3 py-3 bg-white rounded text-sm placeholder-gray-700 text-grey-800 shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Full Name"
                    style="transition: all 0.15s ease 0s;"
                  />
                </div>
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-white text-xs font-bold mb-2"
                    for="email"
                    >Email</label
                  ><input
                    type="email"
                    id="email"
                    class="px-3 py-3 bg-white rounded text-sm placeholder-gray-700 text-grey-800 shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Email"
                    style="transition: all 0.15s ease 0s;"
                  />
                </div>
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-white text-xs font-bold mb-2"
                    for="message"
                    >Message</label
                  ><textarea
                    id="message"
                    rows="4"
                    cols="80"
                    class="px-3 py-3 rounded text-sm placeholder-gray-700 text-grey-800 shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Type a message..."
                  />
                </div>
                <div class="text-center mt-6">
                  <button
                    class="text-white bg-gray-700 hover:bg-gray-600 active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style="transition: all 0.15s ease 0s;"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
