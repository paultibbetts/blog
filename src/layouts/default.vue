<template>
  <header>
    <div class="text-center mb-2">
      guest&#64;<router-link text-gray to="/">paultibbetts.uk:~</router-link>
    </div>
  </header>

  <div>
    <slot />
  </div>
</template>

<style>
@import '~/assets/base.css';
@import '~/assets/prism.css';
</style>
