import { type Post } from '~/logic/posts'
import { usePosts } from '~/composables/usePosts'

type TagPageParams = {
    id: string
}

type TagPageProps = {
    id: string,
    posts: Post[]
}

export type TagPage = {
    params: TagPageParams,
    props: TagPageProps,
    updated: Date
}

export function tagPages () {
    const tags: TagPage[] = []
    usePosts().value.forEach((post => {
        post.frontmatter.tags?.forEach((tag: string) => {
            const existingPage = tags.find((page) => page.params.id === tag);
            if (existingPage) {
                if (post.frontmatter.date > existingPage.updated) {
                    existingPage.updated = post.frontmatter.date
                }
                existingPage.props.posts.push(post)
            } else {
                tags.push({
                    params: {
                        id: tag
                    },
                    props: {
                        id: tag,
                        posts: [{
                            frontmatter: post.frontmatter,
                            meta: post.meta,
                            href: post.href
                        } as Post]
                    },
                    updated: post.frontmatter.date
                })
            }
        })
    }))

    return tags
}

export const sortTagPagesByName = (a: TagPage, b: TagPage) => {
    return a.params.id > b.params.id ? 1 : -1
}