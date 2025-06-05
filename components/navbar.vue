<script setup lang="ts">
import { MenuIcon, ChevronDownIcon } from "lucide-vue-next";

const { y, isScrolling, directions } = useWindowScroll();
const navbarRef = useTemplateRef("navbar");
const isMobileMenuOpen = ref(false);

watch([isScrolling], () => {
  if (isScrolling.value) {
    if (directions.bottom) {
      navbarRef.value?.classList.add("opacity-0");
    } else if (directions.top) {
      navbarRef.value?.classList.remove("opacity-0");
    }
  }
});

function scrollToWaitlist() {
  window.document.getElementById("waitlist-section")?.scrollIntoView({
    behavior: "smooth",
  });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>

<template>
  <div class="fixed top-0 left-0 right-0 z-10 flex justify-center">
    <div
      ref="navbar"
      class="Navbar bg-white mt-8 p-6 rounded-2xl flex flex-col lg:flex-row justify-center transition-opacity max-w-[1312px] w-[calc(100%-2rem)] lg:w-full"
      :class="{
        'lg:shadow-[0_21px_46px_0_rgba(0,0,0,0.05)]': y > 0,
        'shadow-[0_36px_79px_0_rgba(0,0,0,0.1),0_144px_144px_0_rgba(0,0,0,0.1)]': y > 0,
      }"
    >
      <div
        class="hidden container lg:flex flex-nowrap justify-between items-center"
      >
        <!-- logo -->
        <h4
          class="text-primary-heading text-2xl font-bold select-none cursor-default"
          @click="$router.push({ name: 'index' })"
        >
          CareFusion
        </h4>

        <!-- middle section -->
        <nav>
          <Button
            class="bg-[#E2E8F026] shadow-none rounded-full text-primary-heading hover:text-white me-4 py-2 px-4"
            disabled
            >Services</Button
          >
          <Button
            class="bg-[#E2E8F026] shadow-none rounded-full text-primary-heading hover:text-white me-4 py-2 px-4"
            @click="$router.push({ name: 'about' })"
            >About</Button
          >
          <Button
            class="bg-[#E2E8F026] shadow-none rounded-full text-primary-heading hover:text-white me-4 py-2 px-4"
            disabled
            >Contact Us</Button
          >
        </nav>

        <Button
          class="bg-white border border-[#E2E8F0] shadow-none rounded-full text-primary-heading hover:text-white py-2 px-4"
          @click="scrollToWaitlist"
        >
          Join the Waitlist</Button
        >
      </div>

      <div
        class="container lg:hidden flex flex-nowrap justify-between items-center"
      >
        <h4
          class="text-primary-heading text-2xl font-bold select-none cursor-default"
          @click="$router.push({ name: 'index' })"
        >
          CareFusion
        </h4>

        <Button variant="ghost" size="icon" @click="isMobileMenuOpen = !isMobileMenuOpen" class="hover:bg-transparent active:bg-transparent">
          <MenuIcon class="!size-6" />
        </Button>
      </div>
      <div
        class="container lg:hidden transition-all duration-200"
        :style="{
          maxHeight: isMobileMenuOpen ? '18rem' : '0',
          opacity: isMobileMenuOpen ? '1' : '0',
        }"
      >
        <nav class="flex flex-col gap-4 items-start overflow-hidden pt-4">
          <Button
            class="bg-[#E2E8F026] shadow-none p-3 rounded-full text-primary-heading hover:text-white me-4"
            disabled
          >
            Services
            <ChevronDownIcon />
          </Button>
          <Button
            class="bg-[#E2E8F026] shadow-none p-3 rounded-full text-primary-heading hover:text-white me-4"
            @click="$router.push({ name: 'about' })"
          >
            About
          </Button>
          <Button
            class="bg-[#E2E8F026] shadow-none p-3 rounded-full text-primary-heading hover:text-white me-4"
            disabled
          >
            Contact Us
          </Button>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
