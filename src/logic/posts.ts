import { Document, PageFrontmatter, PageMeta } from 'iles'

export type Post = {
    frontmatter: PageFrontmatter,
    meta: PageMeta,
    href: string
}

export const sortPostsByDate = (a: Document<Post>, b: Document<Post>) => {
    return a.frontmatter.date < b.frontmatter.date 
        ? 1 
        : -1
}