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
  <div
    ref="navbar"
    class="Navbar fixed top-0 left-0 right-0 bg-white mx-16 mt-8 p-6 rounded-2xl z-10 flex flex-col justify-center transition-opacity"
    :class="{
      'shadow-md': y > 0,
    }"
  >
    <div
      class="hidden container md:flex flex-nowrap justify-between items-center"
    >
      <!-- logo -->
      <h4
        class="text-primary-heading text-2xl font-bold select-none cursor-default"
        @click="scrollToTop"
      >
        CareFusion365
      </h4>

      <!-- middle section -->
      <nav>
        <Button
          class="bg-[#E2E8F026] shadow-none p-3 rounded-full text-primary-heading hover:text-white me-4"
          disabled
          >Find a Doctor</Button
        >
        <Button
          class="bg-[#E2E8F026] shadow-none p-3 rounded-full text-primary-heading hover:text-white me-4"
          disabled
          >Services</Button
        >
        <Button
          class="bg-[#E2E8F026] shadow-none p-3 rounded-full text-primary-heading hover:text-white me-4"
          disabled
          >About</Button
        >
        <Button
          class="bg-[#E2E8F026] shadow-none p-3 rounded-full text-primary-heading hover:text-white me-4"
          disabled
          >Contact Us</Button
        >
      </nav>

      <Button
        class="bg-white border border-[#E2E8F0] shadow-none rounded-full font-bold text-primary-heading hover:text-white"
        @click="scrollToWaitlist"
      >
        Join the Waitlist</Button
      >
    </div>

    <div
      class="container md:hidden flex flex-nowrap justify-between items-center"
    >
      <h4
        class="text-primary-heading text-2xl font-bold select-none cursor-default"
        @click="scrollToTop"
      >
        CareFusion365
      </h4>

      <Button variant="ghost" @click="isMobileMenuOpen = !isMobileMenuOpen">
        <MenuIcon />
      </Button>
    </div>
    <div class="container md:hidden transition-all duration-200"
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
          disabled
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
</template>

<style scoped></style>
