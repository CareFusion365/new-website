<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  image: string;
}>();

</script>

<template>
  <div class="HealthcareServiceCard h-full">
    <div class="bg-[var(--bg-light)] flex flex-col rounded-2xl">
      <NuxtImg
        :src="props.image"
        class="h-[24rem] object-cover rounded-tr-2xl rounded-tl-2xl object-top"
        alt="healthcare service"
      />
      <div class="p-8">
        <h4 class="text-2xl font-semibold mt-4">{{ props.title }}</h4>
        <p class="mt-2">
          {{ props.description }}
        </p>
        <Button
          class="bg-transparent shadow-none border border-[var(--bg-dark)] text-primary-heading font-bold mt-8 p-4 rounded-full hover:text-white"
          >Learn More</Button
        >
      </div>
    </div>
  </div>
</template>
