<template>
  <section class="bg-black">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div class="w-full bg-[#414141] rounded-lg md:mt-0 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white"
          >
            Login to your account
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="useLogin" action="#">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white"
                >Your email</label
              >
              <input
                v-model="user.email"
                type="email"
                name="email"
                id="email"
                class="border sm:text-sm rounded-lg outline-none block w-full p-2.5 bg-[#414141] border-white placeholder-gray-400 text-white"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-white"
                >Password</label
              >
              <input
                v-model="user.password"
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="border outline-none sm:text-sm rounded-lg block w-full p-2.5 bg-[#414141] border-white placeholder-gray-400 text-white"
                required=""
              />
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white"
                >Secret key</label
              >
              <input
                v-model="user.key"
                type="text"
                name="key"
                id="text"
                class="border sm:text-sm rounded-lg outline-none block w-full p-2.5 bg-[#414141] border-white placeholder-gray-400 text-white"
                placeholder="key"
                required=""
              />
            </div>
            <div class="flex items-center justify-between">
              <a href="#" class="text-sm font-medium text-[#FF8C00] hover:underline"
                >Forgot password?</a
              >
            </div>
            <button
              type="submit"
              class="w-full text-white bg-[#FF8C00] border border-[#FF8C00] hover:bg-[#414141] hover:text-[#FF8C00] focus:ring-4 focus:outline-none focus:ring-[#FF8C00] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "../../service/auth";
import { toast } from "vue3-toastify";

const router = useRouter();

const user = reactive({
  email: "",
  password: "",
  key: "",
});

const useLogin = () => {
  const senUser = {
    email: user.email,
    password: user.password,
    key: user.key,
  };

  useAuth.login(senUser)
    .then((res) => {
      console.log(res);
      console.log();
      localStorage.setItem("token", res?.data?.tokens?.refresh_token);
      localStorage.setItem("role", res?.data?.admin?.role);
      localStorage.setItem("id", res?.data?.admin?.id);
      router.push({ name: "home" });
      toast.success("Dashboard successfully logged in");
    })
    .catch(() => {
      toast.error("error");
    });
};
</script>

<style lang="scss" scoped></style>
