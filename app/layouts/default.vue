<script lang="ts" setup>
const { isAuthenticated } = useSanctumAuth()
</script>

<template>
  <template v-if="isAuthenticated">
    <div class="fixed inset-0 flex overflow-hidden">
      <div class="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
        <NavBar />
      </div>
      <div class="relative flex flex-col min-w-0 min-h-svh lg:not-last:border-r lg:not-last:border-default flex-1">
        <div class="h-(--ui-header-height) shrink-0 flex items-center justify-end border-b border-default px-4 sm:px-6 gap-1.5">
          <ProfileMenu />
        </div>
        <UContainer class="flex flex-col gap-4 sm:gap-6 flex-1 overflow-y-auto p-4 sm:p-6">
          <slot />
        </UContainer>
      </div>
    </div>
  </template>
</template>

<style scoped></style>
