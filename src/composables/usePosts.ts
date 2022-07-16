import { computed } from 'vue'

export function usePosts () {
    const posts = $(useDocuments<Document>('~/pages/blog/posts'))
    return computed(() => posts.sort())
}