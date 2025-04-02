<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";
import { useVModel } from "@vueuse/core";

const props = defineProps<{
  defaultValue?: string | number;
  modelValue?: string | number;
  class?: HTMLAttributes["class"];
  placeholder?: string;
  preIcon?: Function;
  postIcon?: Function;
}>();

const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
});
</script>

<template>
  <div class="relative flex items-center w-full">
    <component
      v-if="preIcon"
      :is="preIcon"
      class="absolute left-3 flex items-center pointer-events-none text-muted-foreground size-5 top-5"
    >
    </component>
    <input
      v-model="modelValue"
      :placeholder="placeholder"
      :class="
        cn(
          'size-4 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          props.preIcon ? '!pl-9' : '',
          props.postIcon ? '!pr-9' : '',
          props.class
        )
      "
    />
    <component
      :is="postIcon"
      v-if="props.postIcon"
      class="absolute right-3 flex items-center pointer-events-none text-muted-foreground size-5 top-5"
    >
      <i :class="props.postIcon"></i>
    </component>
  </div>
</template>
