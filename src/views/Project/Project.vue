<template>
  <div class="w-full">
    <div class="relative rounded-lg w-full bg-[#414141]">
      <div
        class="flex justify-between items-center p-4 pl-10 sm:mb-5 bg-green-500 rounded-t-lg"
      >
        <h3 class="text-[24px] font-semibold text-white">Project</h3>
      </div>
      <form class="w-full p-5" @submit.prevent="addProject">
        <div class="w-full flex flex-col items-center gap-8 mb-20">
          <div
            class="w-full flex flex-col items-center justify-between gap-8 lg:flex lg:flex-row"
          >
            <div class="w-full lg:w-[50%]">
              <label for="name" class="block mb-2 text-[18px] font-medium text-white"
                >Name</label
              >
              <input
                v-model="projectInfo.name"
                type="text"
                name="name"
                id="name"
                class="w-full h-14 bg-[#414141] border outline-none border-white border-dashed text-white rounded-lg block p-3"
                placeholder="Project name"
                required=""
              />
            </div>

            <div class="w-full lg:w-[50%]">
              <label for="image" class="block mb-2 text-[18px] font-medium text-white"
                >Image</label
              >
              <input
                type="file"
                name="image"
                id="image"
                class="w-full lg:w-[50%] h-14 bg-[#414141] border outline-none border-white border-dashed rounded-lg block p-3 cursor-pointer"
                placeholder=""
                required=""
                @change="(e) => setImg(e)"
              />
            </div>
          </div>

          <div class="w-full flex flex-col justify-between gap-8 lg:flex lg:flex-row">
            <div class="w-full lg:w-[50%]">
              <label for="link" class="block mb-2 text-[18px] font-medium text-white"
                >Link</label
              >
              <input
                v-model="projectInfo.link"
                type="text"
                name="link"
                id="link"
                class="w-full h-14 bg-[#414141] border outline-none border-white border-dashed text-white rounded-lg block p-3"
                placeholder="https://link.com"
                required=""
              />
            </div>

            <div class="w-full lg:w-[50%]">
              <label for="link-code" class="block mb-2 text-[18px] font-medium text-white"
                >Link code</label
              >
              <input
                v-model="projectInfo.link_code"
                type="text"
                name="link-code"
                id="link-code"
                class="w-full h-14 bg-[#414141] border outline-none border-white border-dashed text-white rounded-lg block p-3"
                placeholder="https://link-code/github.com"
                required=""
              />
            </div>
          </div>

          <div class="w-full flex flex-col justify-center gap-8 lg:flex lg:flex-row">
            <div class="w-full lg:w-[50%]">
              <label
                for="description"
                class="block mb-2 text-[18px] font-medium text-white"
                >Description</label
              >
              <textarea
                v-model="projectInfo.description"
                name="description"
                id="description"
                cols="30"
                rows="10"
                placeholder="This my project!"
                class="w-full h-40 bg-[#414141] border outline-none border-white border-dashed text-white rounded-lg block p-3"
              ></textarea>
            </div>
          </div>
        </div>

        <div
          class="w-full flex flex-col gap-5 md:flex md:flex-row items-center justify-end"
        >
          <button
            class="w-full md:w-[20%] bg-green-500 py-2.5 rounded-lg text-white font-bold border-2 border-green-500 hover:bg-[#414141] hover:text-green-500"
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
import { useProject } from "../../service/Project";

const getImg = ref(null);
const setImg = (e) => {
  getImg.value = e.target.files[0];
  // console.log(getImg.value.name);
};

const projectInfo = reactive({
  name: "",
  link: "",
  link_code: "",
  description: "",
});

const addProject = () => {
  // const img = ref(String(getImg.value))
  const project = {
    name: projectInfo.name,
    image: getImg.value.name,
    link_project_ui: projectInfo.link,
    link_project_code: projectInfo.link_code,
    description: projectInfo.description,
  };

  useProject.create(project);
  toast.success("Successfully added project !", {
    autoClose: 5000,
    theme: "dark",
    pauseOnHover: true,
  });

  projectInfo.name = "";
  projectInfo.link = "";
  projectInfo.link_code = "";
  projectInfo.description = "";
};
</script>

<style lang="scss" scoped></style>
