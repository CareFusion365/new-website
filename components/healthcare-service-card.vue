<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  image: string;
}>();
</script>

<template>
  <div class="HealthcareServiceCard h-full">
    <div class="bg-[var(--bg-light)] flex flex-col rounded-2xl h-full">
      <NuxtImg
        :src="props.image"
        class="h-[16rem] lg:h-[24rem] object-cover rounded-2xl object-top"
        alt="healthcare service"
      />
      <div class="p-4 lg:p-8 h-full flex flex-col items-start">
        <h4 class="title text-primary">{{ props.title }}</h4>
        <p class="p mt-2 mb-8 leading-[24px]">
          {{ props.description }}
        </p>
        <Button
          class="p mt-auto bg-transparent shadow-none border border-[#CFD7E2] text-primary-heading py-6 lg:p-4 rounded-full hover:text-white leading-[24px]"
        >
          Find a Doctor
        </Button>
      </div>
    </div>
  </div>
</template>
