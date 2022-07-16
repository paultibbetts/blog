<page>
title: tags
</page>

<script setup lang="ts">
import { usePosts } from '~/composables/usePosts'
import { sortPostsByDate } from '~/logic/posts'
import { sortTagPagesByName, tagPages } from '~/logic/tags'

const sortedPosts = usePosts().value.sort(sortPostsByDate)
const mostRecentPost = sortedPosts[0]

</script>

<template>
<nav mb-4>
  <TerminalCommand command="ls -lah .">
    <LsResult type="directory" :updated="mostRecentPost.lastUpdated">
        <router-link to="/blog">..</router-link>
    </LsResult>
    <ul>
        <li v-for="tag in tagPages().sort(sortTagPagesByName)">
          <LsResult 
            type="directory" 
            :updated="tag.updated" 
          >
            <router-link :to="`/blog/tags/${tag.params.id}`">
              {{ tag.params.id }}
            </router-link>
          </LsResult>
        </li>
    </ul>
  </TerminalCommand>
</nav>

</template>