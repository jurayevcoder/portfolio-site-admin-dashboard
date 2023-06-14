<script setup>
import Sidebar from '../components/Sidebar/Sidebar.vue'
</script>

<template>
  <main>
    <section id="main" class="w-full">
      <Sidebar />
      <div class="p-4 sm:ml-80">
        <div class="border-2 border-[#414141] border-dashed rounded-lg">
          <router-view></router-view>
        </div>
      </div>
    </section>
  </main>
</template>
