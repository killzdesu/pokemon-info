<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'

</script>

<template>
  <nav text-xl mt-6>
    <router-link class="icon-btn mx-2" to="/" title="Home">
      <i-carbon-campsite />
    </router-link>

    <button class="icon-btn mx-2 !outline-none" title="Dark" @click="toggleDark()">
      <!-- <div i="carbon-sun dark:carbon-moon" /> -->
      <div v-if="isDark"><i-carbon-sun /></div>
      <div v-else><i-carbon-moon /></div>
    </button>

    <router-link class="icon-btn mx-2" to="/about" title="About">
      <i-carbon-dicom-overlay />
    </router-link>

    <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank" title="GitHub">
      <i-carbon-logo-github />
    </a>
  </nav>
</template>
