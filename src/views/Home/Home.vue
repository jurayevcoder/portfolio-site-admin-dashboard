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
    <div class="w-full">
      <div
        :class="
          nav.profil
            ? 'w-full pt-10 flex flex-col lg:flex lg:flex-row gap-5 lg:gap-10 border-t-2 border-dashed border-[#414141] '
            : 'hidden'
        "
      >
        <div class="flex flex-col lg:items-start w-full lg:w-[35%]">
          <div
            class="w-full flex flex-col items-center gap-3 border-b-2 border-[#414141] border-dashed pb-5"
          >
            <img
              src="https://avatars.githubusercontent.com/u/129625436?v=4"
              alt=""
              class="border border-white w-[400px] h-[400%] rounded-full"
            />
            <h1 class="text-[24px] text-white font-semibold text-center w-full">
              {{ resInfo.fullname }}
            </h1>
          </div>
          <h2 class="text-[#414141] text-[20px] mt-5 mb-2 w-full">About :</h2>
          <p
            class="text-white text-[16px] w-full border-b-2 border-[#414141] border-dashed pb-5"
          >
            {{ resInfo.about }}
          </p>
          <div
            class="w-full flex flex-col gap-3 text-white text-[16px] mt-5 border-b-2 border-[#414141] border-dashed pb-5"
          >
            <h2 class="text-[#414141] text-[20px]">Contacs :</h2>
            <div class="ml-10 flex flex-wrap items-center gap-5">
              <p class="border-white rounded-lg px-3">{{ resInfo.phone }}</p>
              <p class="border-white rounded-lg px-3">{{ resInfo.email }}</p>
            </div>
          </div>

          <div
            class="w-full flex flex-col items-center gap-3 text-white text-[16px] mt-5 border-b-2 lg:border-0 border-[#414141] border-dashed pb-5"
          >
            <div class="w-full flex flex-wrap items-center">
              <h2 class="text-[#414141] text-[20px] w-[50%]">Birthday :</h2>
              <p class="w-[50%]">{{ resInfo.birthday }}</p>
            </div>
            <div class="w-full flex flex-wrap items-center">
              <h2 class="text-[#414141] text-[20px] w-[50%]">Age :</h2>
              <p class="w-[50%]">{{ resInfo.age }}</p>
            </div>
            <div class="w-full flex flex-wrap items-center">
              <h2 class="text-[#414141] text-[20px] w-[50%]">Experience :</h2>
              <p class="w-[50%]">{{ resInfo.experience }}</p>
            </div>
          </div>
        </div>

        <div
          class="w-full lg:w-[65%] flex flex-col lg:pl-5 lg:border-l-2 border-[#414141] border-dashed"
        >
          <div
            class="w-full flex flex-col text-white text-[16px] gap-3 border-b-2 border-[#414141] border-dashed pb-5"
          >
            <h2 class="text-[#414141] text-[20px] w-full">Skills :</h2>
            <div class="w-auto flex flex-wrap items-center gap-5 ml-10">
              <span
                v-for="el in resSkill.list"
                :key="el.id"
                class="text-white flex flex-wrap items-center gap-2 text-[16px] border-b border-white px-5 pb-1 rounded-lg"
                ><i :class="el.icon + 'bx-flip-vertical bx-tada text-[24px]'"></i
                >{{ el.name }}</span
              >
            </div>
          </div>

          <div
            class="w-full flex flex-col text-white text-[16px] gap-3 pt-5 border-b-2 border-[#414141] border-dashed pb-[22px]"
          >
            <h2 class="text-[#414141] text-[20px] w-full">Workeds :</h2>
            <div class="w-auto flex flex-wrap items-center gap-5 ml-10">
              <a
                v-for="el in resWorked.list"
                :key="el.id"
                :href="el.link"
                class="hover:underline hover:text-[#FF8C00]"
                >{{ el.name }}</a
              >
            </div>
          </div>

          <div class="w-full flex flex-col text-white text-[16px] gap-3 pt-5">
            <h2 class="text-[#414141] text-[20px] w-full">Social Media :</h2>
            <div class="w-auto flex flex-wrap items-center gap-5 ml-10">
              <div
                v-for="el in resMedia.list"
                :key="el.id"
                class="flex items-center gap-2 text-white"
              >
                <i :class="el.icon + ' text-[24px]'"></i>
                <a :href="el.link" class="hover:underline">{{ el.name }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        :class="
          nav.project ? 'w-full flex items-center justify-between gap-5 lg:px' : 'hidden'
        "
      >
        <button
          class="hover:bg-[#FF8C00] hover:text-white text-[30px] text-[#FF8C00] border border-[#FF8C00] flex items-center justify-center rounded-full w-12 h-12"
        >
          <i class="bx bx-chevron-left"></i>
        </button>
        <div class="w-[85%] border border-white rounded-lg flex flex-col lg:flex lg:flex-row">
          <div class="lg:w-[40%] w-full h-[500px] flex items-center justify-center">
            <img
              src="https://blogs.vmware.com/security/files/2020/05/haking_is_the_new_espionage.jpg"
              class="rounded-l-lg"
              alt=""
            />
          </div>
          <div class="w-full lg:w-[60%] border-l border-white"></div>
        </div>
        <button
          class="hover:bg-[#FF8C00] hover:text-white text-[30px] text-[#FF8C00] border border-[#FF8C00] flex items-center justify-center rounded-full w-12 h-12"
        >
          <i class="bx bx-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useInfo } from "../../service/Info";
import { useSkill } from "../../service/Skill";
import { useWorked } from "../../service/Worked";
import { useSocialMedia } from "../../service/Social-media";

const resInfo = reactive({
  fullname: "",
  phone: "",
  email: "",
  birthday: "",
  age: 0,
  about: "",
  experience: "",
});

const Info = ref(
  useInfo
    .show()
    .then((result) => {
      resInfo.fullname = result.data[0].fullname;
      resInfo.phone = result.data[0].phone;
      resInfo.email = result.data[0].email;
      resInfo.birthday = result.data[0].birthday;
      resInfo.age = result.data[0].age;
      resInfo.about = result.data[0].about;
      resInfo.experience = result.data[0].experience;
    })
    .catch((err) => {
      console.log(err);
    })
);

const resSkill = reactive({
  list: [],
});

const Skill = ref(
  useSkill
    .show()
    .then((result) => {
      for (let i = 0; i < result.data.length; i++) {
        resSkill.list.push({ name: result.data[i].name, icon: result.data[i].icon });
      }
    })
    .catch((err) => {
      console.log(err);
    })
);

const resWorked = reactive({
  list: [],
});

const Worked = ref(
  useWorked
    .show()
    .then((result) => {
      for (let i = 0; i < result.data.length; i++) {
        resWorked.list.push({ name: result.data[i].name, link: result.data[i].link });
      }
    })
    .catch((err) => {
      console.log(err);
    })
);

const resMedia = reactive({
  list: [],
});

const SocialMedia = ref(
  useSocialMedia
    .show()
    .then((result) => {
      for (let i = 0; i < result.data.length; i++) {
        resMedia.list.push({
          name: result.data[i].name,
          link: result.data[i].link,
          icon: result.data[i].icon,
        });
      }
      console.log(resMedia.list[0].icon);
    })
    .catch((err) => {
      console.log(err);
    })
);

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
