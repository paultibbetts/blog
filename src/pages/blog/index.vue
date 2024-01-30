<page>
title: blog
</page>

<script setup lang="ts">
import indexPage from '~/pages/index.vue'
import tagsPage from '~/pages/blog/tags/index.vue'
import { usePosts } from '~/composables/usePosts'
import { sortPostsByDate } from '@/logic/posts'

const mostRecentPost = usePosts().value.sort(sortPostsByDate)[0]

</script>

<template>
<nav>
  <TerminalCommand command="ls -lah .">
    <LsResult
      type="directory"
      :updated="indexPage.lastUpdated"
    >
      <router-link to="/">..</router-link>
    </LsResult>
    <LsResult
      type="file"
      :updated="$meta.lastUpdated"
    >
      <a 
        href="#description"
      >
        description.txt
      </a>
    </LsResult>
    <LsResult
      type="file"
      executable
      :updated="$meta.lastUpdated"
    >
      <a
        href="#most-recent-post"
      >
        most-recent-post.sh
      </a>
    </LsResult>
    <LsResult
      type="directory"
      :updated="mostRecentPost.meta.lastUpdated"
    >
      <router-link to="blog/posts">
        posts
      </router-link>
    </LsResult>
    <LsResult
      type="directory"
      :updated="tagsPage.meta.lastUpdated"
    >
      <router-link :to="tagsPage.href">
        tags
      </router-link>
    </LsResult>
  </TerminalCommand>
</nav>

<TerminalCommand 
  command="cat description.txt"
  id="description"
>
  <div text-white>
    Words about tech.
  </div>
</TerminalCommand>

<TerminalCommand
  command="./most-recent-post.sh"
  id="most-recent-post"
>
  <router-link :to="mostRecentPost.href">
    {{ mostRecentPost.title }}
  </router-link>
</TerminalCommand>
</template>