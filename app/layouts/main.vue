<template>
  <div class="min-h-screen relative">
    <CosmicBackground />
    <MainNavbar />
    <main class="relative z-10">
      <slot />
    </main>
    <MainFooter />
  </div>
</template>

<script setup lang="ts">
import MainFooter from '~/components/layout/MainFooter.vue';
import MainNavbar from '~/components/layout/MainNavbar.vue';
import CosmicBackground from '~/components/layout/CosmicBackground.vue';

</script>
