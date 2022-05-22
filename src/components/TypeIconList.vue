<script setup lang="ts">
const props = defineProps<{
  typings: Array<string>
}>();
const imgIcon = (type: string) => `/typing/${type}IC_BDSP.png`
</script>

<template>
  <div class="flex gap-2 justify-center flex-wrap">
    <span v-for="T in typings" :key="T"
      class="w-1/2 md:w-1/4">
      <img :src="imgIcon(T)" />
    </span>
  </div>
</template>
