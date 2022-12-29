<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { DefaultType } from '../types/button'

export interface BaseButtonProps {
  label: string
  variant: DefaultType
}

export default defineComponent({
  name: 'BaseButton',
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: Object as PropType<DefaultType>,
      required: true,
    },
  },
})
</script>

<template>
  <button>{{ label }}</button>
</template>

<style lang="css" scoped></style>
