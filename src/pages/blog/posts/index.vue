<page>
title: posts
</page>

<script setup lang="ts">
import { usePosts } from '~/composables/usePosts'
import { sortPostsByDate } from '~/logic/posts'

const sortedPosts = usePosts().value.sort(sortPostsByDate)
const mostRecentPost = sortedPosts[0]
</script>

<template>
<nav mb-4>
  <TerminalCommand command="ls -laht .">
    <LsResult 
      type="directory" 
      :updated="mostRecentPost.meta.lastUpdated"
    >
      <router-link to="/blog">
        ..
      </router-link>
    </LsResult>
    <LsResult
      v-for="post in sortedPosts"
      type="directory" 
      :updated="post.frontmatter.date"
    >
      <router-link :to="post.meta.href">
        {{ post.frontmatter.title }}
      </router-link>
    </LsResult>
  </TerminalCommand>
</nav>
</template>