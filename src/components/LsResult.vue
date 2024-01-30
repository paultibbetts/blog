<script setup lang="ts">
import { dateFormat, dateLocale } from '~/logic/date'
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
        {{ type === DIRECTORY ? 'd' : '-' }}r-{{ executable ? 'x' : '-' }}r-{{ executable ? 'x' : '-' }}r-{{ executable ? 'x' : '-'}} paul tibbetts {{ updated.toLocaleString(dateLocale, dateFormat).replaceAll(',', '') }}
        <span 
            v-if="color"
            :class="color"
        >
            <slot />
        </span>
        <template v-else>
            <span
                v-if="type === FILE"
                text-white
            >
                <slot />
            </span>
            <span
                v-else
                text-purple-200
            >
                <slot />
            </span>

        </template>
    </span>
</div>
</template>
