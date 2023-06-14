<script setup>
import { ref, onMounted } from "vue";
import { navLinks } from "../../constants/navLinks";
import { useRouter } from "vue-router";

const navlink = ref(navLinks);
const role = ref("");

const router = useRouter();

const logout = () => {
  localStorage.clear();
  router.push({ name: "login" });
};

onMounted(() => {
  console.log(localStorage.getItem("role"));
  role.value = localStorage.getItem("role");
});
</script>

<template>
  <div>
    <button
      data-drawer-target="default-sidebar"
      data-drawer-toggle="default-sidebar"
      aria-controls="default-sidebar"
      type="button"
      class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-white rounded-lg sm:hidden hover:text-[#FF8C00] focus:outline-none focus:ring-2 focus:ring-gray-600"
    >
      <span class="sr-only">Open sidebar</span>
      <svg
        class="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
        ></path>
      </svg>
    </button>

    <aside
      id="default-sidebar"
      class="fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div class="h-[100%] px-3 py-4 overflow-y-auto bg-[#414141]">
      <h1 class="text-[30px] font-semibold ml-10 mt-5 mb-10 text-[#FF8C00]">Hello, <span class="text-white font-semibold">Boss</span></h1>
        <ul class="space-y-2 font-medium">
          <li v-for="link in navlink" :key="link.id">
            <router-link
              :to="link.link"
              class="flex items-center p-2 rounded-lg text-[20px] text-white border border-[#414141] hover:border-[#FF8C00] hover:text-[#FF8C00]"
            >
              <i :class="link.icon"></i>
              <span class="ml-3">{{ link.title }}</span>
            </router-link>
          </li>
        </ul>

        <button
          @click="logout"
          class="block px-3 py-2 rounded-xl focus:ring-4 ring-gray-500 text-white absolute bottom-3 text-[30px] hover:text-[#FF8C00]"
        >
        <i class='bx bx-log-out'></i>
        </button>
      </div>
    </aside>
  </div>
</template>

<style lang="css" scoped>
.router-link-exact-active {
  background-color: #FF8C00;
  border: 1px solid #FF8C00;
}
.router-link-exact-active:hover {
  color: white;
}
</style>
