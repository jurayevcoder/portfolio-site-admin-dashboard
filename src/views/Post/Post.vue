<template>
    <div class="w-full">
      <div class="relative rounded-lg w-full bg-[#414141]">
        <div
          class="flex justify-between items-center p-4 pl-10 sm:mb-5 bg-blue-500 rounded-t-lg"
        >
          <h3 class="text-[24px] font-semibold text-white">Post</h3>
        </div>
        <form class="w-full p-5">
          <div class="w-full flex flex-col items-center gap-8 mb-20">
            <div
              class="w-full flex flex-col items-center justify-between gap-8 lg:flex lg:flex-row"
            >
              <div class="w-full lg:w-[50%]">
                <label for="image" class="block mb-2 text-[18px] font-medium text-white"
                  >Image or Video</label
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
                <label for="title" class="block mb-2 text-[18px] font-medium text-white"
                  >Title</label
                >
                <input
                  type="text"
                  name="title"
                  id="title"
                  class="w-full h-14 bg-[#414141] border outline-none border-white border-dashed text-white rounded-lg block p-3"
                  placeholder="Post name"
                  required=""
                />
              </div>
            </div>

            <div
              class="w-full flex flex-col justify-between gap-8 lg:flex lg:flex-row"
            >
              <div class="w-full lg:w-[50%]">
                <label
                  for="description"
                  class="block mb-2 text-[18px] font-medium text-white"
                  >Description</label
                >
                <textarea
                  name="description"
                  id="description"
                  cols="30"
                  rows="10"
                  placeholder="This my post!"
                  class="w-full h-40 bg-[#414141] border outline-none border-white border-dashed text-white rounded-lg block p-3"
                ></textarea>
              </div>

              <div class="w-full lg:w-[50%]">
                <label for="link-code" class="block mb-2 text-[18px] font-medium text-white"
                  >Tag</label
                >
                <input
                  type="text"
                  name="link-code"
                  id="link-code"
                  class="w-full h-14 bg-[#414141] border outline-none border-white border-dashed text-white rounded-lg block p-3"
                  placeholder="#tag #code"
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
              class="w-full md:w-[20%] bg-blue-500 py-2.5 rounded-lg text-white font-bold border-2 border-blue-500 hover:bg-[#414141] hover:text-blue-500"
            >
            SHARE
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>

  <script setup></script>

  <style lang="scss" scoped></style>
