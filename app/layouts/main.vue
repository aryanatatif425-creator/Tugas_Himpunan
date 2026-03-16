<script setup lang="ts">
import MainFooter from '~/components/layout/MainFooter.vue';
import MainNavbar from '~/components/layout/MainNavbar.vue';

</script>

<template>
  <div class="min-h-screen bg-[var(--fifth-color)]">
    <MainNavbar />
    <main class="bg-[var(--fifth-color)]">
      <slot />
    </main>
    <MainFooter />
  </div>
</template>