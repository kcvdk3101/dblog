<script lang="ts">
import { defineComponent } from 'vue'
import HeaderComponent from './components/Header/Header.vue'

export default defineComponent({
  components: {
    HeaderComponent,
  },
})
</script>

<template>
  <HeaderComponent />
  <RouterView />
</template>

<style scoped></style>
