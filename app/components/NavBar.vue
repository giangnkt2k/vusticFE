<script lang="ts" setup>
const menuItems = [
  {
    label: 'Dashboard',
    icon: 'i-heroicons-home',
    to: '/dashboard',
  },
  {
    label: 'Contracts',
    icon: 'i-heroicons-newspaper',
    to: '/contracts',
  }, {
    label: 'Customers',
    icon: 'i-heroicons-users',
    to: '/customers',
  },
]
</script>

<template>
  <div class="flex-col items-center gap-4">
    <div class="flex items-center justify-center">
      <AppLogo />
    </div>
    <UNavigationMenu
      orientation="vertical"
      :items="menuItems"
      class="hidden md:block"
    />

    <LazyUSlideover
      side="left"
      title="Menu"
      description="Website navigation menu"
      close-icon="i-heroicons-x-mark"
    >
      <UButton
        icon="i-heroicons-bars-3"
        variant="ghost"
        color="neutral"
        class="md:hidden"
      />

      <template #body>
        <UNavigationMenu
          orientation="vertical"
          :items="menuItems"
        />
      </template>
    </LazyUSlideover>
  </div>
</template>

<style scoped></style>
