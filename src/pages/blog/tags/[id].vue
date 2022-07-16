<script lang="ts">
import { tagPages } from '~/logic/tags'
import { sortPostsByDate } from '~/logic/posts'
import { Document } from 'iles'

export default definePageComponent({
    getStaticPaths: () => tagPages()
})
</script>

<script setup lang="ts">
import tagsPage from '~/pages/blog/tags/index.vue'
import site from '~/site'

const props = defineProps<{
    id: string,
    posts: Document<Document>[]
}>()

useHead({
    title: `${props.id} · ${site.title}`
})
const sortedPosts = props.posts.sort(sortPostsByDate)
</script>

<template layout="default">
<nav mb-4>
    <TerminalCommand :command="`ls -laht .`">
        <LsResult type="directory" :updated="tagsPage.meta.lastUpdated">
            <router-link :to="tagsPage.href">..</router-link>
        </LsResult>
        <LsResult 
            v-for="post in sortedPosts"
            type="directory" 
            :updated="post.frontmatter.date"
        >
            <router-link :to="post.href">
                {{ post.frontmatter.title }}
            </router-link>
        </LsResult>
    </TerminalCommand>
</nav>
</template>