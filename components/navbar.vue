<script setup lang="ts">
const { y } = useWindowScroll();
</script>

<template>
  <div
    class="Navbar fixed top-0 left-0 right-0 bg-white mx-16 mt-8 p-6 rounded-2xl flex flex-nowrap justify-between items-center z-10"
    :class="{
      'shadow-md': y > 0,
    }"
  >
    <!-- logo -->
    <h4
      class="text-primary-heading text-2xl font-bold select-none cursor-default"
    >
      CareFusion365
    </h4>

    <!-- middle section -->
    <nav>
      <Button
        class="bg-[#E2E8F026] shadow-none p-3 rounded-full text-primary-heading hover:text-white me-4"
        >Find a Doctor</Button
      >
      <Button
        class="bg-[#E2E8F026] shadow-none p-3 rounded-full text-primary-heading hover:text-white me-4"
        >Services</Button
      >
      <Button
        class="bg-[#E2E8F026] shadow-none p-3 rounded-full text-primary-heading hover:text-white me-4"
        >About</Button
      >
      <Button
        class="bg-[#E2E8F026] shadow-none p-3 rounded-full text-primary-heading hover:text-white me-4"
        >Contact Us</Button
      >
    </nav>

    <Button
      class="bg-white border border-[#E2E8F0] shadow-none rounded-full font-bold text-primary-heading hover:text-white"
      >Join the Waitlist</Button
    >
  </div>
</template>

<style scoped></style>
