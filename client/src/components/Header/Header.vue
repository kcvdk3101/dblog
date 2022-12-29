<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderComponent',
  setup() {},
})
</script>

<template>
  <header>
    <div class="header-content">
      <img alt="DB Logo" class="logo" src="@/assets/images/logo_primary.svg" />
    </div>
  </header>
</template>

<style lang="css" scoped>
.header-content {
  max-height: 20vh;
  max-width: 1280px;
  margin: 0 auto;
  padding: 14px;
}
</style>
