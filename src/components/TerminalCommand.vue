<script setup lang="ts">
defineProps<{
    command: string
}>()

const breadcrumbify = (path: string): {label: string, path: string}[] => {
    return path.split('/')
        .filter((string: string) => string !== '')
        .map((label, index, fullArray) => {
            let path = '';
            for (let i = index; i >= 0; i--) {
                path = '/' + fullArray[i] + path
            }
            return {
                label,
                path
            }
    })
}

</script>

<template>
<div mb-4>
    <div>
        <span><router-link to="/" text-cyan>~</router-link>
            <span
                v-for="(breadcrumb, index) in breadcrumbify($route.path)"
                text-cyan
            ><template v-if="index !== breadcrumbify($route.path).length - 1">/<router-link
                        :to="breadcrumb.path"
                        text-cyan
                    >{{ breadcrumb.label }}</router-link>
                </template>
                <template v-else>/{{ breadcrumb.label }}</template>
            </span>
        </span>
    </div>
    <div>
        <span text-green>➜</span> {{ command }}
    </div>
    <div>
        <slot />
    </div>
</div>
</template>