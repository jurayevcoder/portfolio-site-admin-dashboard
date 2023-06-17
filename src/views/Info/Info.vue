<template>
  <div class="w-full mb-14 pb-14 border-b-2 border-[#414141] border-dashed">
    <div class="relative rounded-lg w-full bg-[#414141]">
      <div
        class="flex justify-between items-center p-4 pl-10 sm:mb-5 bg-[#FF8C00] rounded-t-lg"
      >
        <h3 class="text-[24px] font-semibold text-white">Info</h3>
      </div>
      <form class="w-full p-5" @submit.prevent="addInfo">
        <div class="w-full flex flex-col items-center gap-8 mb-20">
          <div
            class="w-full flex flex-col items-center justify-between gap-8 lg:flex lg:flex-row"
          >
            <div class="w-full lg:w-[50%]">
              <label for="image" class="block mb-2 text-[18px] font-medium text-white"
                >Image avatar</label
              >
              <input
                accept="image/jpg, image/jpeg, image/png"
                type="file"
                name="image"
                id="image"
                class="w-full lg:w-[50%] h-14 bg-[#414141] border outline-none border-white border-dashed rounded-lg block p-3 cursor-pointer"
                placeholder=""
                required=""
                @change="(e) => setImg(e)"
              />
            </div>
            <div class="w-full lg:w-[50%]">
              <label for="fullname" class="block mb-2 text-[18px] font-medium text-white"
                >Full name</label
              >
              <input
                v-model="info.fullname"
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
                v-model="info.phone"
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
                v-model="info.email"
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
                v-model="info.birthday"
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
                v-model="info.age"
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
                v-model="info.experience"
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
                v-model="info.about"
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
        <h3 class="text-[24px] font-semibold text-white">Skill</h3>
      </div>

      <form class="w-full p-5" @submit.prevent="addSkill">
        <div class="w-full flex flex-col items-center gap-8 mb-20">
          <div class="w-full flex flex-col justify-between gap-8 lg:flex lg:flex-row">
            <div class="w-full lg:w-[50%]">
              <label for="name" class="block mb-2 text-[18px] font-medium text-white"
                >Name</label
              >
              <input
                v-model="skillInfo.name"
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
                v-model="skillInfo.icon"
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

      <form class="w-full p-5" @submit.prevent="addWorked">
        <div class="w-full flex flex-col items-center gap-8 mb-20">
          <div class="w-full flex flex-col justify-between gap-8 lg:flex lg:flex-row">
            <div class="w-full lg:w-[50%]">
              <label for="name" class="block mb-2 text-[18px] font-medium text-white"
                >Name</label
              >
              <input
                v-model="workedInfo.name"
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
                v-model="workedInfo.link"
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

      <form class="w-full p-5" @submit.prevent="addSocialMedia">
        <div class="w-full flex flex-col items-center gap-8 mb-20">
          <div class="w-full flex flex-col justify-between gap-8 lg:flex lg:flex-row">
            <div class="w-full lg:w-[50%]">
              <label for="name" class="block mb-2 text-[18px] font-medium text-white"
                >Name</label
              >
              <input
                v-model="socialMediaInfo.name"
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
                v-model="socialMediaInfo.link"
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
                v-model="socialMediaInfo.icon"
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
import { reactive, ref } from "vue";
import { toast } from "vue3-toastify";
import { useInfo } from "../../service/Info";
import { useSkill } from "../../service/Skill";
import { useWorked } from "../../service/Worked";
import { useSocialMedia } from "../../service/Social-media";

// Info

const getImg = ref(null);
const setImg = (e) => {
  getImg.value = e.target.files[0];
};

const info = reactive({
  fullname: "",
  phone: "",
  email: "",
  birthday: "",
  age: "",
  about: "",
  experience: "",
});

const addInfo = () => {
  const ageInt = ref(Number(age.value));
  const infos = {
    avatar: getImg.value.name,
    fullname: info.fullname,
    phone: info.phone,
    email: info.email,
    birthday: info.birthday,
    age: ageInt.value,
    about: info.about,
    experience: info.experience,
  };

  const lengthInfo = ref(
    useInfo
      .show()
      .then((result) => {
        console.log(result.data.length);
        if (result.data.length > 0) {
          useInfo.change(result.data[0].id, infos);
          toast.success("Successfully change info !", {
            autoClose: 5000,
            theme: "dark",
            pauseOnHover: true,
          });
        } else {
          useInfo.create(infos);
          toast.success("Successfully added info !", {
            autoClose: 5000,
            theme: "dark",
            pauseOnHover: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      })
  );

  info.fullname = "";
  info.phone = "";
  info.email = "";
  info.birthday = "";
  info.age = "";
  info.about = "";
  info.experience = "";
};

// Skill

const skillInfo = reactive({
  name: "",
  icon: "",
});

const addSkill = () => {
  const lamp = ref(true);
  const skill = {
    name: skillInfo.name,
    icon: skillInfo.icon,
  };

  const lengthSkill = ref(
    useSkill
      .show()
      .then((result) => {
        for (let i = 0; i < result.data.length; i++) {
          if (skill.name == result.data[i].name) {
            lamp.value = false;
            useSkill.change(result.data[i].id, skill);
            toast.success("Successfully change skill !", {
              autoClose: 5000,
              theme: "dark",
              pauseOnHover: true,
            });
          }
        }
        if (lamp.value) {
          useSkill.create(skill);
          toast.success("Successfully added skill !", {
            autoClose: 5000,
            theme: "dark",
            pauseOnHover: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      })
  );

  skillInfo.name = "";
  skillInfo.icon = "";
};

// Worked

const workedInfo = reactive({
  name: "",
  link: "",
});

const addWorked = () => {
  const lamp = ref(true);
  const worked = {
    name: workedInfo.name,
    link: workedInfo.link,
  };

  const lengthWorked = ref(
    useWorked
      .show()
      .then((result) => {
        for (let i = 0; i < result.data.length; i++) {
          if (worked.name == result.data[i].name) {
            lamp.value = false;
            useWorked.change(result.data[i].id, worked);
            toast.success("Successfully change worked !", {
              autoClose: 5000,
              theme: "dark",
              pauseOnHover: true,
            });
          }
        }
        if (lamp.value) {
          useWorked.create(worked);
          toast.success("Successfully added worked !", {
            autoClose: 5000,
            theme: "dark",
            pauseOnHover: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      })
  );

  workedInfo.name = "";
  workedInfo.link = "";
};

// Social Media

const socialMediaInfo = reactive({
  name: "",
  link: "",
  icon: "",
});

const addSocialMedia = () => {
  const lamp = ref(true);
  const socialMedia = {
    name: socialMediaInfo.name,
    link: socialMediaInfo.link,
    icon: socialMediaInfo.icon,
  };

  const lengthSocialMedia = ref(
    useSocialMedia
      .show()
      .then((result) => {
        for (let i = 0; i < result.data.length; i++) {
          if (socialMedia.name == result.data[i].name) {
            lamp.value = false;
            useSocialMedia.change(result.data[i].id, socialMedia);
            toast.success("Successfully change social media !", {
              autoClose: 5000,
              theme: "dark",
              pauseOnHover: true,
            });
          }
        }
        if (lamp.value) {
          useSocialMedia.create(socialMedia);
          toast.success("Successfully added social media !", {
            autoClose: 5000,
            theme: "dark",
            pauseOnHover: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      })
  );


  socialMediaInfo.name = "";
  socialMediaInfo.link = "";
  socialMediaInfo.icon = "";
};
</script>

<style lang="scss" scoped></style>
