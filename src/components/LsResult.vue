<script setup lang="ts">
import { dateFormat } from '~/logic/date'
const FILE = 'file'
const DIRECTORY = 'directory'

defineProps<{
    type: typeof FILE | typeof DIRECTORY,
    color?: string,
    executable?: boolean,
    updated: Date
}>()
</script>

<template>
<div text-sm>
    <span>
        {{ type === DIRECTORY ? 'd' : '-' }}r-{{ executable ? 'x' : '-' }}r-{{ executable ? 'x' : '-' }}r-{{ executable ? 'x' : '-'}} paul tibbetts {{ updated.toLocaleString('en-US', dateFormat).replaceAll(',', '') }}

        <span 
            v-if="color"
            :class="color"
        >
            <slot />
        </span>
        <template v-else>
            <slot />

        </template>
    </span>
</div>
</template>