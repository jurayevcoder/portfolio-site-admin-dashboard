<template>
  <div id="accordion-collapse" data-accordion="collapse" class="w-full">
    <h2 id="accordion-collapse-heading-1" class="flex items-center w-full gap-5">
      <button
        @click="toggleModal"
        type="button"
        class="flex items-center justify-between w-[90%] p-5 font-medium text-left text-[#FF8C00] border rounded-t-lg focus:ring-2 focus:ring-white border-white bg-[#414141]"
        data-accordion-target="#accordion-collapse-body-1"
        aria-expanded="true"
        aria-controls="accordion-collapse-body-1"
      >
        <span>John Doe</span>
        <i
          :class="
            modal
              ? 'bx bx-chevron-up text-[30px] text-white'
              : 'bx bx-chevron-down text-[30px] text-white'
          "
        ></i>
      </button>
      <div class="w-[10%] flex items-center justify-between gap-2">
        <button
        class="flex items-center justify-center border text-red-600 px-5 py-3 rounded-lg hover:border-red-600"
      >
        <i class="bx bx-trash text-[30px]"></i>
      </button>
      <button class="flex items-center justify-center border text-teal-500 px-5 py-3 rounded-lg hover:border-teal-500">
        <i class='bx bxs-message-detail text-[30px]'></i>
      </button>
      </div>
    </h2>
    <div
      id="accordion-collapse-body-1"
      :class="modal ? 'w-full' : 'hidden'"
      aria-labelledby="accordion-collapse-heading-1"
    >
      <div class="p-5 border border-t- border-white bg-[#414141]">
        <p class="mb-2 text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias quidem eaque
          et voluptatibus? Quidem veritatis magnam cumque. Facilis quae voluptate, illum
          nihil enim sit vitae porro similique dolore maxime assumenda.
        </p>
      </div>
    </div>
    <div
      id="accordion-collapse-body-1"
      :class="modal ? 'w-full' : 'hidden'"
      aria-labelledby="accordion-collapse-heading-1"
    >
      <div class="p-5 border border-b-0 border-whit bg-[#414141]">
        <p class="mb-2 text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias quidem eaque
          et voluptatibus? Quidem veritatis magnam cumque. Facilis quae voluptate, illum
          nihil enim sit vitae porro similique dolore maxime assumenda.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const modal = ref(false);
const toggleModal = () => (modal.value = !modal.value);
</script>

<style lang="scss" scoped></style>
