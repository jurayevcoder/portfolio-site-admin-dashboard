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
          class="w-full flex flex-col gap-5 md:flex md:flex-row items-center justify-between"
        >
          <button
            class="w-full md:w-[20%] bg-red-600 py-2.5 rounded-lg text-white font-bold border-2 border-red-600 hover:bg-[#414141] hover:text-red-600"
          >
            CLEAR
          </button>
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
    <div class="flex items-center justify-center gap-3 mb-5">
      <button
        @click="btnShow"
        :class="
          show
            ? 'text-blue-500 text-[20px] px-5 border-b border-blue-500'
            : 'text-white text-[20px] px-5 border-b border-white hover:text-[#FF8C00]'
        "
      >
        Show
      </button>
      <button
        @click="btnAdd"
        :class="
          add
            ? 'text-[#FF8C00] text-[20px] px-5 border-b border-[#FF8C00]'
            : 'text-white text-[20px] px-5 border-b border-white hover:text-[#FF8C00]'
        "
      >
        Add
      </button>
    </div>

    <div class="relative rounded-lg w-full bg-[#414141]">
      <div
        :class="show ? 'flex justify-between items-center p-4 pl-10 sm:mb-5 bg-blue-500 rounded-t-lg' : 'flex justify-between items-center p-4 pl-10 sm:mb-5 bg-[#FF8C00] rounded-t-lg'"
      >
        <h3 class="text-[24px] font-semibold text-white">Scill</h3>
      </div>

      <div :class="show ? 'relative overflow-x-auto shadow-md sm:rounded-lg' : 'hidden'">
      <table class="w-full text-sm text-left text-white">
        <thead
          class="text-[16px] text-white border-b-2 border-blue-500 uppercase bg-[#414141]"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Scill name</th>
            <th scope="col" class="px-6 py-3">icon</th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Delete</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-[#414141] border-b border-white border-dashed"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium whitespace-nowrap text-white"
            >
              JavaScript
            </th>
            <td class="px-6 py-4"><i class='bx bxl-javascript bx-tada text-[25px]'></i></td>
            <td class="px-6 py-4 text-right">
              <a
                href="#"
                class="font-medium text-red-600 hover:underline"
                >Delete</a
              >
            </td>
          </tr>
          <tr
            class="bg-[#414141] border-b border-white border-dashed"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium whitespace-nowrap text-white"
            >
              NodeJs
            </th>
            <td class="px-6 py-4"><i class='bx bxl-nodejs bx-tada text-[25px]'></i></td>
            <td class="px-6 py-4 text-right">
              <a
                href="#"
                class="font-medium text-red-600 hover:underline"
                >Delete</a
              >
            </td>
          </tr>
          <tr class="bg-[#414141]">
            <th
              scope="row"
              class="px-6 py-4 font-medium whitespace-nowrap text-white"
            >
              VueJs
            </th>
            <td class="px-6 py-4"><i class='bx bxl-vuejs bx-tada text-[25px]'></i></td>
            <td class="px-6 py-4 text-right">
              <a
                href="#"
                class="font-medium text-red-600 hover:underline"
                >Delete</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>

      <form :class="add? 'w-full p-5' : 'hidden'">
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
          class="w-full flex flex-col gap-5 md:flex md:flex-row items-center justify-between"
        >
          <button
            class="w-full md:w-[20%] bg-red-600 py-2.5 rounded-lg text-white font-bold border-2 border-red-600 hover:bg-[#414141] hover:text-red-600"
          >
            CLEAR
          </button>
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
    <div class="flex items-center justify-center gap-3 mb-5">
      <button
        @click="btnWorkShow"
        :class="
          showWork
            ? 'text-blue-500 text-[20px] px-5 border-b border-blue-500'
            : 'text-white text-[20px] px-5 border-b border-white hover:text-[#FF8C00]'
        "
      >
        Show
      </button>
      <button
        @click="btnWorkAdd"
        :class="
          addWork
            ? 'text-[#FF8C00] text-[20px] px-5 border-b border-[#FF8C00]'
            : 'text-white text-[20px] px-5 border-b border-white hover:text-[#FF8C00]'
        "
      >
        Add
      </button>
    </div>


    <div class="relative rounded-lg w-full bg-[#414141]">
      <div
        :class="showWork ? 'flex justify-between items-center p-4 pl-10 sm:mb-5 bg-blue-500 rounded-t-lg' : 'flex justify-between items-center p-4 pl-10 sm:mb-5 bg-[#FF8C00] rounded-t-lg'"
      >
        <h3 class="text-[24px] font-semibold text-white">Worked</h3>
      </div>

      <div :class="showWork ? 'relative overflow-x-auto shadow-md sm:rounded-lg' : 'hidden'">
      <table class="w-full text-sm text-left text-white">
        <thead
          class="text-[16px] text-white border-b-2 border-blue-500 uppercase bg-[#414141]"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Work name</th>
            <th scope="col" class="px-6 py-3">Link</th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Delete</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-[#414141]"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium whitespace-nowrap text-white"
            >
              Najot Ta'lim
            </th>
            <td class="px-6 py-4"><a href="https://najottalim.uz/" class="hover:underline hover:text-blue-500">https://najottalim.uz/</a></td>
            <td class="px-6 py-4 text-right">
              <a
                href="#"
                class="font-medium text-red-600 hover:underline"
                >Delete</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>

      <form :class="addWork ? 'w-full p-5' : 'hidden'">
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
          class="w-full flex flex-col gap-5 md:flex md:flex-row items-center justify-between"
        >
          <button
            class="w-full md:w-[20%] bg-red-600 py-2.5 rounded-lg text-white font-bold border-2 border-red-600 hover:bg-[#414141] hover:text-red-600"
          >
            CLEAR
          </button>
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
    <div class="flex items-center justify-center gap-3 mb-5">
      <button
        @click="btnSocialShow"
        :class="
          showSocial
            ? 'text-blue-500 text-[20px] px-5 border-b border-blue-500'
            : 'text-white text-[20px] px-5 border-b border-white hover:text-[#FF8C00]'
        "
      >
        Show
      </button>
      <button
        @click="btnSocialAdd"
        :class="
          addSocial
            ? 'text-[#FF8C00] text-[20px] px-5 border-b border-[#FF8C00]'
            : 'text-white text-[20px] px-5 border-b border-white hover:text-[#FF8C00]'
        "
      >
        Add
      </button>
    </div>

    <div class="relative rounded-lg w-full bg-[#414141]">
      <div
        :class="showSocial ? 'flex justify-between items-center p-4 pl-10 sm:mb-5 bg-blue-500 rounded-t-lg' : 'flex justify-between items-center p-4 pl-10 sm:mb-5 bg-[#FF8C00] rounded-t-lg'"
      >
        <h3 class="text-[24px] font-semibold text-white">Social media</h3>
      </div>

      <div :class="showSocial ? 'relative overflow-x-auto shadow-md sm:rounded-lg' : 'hidden'">
      <table class="w-full text-sm text-left text-white">
        <thead
          class="text-[16px] text-white border-b-2 border-blue-500 uppercase bg-[#414141]"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Social media name</th>
            <th scope="col" class="px-6 py-3">Icon</th>
            <th scope="col" class="px-6 py-3">Link</th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Delete</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-[#414141] border-b border-white border-dashed"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium whitespace-nowrap text-white"
            >
              GitHub
            </th>
            <td class="px-6 py-4"><i class='bx bxl-github bx-tada text-[25px]' ></i></td>
            <td class="px-6 py-4"><a href="https://github.com/jurayevcoder" class="hover:underline hover:text-blue-500">https://github.com/jurayevcoder</a></td>
            <td class="px-6 py-4 text-right">
              <a
                href="#"
                class="font-medium text-red-600 hover:underline"
                >Delete</a
              >
            </td>
          </tr>
          <tr
            class="bg-[#414141] border-b border-white border-dashed"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium whitespace-nowrap text-white"
            >
              LinkedIn
            </th>
            <td class="px-6 py-4"><i class='bx bxl-linkedin-square bx-tada text-[25px]' ></i></td>
            <td class="px-6 py-4"><a href="https://www.linkedin.com/in/davlat-jo-rayev-305074275/" class="hover:underline hover:text-blue-500">https://www.linkedin.com/in/davlat-jo-rayev-305074275/</a></td>
            <td class="px-6 py-4 text-right">
              <a
                href="#"
                class="font-medium text-red-600 hover:underline"
                >Delete</a
              >
            </td>
          </tr>
          <tr class="bg-[#414141]">
            <th
              scope="row"
              class="px-6 py-4 font-medium whitespace-nowrap text-white"
            >
              Telegram
            </th>
            <td class="px-6 py-4"><i class='bx bxl-telegram bx-tada text-[25px]' ></i></td>
            <td class="px-6 py-4"><a href="https://t.me/jurayevlive" class="hover:underline hover:text-blue-500">https://t.me/jurayevlive</a></td>
            <td class="px-6 py-4 text-right">
              <a
                href="#"
                class="font-medium text-red-600 hover:underline"
                >Delete</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>

      <form :class="addSocial ? 'w-full p-5' : 'hidden'">
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
          class="w-full flex flex-col gap-5 md:flex md:flex-row items-center justify-between"
        >
          <button
            class="w-full md:w-[20%] bg-red-600 py-2.5 rounded-lg text-white font-bold border-2 border-red-600 hover:bg-[#414141] hover:text-red-600"
          >
            CLEAR
          </button>
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
