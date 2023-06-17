<template>
  <div class="w-full mb-14 pb-14 border-b-2 border-[#414141] border-dashed">
    <div class="relative rounded-lg w-full bg-[#414141]">
      <div
        class="flex justify-between items-center p-4 pl-10 sm:mb-5 bg-[#FF8C00] rounded-t-lg"
      >
        <h3 class="text-[24px] font-semibold text-white">Info</h3>
      </div>
      <form class="w-full p-5">
        <div class="w-full flex flex-col items-center gap-8 mb-20">
          <div
            class="w-full flex flex-col items-center justify-between gap-8 lg:flex lg:flex-row"
          >
            <div class="w-full lg:w-[50%]">
              <label for="image" class="block mb-2 text-[18px] font-medium text-white"
                >Image avatar</label
              >
              <input
                type="file"
                name="image"
                id="image"
                class="w-full lg:w-[50%] h-14 bg-[#414141] border outline-none border-white border-dashed rounded-lg block p-3 cursor-pointer"
                placeholder=""
                required=""
              />
            </div>
            <div class="w-full lg:w-[50%]">
              <label for="fullname" class="block mb-2 text-[18px] font-medium text-white"
                >Full name</label
              >
              <input
                type="name"
                name="fullname"
                id="fullname"
                class="w-full h-14 bg-[#414141] border outline-none border-white border-dashed text-white rounded-lg block p-3"
                placeholder="John Doe"
                required=""
              />
            </div>
          </div>

          <div class="w-full flex flex-col justify-between gap-8 lg:flex lg:flex-row">
            <div class="w-full lg:w-[50%]">
              <label for="phone" class="block mb-2 text-[18px] font-medium text-white"
                >Phone number</label
              >
              <input
                type="phone"
                name="phone"
                id="phone"
                class="w-full h-14 bg-[#414141] border outline-none border-white border-dashed text-white rounded-lg block p-3"
                placeholder="+998 xx xxx xx xx"
                required=""
              />
            </div>
            <div class="w-full lg:w-[50%]">
              <label for="email" class="block mb-2 text-[18px] font-medium text-white"
                >Email</label
              >
              <input
                type="email"
                name="email"
                id="email"
                class="w-full h-14 bg-[#414141] border outline-none border-white border-dashed text-white rounded-lg block p-3"
                placeholder="john@gmail.com"
                required=""
              />
            </div>
          </div>

          <div class="w-full flex flex-col justify-between gap-8 lg:flex lg:flex-row">
            <div class="w-full lg:w-[50%]">
              <label for="birthday" class="block mb-2 text-[18px] font-medium text-white"
                >Birthday</label
              >
              <input
                type="date"
                name="birthday"
                id="birthday"
                class="w-full h-14 bg-[#414141] border outline-none border-white border-dashed text-white rounded-lg block p-3"
                required=""
              />
            </div>
            <div class="w-full lg:w-[50%]">
              <label for="age" class="block mb-2 text-[18px] font-medium text-white"
                >Age</label
              >
              <input
                type="number"
                name="age"
                id="age"
                class="w-full h-14 bg-[#414141] border outline-none border-white border-dashed text-white rounded-lg block p-3"
                placeholder="20"
                required=""
              />
            </div>
          </div>

          <div class="w-full flex flex-col justify-between gap-8 lg:flex lg:flex-row">
            <div class="w-full lg:w-[50%]">
              <label
                for="experience"
                class="block mb-2 text-[18px] font-medium text-white"
                >Experience</label
              >
              <input
                type="text"
                name="experience"
                id="experience"
                class="w-full h-14 bg-[#414141] border outline-none border-white border-dashed text-white rounded-lg block p-3"
                placeholder="5 years"
                required=""
              />
            </div>
            <div class="w-full lg:w-[50%]">
              <label for="about" class="block mb-2 text-[18px] font-medium text-white"
                >About</label
              >
              <input
                type="text"
                name="about"
                id="about"
                class="w-full h-14 bg-[#414141] border outline-none border-white border-dashed text-white rounded-lg block p-3"
                placeholder="I'm full stack developer!"
                required=""
              />
            </div>
          </div>
        </div>

        <div
          class="w-full flex flex-col gap-5 md:flex md:flex-row items-center justify-end"
        >
          <button
            class="w-full md:w-[20%] bg-[#FF8C00] py-2.5 rounded-lg text-white font-bold border-2 border-[#FF8C00] hover:bg-[#414141] hover:text-[#FF8C00]"
          >
            CHANGE
          </button>
        </div>
      </form>
    </div>
  </div>

  <div class="w-full mb-14 pb-14 border-b-2 border-[#414141] border-dashed">

    <div class="relative rounded-lg w-full bg-[#414141]">
      <div
        class="flex justify-between items-center p-4 pl-10 sm:mb-5 bg-[#FF8C00] rounded-t-lg"
      >
        <h3 class="text-[24px] font-semibold text-white">Scill</h3>
      </div>



      <form class="w-full p-5">
        <div class="w-full flex flex-col items-center gap-8 mb-20">
          <div class="w-full flex flex-col justify-between gap-8 lg:flex lg:flex-row">
            <div class="w-full lg:w-[50%]">
              <label for="name" class="block mb-2 text-[18px] font-medium text-white"
                >Name</label
              >
              <input
                type="text"
                name="name-scill"
                id="name"
                class="w-full h-14 bg-[#414141] border outline-none border-white border-dashed text-white rounded-lg block p-3"
                placeholder="VueJs"
                required=""
              />
            </div>
            <div class="w-full lg:w-[50%]">
              <label for="icon" class="block mb-2 text-[18px] font-medium text-white"
                >Icon</label
              >
              <input
                type="text"
                name="icon"
                id="icon"
                class="w-full h-14 bg-[#414141] border outline-none border-white border-dashed text-white rounded-lg block p-3"
                placeholder="bx bxl-vuejs"
                required=""
              />
            </div>
          </div>
        </div>

        <div
          class="w-full flex flex-col gap-5 md:flex md:flex-row items-center justify-end"
        >
          <button
            class="w-full md:w-[20%] bg-[#FF8C00] py-2.5 rounded-lg text-white font-bold border-2 border-[#FF8C00] hover:bg-[#414141] hover:text-[#FF8C00]"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  </div>

  <div class="w-full mb-14 pb-14 border-b-2 border-[#414141] border-dashed">
    <div class="relative rounded-lg w-full bg-[#414141]">
      <div
        class="flex justify-between items-center p-4 pl-10 sm:mb-5 bg-[#FF8C00] rounded-t-lg"
      >
        <h3 class="text-[24px] font-semibold text-white">Worked</h3>
      </div>



      <form class="w-full p-5">
        <div class="w-full flex flex-col items-center gap-8 mb-20">
          <div class="w-full flex flex-col justify-between gap-8 lg:flex lg:flex-row">
            <div class="w-full lg:w-[50%]">
              <label for="name" class="block mb-2 text-[18px] font-medium text-white"
                >Name</label
              >
              <input
                type="text"
                name="name-work"
                id="name"
                class="w-full h-14 bg-[#414141] border outline-none border-white border-dashed text-white rounded-lg block p-3"
                placeholder="Google"
                required=""
              />
            </div>
            <div class="w-full lg:w-[50%]">
              <label for="link" class="block mb-2 text-[18px] font-medium text-white"
                >Link</label
              >
              <input
                type="text"
                name="link"
                id="link"
                class="w-full h-14 bg-[#414141] border outline-none border-white border-dashed text-white rounded-lg block p-3"
                placeholder="https://google.com"
                required=""
              />
            </div>
          </div>
        </div>

        <div
          class="w-full flex flex-col gap-5 md:flex md:flex-row items-center justify-end"
        >
          <button
            class="w-full md:w-[20%] bg-[#FF8C00] py-2.5 rounded-lg text-white font-bold border-2 border-[#FF8C00] hover:bg-[#414141] hover:text-[#FF8C00]"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  </div>

  <div class="w-full">
    <div class="relative rounded-lg w-full bg-[#414141]">
      <div
        class="flex justify-between items-center p-4 pl-10 sm:mb-5 bg-[#FF8C00] rounded-t-lg"
      >
        <h3 class="text-[24px] font-semibold text-white">Social media</h3>
      </div>


      <form class="w-full p-5">
        <div class="w-full flex flex-col items-center gap-8 mb-20">
          <div class="w-full flex flex-col justify-between gap-8 lg:flex lg:flex-row">
            <div class="w-full lg:w-[50%]">
              <label for="name" class="block mb-2 text-[18px] font-medium text-white"
                >Name</label
              >
              <input
                type="text"
                name="name-social-media"
                id="name"
                class="w-full h-14 bg-[#414141] border outline-none border-white border-dashed text-white rounded-lg block p-3"
                placeholder="Instagram"
                required=""
              />
            </div>
            <div class="w-full lg:w-[50%]">
              <label for="link" class="block mb-2 text-[18px] font-medium text-white"
                >Link</label
              >
              <input
                type="text"
                name="link"
                id="link"
                class="w-full h-14 bg-[#414141] border outline-none border-white border-dashed text-white rounded-lg block p-3"
                placeholder="https://account/instagram.com"
                required=""
              />
            </div>
          </div>

          <div class="w-full flex flex-col justify-center gap-8 lg:flex lg:flex-row">
            <div class="w-full lg:w-[50%]">
              <label for="icon" class="block mb-2 text-[18px] font-medium text-white"
                >Icon</label
              >
              <input
                type="text"
                name="icon"
                id="icon"
                class="w-full h-14 bg-[#414141] border outline-none border-white border-dashed text-white rounded-lg block p-3"
                placeholder="bx bxl-instagram"
                required=""
              />
            </div>
          </div>
        </div>

        <div
          class="w-full flex flex-col gap-5 md:flex md:flex-row items-center justify-end"
        >
          <button
            class="w-full md:w-[20%] bg-[#FF8C00] py-2.5 rounded-lg text-white font-bold border-2 border-[#FF8C00] hover:bg-[#414141] hover:text-[#FF8C00]"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const show = ref(true);
const add = ref(false);

const showWork = ref(true);
const addWork = ref(false);

const showSocial = ref(true);
const addSocial = ref(false);

const btnShow = () => (show.value = true) && (add.value = false);
const btnAdd = () => (add.value = true) && (show.value = false);

const btnWorkShow = () => (showWork.value = true) && (addWork.value = false);
const btnWorkAdd = () => (addWork.value = true) && (showWork.value = false);

const btnSocialShow = () => (showSocial.value = true) && (addSocial.value = false);
const btnSocialAdd = () => (addSocial.value = true) && (showSocial.value = false);
</script>

<style lang="scss" scoped></style>
