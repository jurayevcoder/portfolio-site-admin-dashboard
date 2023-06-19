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
          <p class="text-lg font-semibold text-white">{{ leng.user }}</p>
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
          <p class="text-lg font-semibold text-white">{{ leng.project }}</p>
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
          <p class="text-lg font-semibold text-white">{{ leng.post }}</p>
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
      <div :class="nav.project ? 'w-full mt-5 mb-5' : 'hidden'">
        <h1 :class="leng.project == 0 ? 'text-[25px] text-white' : 'hidden'">
          Empty project
        </h1>
        <div
          :class="
            leng.project == 0
              ? 'hidden'
              : 'w-full flex items-center justify-between gap-5'
          "
        >
          <button
            @click="btnBack"
            class="hover:bg-[#FF8C00] hover:text-white text-[30px] text-[#FF8C00] border border-[#FF8C00] flex items-center justify-center rounded-full w-12 h-12"
          >
            <i class="bx bx-chevron-left"></i>
          </button>
          <div class="w-[85%] border border-white rounded-lg flex flex-col">
            <div
              class="w-full max:h-[500px] flex sm:items-center justify-center items-start p-1"
            >
              <img
                src="https://blogs.vmware.com/security/files/2020/05/haking_is_the_new_espionage.jpg"
                class=""
                alt=""
              />
            </div>
            <div class="w-full border-t lg:border-l border-white p-5">
              <div class="w-full flex items-center justify-between mb-5">
                <h2 class="w-auto text-[25px] text-white font-semibold">
                  {{ value?.project?.name }}
                </h2>
                <div class="w-auto flex flex-wrap items-center gap-5">
                  <button
                    @click="delProject(value?.project?.id)"
                    class="text-[25px] text-red-600"
                  >
                    <i class="bx bx-trash"></i>
                  </button>
                </div>
              </div>
              <div class="w-full flex items-center gap-3 text-white mb-5">
                <i class="bx bx-world text-[25px]"></i>
                <a
                  :href="value?.project?.link_project_ui"
                  class="underline hover:text-green-500"
                  >View web site</a
                >
              </div>
              <div class="w-full flex items-center gap-3 text-white mb-5 lg:mb-10">
                <i class="bx bx-code-alt text-[25px]"></i>
                <a
                  :href="value?.project?.link_project_code"
                  class="underline texts hover:text-green-500"
                  >View code</a
                >
              </div>
              <p class="text-[16px] text-white">
                {{ value?.project?.description }}
              </p>
            </div>
          </div>
          <button
            @click="btnNext"
            class="hover:bg-[#FF8C00] hover:text-white text-[30px] text-[#FF8C00] border border-[#FF8C00] flex items-center justify-center rounded-full w-12 h-12"
          >
            <i class="bx bx-chevron-right"></i>
          </button>
        </div>
      </div>

      <div :class="nav.post ? 'w-full mt-5 mb-5' : 'hidden'">
        <h1 :class="leng.post == 0 ? 'text-[25px] text-white' : 'hidden'">
          Empty post
        </h1>
        <div
          :class="
            leng.post == 0 ? 'hidden' : 'w-full flex items-center justify-between gap-5'
          "
        >
          <button
            @click="btnBackPost"
            class="hover:bg-[#FF8C00] hover:text-white text-[30px] text-[#FF8C00] border border-[#FF8C00] flex items-center justify-center rounded-full lg:w-12 lg:h-12"
          >
            <i class="bx bx-chevron-left"></i>
          </button>
          <div class="w-[85%] border border-white rounded-lg flex flex-col">
            <div class="w-full flex sm:items-center justify-center items-start p-1">
              <img
                src="https://balkaninsight.com/wp-content/uploads/2020/10/hacker-scaled-e1645110068231-1280x720.jpg"
                class="max-h-[500px]"
                alt=""
              />
            </div>
            <div class="w-full border-t lg:border-l border-white p-5">
              <div class="w-full flex items-center justify-between mb-5">
                <h2 class="w-auto text-[25px] text-white font-semibold">
                  {{ value?.post?.title }}
                </h2>
                <div class="w-auto flex flex-wrap items-center gap-5">
                  <button class="text-[25px] text-teal-500">
                    <i class="bx bxs-message-rounded-detail"></i>
                  </button>
                  <button
                    @click="delPost(value?.post?.id)"
                    class="text-[25px] text-red-600"
                  >
                    <i class="bx bx-trash"></i>
                  </button>
                </div>
              </div>

              <p class="text-[16px] text-white mb-5">
                {{ value?.post?.description }}
              </p>
              <p class="text-[16px] text-blue-500">
                {{ value?.post?.teg }}
              </p>
            </div>
          </div>
          <button
            @click="btnNextPost"
            class="hover:bg-[#FF8C00] hover:text-white text-[30px] text-[#FF8C00] border border-[#FF8C00] flex items-center justify-center rounded-full lg:w-12 lg:h-12"
          >
            <i class="bx bx-chevron-right"></i>
          </button>
        </div>
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
import { useAuth } from "../../service/auth";
import { useProject } from "../../service/Project";
import { usePost } from "../../service/Post";
import { toast } from "vue3-toastify";

const leng = reactive({
  user: 0,
  project: 0,
  post: 0,
  msg: 0,
});

const value = reactive({
  project: null,
  post: null,
});

const User = ref(
  useAuth
    .get()
    .then((result) => {
      leng.user = result.data.length;
    })
    .catch((err) => {
      console.log(err);
    })
);

const count = reactive({
  sch: 0,
  chs: 0,
});

const delProject = (id) => {
  useProject.delete(id);
  toast.success("Successfully delete project !", {
    autoClose: 5000,
    theme: "dark",
    pauseOnHover: true,
  });
};

const delPost = (id) => {
  usePost.delete(id);
  toast.success("Successfully delete post !", {
    autoClose: 5000,
    theme: "dark",
    pauseOnHover: true,
  });
};

const btnNext = () => {
  if (leng.project - 1 <= count.sch) {
    count.sch = 0;
  } else {
    count.sch = count.sch + 1;
  }
  useProject
    .show()
    .then((result) => {
      for (let i = 0; i < result.data.length; i++) {
        value.project = result.data[count.sch];
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const btnBack = () => {
  if (count.sch == 0) {
    count.sch = leng.project - 1;
  } else {
    count.sch = count.sch - 1;
  }
  useProject
    .show()
    .then((result) => {
      for (let i = 0; i < result.data.length; i++) {
        value.project = result.data[count.sch];
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const btnNextPost = () => {
  if (leng.post - 1 <= count.chs) {
    count.chs = 0;
  } else {
    count.chs = count.chs + 1;
  }
  usePost
    .show()
    .then((result) => {
      for (let i = 0; i < result.data.length; i++) {
        value.post = result.data[count.chs];
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const btnBackPost = () => {
  if (count.chs == 0) {
    count.chs = leng.post - 1;
  } else {
    count.chs = count.chs - 1;
  }
  usePost
    .show()
    .then((result) => {
      for (let i = 0; i < result.data.length; i++) {
        value.post = result.data[count.chs];
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const Poroject = ref(
  useProject
    .show()
    .then((result) => {
      leng.project = result.data.length;
      for (let i = 0; i < result.data.length; i++) {
        value.project = result.data[count.sch];
      }
    })
    .catch((err) => {
      console.log(err);
    })
);

const Post = ref(
  usePost
    .show()
    .then((result) => {
      leng.post = result.data.length;
      for (let i = 0; i < result.data.length; i++) {
        value.post = result.data[count.chs];
      }
    })
    .catch((err) => {
      console.log(err);
    })
);

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
setImg
