<template>
  <div
    class="w-full flex flex-col gap-y-5 lg:flex lg:flex-row items-center justify-between mb-14"
  >
    <div
      class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-[#414141] w-full lg:w-[23%] cursor-pointer"
    >
      <div class="p-4 flex items-center">
        <div class="w-12 h-12 p-3 rounded-full bg-orange-500 mr-4">
          <i
            class="bx bxs-user text-white text-[25px] flex items-center justify-center"
          ></i>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-400">Total users</p>
          <p class="text-lg font-semibold text-white">6389</p>
        </div>
      </div>
    </div>

    <div
      class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-[#414141] w-full lg:w-[23%] cursor-pointer"
    >
      <div class="p-4 flex items-center">
        <div class="w-12 h-12 p-3 rounded-full bg-green-500 mr-4">
          <i
            class="bx bxs-folder text-white text-[23px] flex items-center justify-center"
          ></i>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-400">Total projects</p>
          <p class="text-lg font-semibold text-white">5</p>
        </div>
      </div>
    </div>

    <div
      class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-[#414141] w-full lg:w-[23%] cursor-pointer"
    >
      <div class="p-4 flex items-center">
        <div class="w-12 h-12 p-3 rounded-full bg-blue-500 mr-4">
          <i
            class="bx bx-news text-white text-[25px] flex items-center justify-center"
          ></i>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-400">Total posts</p>
          <p class="text-lg font-semibold text-white">37</p>
        </div>
      </div>
    </div>

    <div
      class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-[#414141] w-full lg:w-[23%] cursor-pointer"
    >
      <div class="p-4 flex items-center">
        <div class="w-12 h-12 p-3 rounded-full bg-teal-500 mr-4">
          <i
            class="bx bxs-message-rounded-dots text-white text-[25px] flex items-center justify-center"
          ></i>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-400">New messages</p>
          <p class="text-lg font-semibold text-white">20</p>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full flex flex-col items-center gap-5">
    <div class="w-full flex items-center justify-center gap-3 md:gap-10">
      <button
        @click="toggleProfil"
        :class="
          nav.profil
            ? 'font-semibold text-[16px] border-b border-[#FF8C00] px-[15px] text-[#FF8C00]'
            : 'text-white font-semibold text-[16px] border-b border-white px-[15px] hover:text-[#FF8C00]'
        "
      >
        Profile
      </button>
      <button
        @click="toggleProject"
        :class="
          nav.project
            ? 'font-semibold text-[16px] border-b border-green-500 px-[15px] text-green-500'
            : 'text-white font-semibold text-[16px] border-b border-white px-[15px] hover:text-green-500'
        "
      >
        Projects
      </button>
      <button
        @click="togglePost"
        :class="
          nav.post
            ? 'font-semibold text-[16px] border-b border-blue-500 px-[15px] text-blue-500'
            : 'text-white font-semibold text-[16px] border-b border-white px-[15px] hover:text-blue-500'
        "
      >
        Posts
      </button>
    </div>
    <div class="border-t-2 border-dashed border-[#414141] w-full rounded-lg">
      <div :class="nav.profil ? 'w-full p-10 flex gap-5' : 'hidden'">
        <div class="flex flex-col items-start gap- w-[28%]">
          <div class="flex flex-col items-center gap-3">
            <img
              src="https://storage.prompt-hunt.workers.dev/clfip5tj10002m7081pax422h_1"
              alt=""
              class="border border-white w-[400px] h-[400%] rounded-full"
            />
            <h1
              class="text-[24px] text-white font-semibold text-center border-b rounded-lg w-full"
            >
              John Doe
            </h1>
          </div>
        </div>
        <div
          class="w-[70%] flex flex-col gap-10 border-l-2 border-[#414141] border-dashed pl-10 ml-5"
        >
          <div class="w-full flex items-center text-white text-[16px] gap-20">
            <h2 class="text-[#414141] text-[20px]">Contacs :</h2>
            <div
              class="flex items-center justify-center gap-10 border-b border-white rounded-lg px-5"
            >
              <p class="">+998910030951</p>
              <p class="">john@gmail.com</p>
            </div>
          </div>

          <div
            class="w-full flex flex-wrap items-center justify-between text-white text-[16px]"
          >
            <div class="flex items-center gap-20 w-[30%]">
              <h2 class="text-[#414141] text-[20px]">Birthday :</h2>
              <p class="border-b border-white rounded-lg px-5">2003-09-09</p>
            </div>
            <div class="flex items-center gap-20 w-[30%]">
              <h2 class="text-[#414141] text-[20px]">Age :</h2>
              <p class="border-b border-white rounded-lg px-5">20</p>
            </div>
            <div class="flex items-center gap-20 w-[30%]">
              <h2 class="text-[#414141] text-[20px]">Experience :</h2>
              <p class="border-b border-white rounded-lg px-5">1 years</p>
            </div>
          </div>

          <div
            class="w-full flex flex-wrap items-center text-white text-[16px] gap-8 border-t-2 border-[#414141] border-dashed pt-10"
          >
            <h2 class="text-[#414141] text-[20px]">Skills :</h2>
            <span
              class="text-white flex flex-wrap items-center gap-2 text-[16px] border-b border-white px-5 pb-1 rounded-lg"
              ><i
                class="bx bxl-javascript bx-flip-vertical bx-tada text-[24px]"
                style="color: #f2ff02"
              ></i
              >JavaScript</span
            >
            <span
              class="text-white flex flex-wrap items-center gap-2 text-[16px] border-b border-white px-5 pb-1 rounded-lg"
              ><i
                class="bx bxl-typescript bx-flip-vertical bx-tada text-[24px]"
                style="color: #02acff"
              ></i
              >TypeScript</span
            >
            <span
              class="text-white flex flex-wrap items-center gap-2 text-[16px] border-b border-white px-5 pb-1 rounded-lg"
              ><i
                class="bx bxl-javascript bx-flip-vertical bx-tada text-[24px]"
                style="color: #f2ff02"
              ></i
              >JavaScript</span
            >
            <span
              class="text-white flex flex-wrap items-center gap-2 text-[16px] border-b border-white px-5 pb-1 rounded-lg"
              ><i
                class="bx bxl-typescript bx-flip-vertical bx-tada text-[24px]"
                style="color: #02acff"
              ></i
              >TypeScript</span
            >
            <span
              class="text-white flex flex-wrap items-center gap-2 text-[16px] border-b border-white px-5 pb-1 rounded-lg"
              ><i
                class="bx bxl-javascript bx-flip-vertical bx-tada text-[24px]"
                style="color: #f2ff02"
              ></i
              >JavaScript</span
            >
            <span
              class="text-white flex flex-wrap items-center gap-2 text-[16px] border-b border-white px-5 pb-1 rounded-lg"
              ><i
                class="bx bxl-typescript bx-flip-vertical bx-tada text-[24px]"
                style="color: #02acff"
              ></i
              >TypeScript</span
            >
            <span
              class="text-white flex flex-wrap items-center gap-2 text-[16px] border-b border-white px-5 pb-1 rounded-lg"
              ><i
                class="bx bxl-javascript bx-flip-vertical bx-tada text-[24px]"
                style="color: #f2ff02"
              ></i
              >JavaScript</span
            >
            <span
              class="text-white flex flex-wrap items-center gap-2 text-[16px] border-b border-white px-5 pb-1 rounded-lg"
              ><i
                class="bx bxl-typescript bx-flip-vertical bx-tada text-[24px]"
                style="color: #02acff"
              ></i
              >TypeScript</span
            >
            <span
              class="text-white flex flex-wrap items-center gap-2 text-[16px] border-b border-white px-5 pb-1 rounded-lg"
              ><i
                class="bx bxl-javascript bx-flip-vertical bx-tada text-[24px]"
                style="color: #f2ff02"
              ></i
              >JavaScript</span
            >
            <span
              class="text-white flex flex-wrap items-center gap-2 text-[16px] border-b border-white px-5 pb-1 rounded-lg"
              ><i
                class="bx bxl-typescript bx-flip-vertical bx-tada text-[24px]"
                style="color: #02acff"
              ></i
              >TypeScript</span
            >
          </div>

          <div
            class="w-full flex flex-wrap items-center text-white text-[16px] gap-8 border-t-2 border-[#414141] border-dashed pt-10"
          >
            <h2 class="text-[#414141] text-[20px]">Workeds :</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const nav = reactive({
  profil: true,
  project: false,
  post: false,
});

const toggleProfil = () => (
  (nav.profil = true), (nav.project = false), (nav.post = false)
);
const toggleProject = () => (
  (nav.profil = false), (nav.project = true), (nav.post = false)
);
const togglePost = () => ((nav.profil = false), (nav.project = false), (nav.post = true));
</script>

<style lang="scss" scoped></style>
