<script lang="ts" setup></script>

<template>
  <nav class="flex gap-6 justify-between items-center p-4">
    <div>
      <img
        src="/imgs/logo.png"
        alt="logo"
        class="h-20 w-auto"
      >
    </div>
    <div class="flex gap-4 items-center">
      <ULink to="/login">
        Login
      </ULink>

      <ULink to="/register">
        Register
      </ULink>

      <ColorSchemeSwitcher />
    </div>
  </nav>
</template>

<style scoped></style>
