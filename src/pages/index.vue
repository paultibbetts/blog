<script setup lang="ts">
import blogPage from '~/pages/blog/index.vue'
import { dateFormat, dateLocale } from '~/logic/date'
</script>

<template>
<nav>
  <TerminalCommand command="ls -lah .">
    <div text-sm>
    dr--r--r-- root root&nbsp;&nbsp;&nbsp;&nbsp; {{ $meta.lastUpdated.toLocaleString(dateLocale, dateFormat).replaceAll(',', '') }}
    ..
    </div>
    <LsResult
      type="directory"
      :updated="blogPage.lastUpdated"
    >
      <router-link to="/blog">
        blog
      </router-link>
    </LsResult>
    <LsResult
      type="file"
      executable
      :updated="$meta.lastUpdated" 
      color="text-white"
    >
      hello.sh
    </LsResult>
  </TerminalCommand>
</nav>
<TerminalCommand command="./hello.sh">
  <hello mt-2/>
</TerminalCommand>
<TerminalCommand command="whoami">
  <div class="prose text-white">
    <p>I'm Paul.</p>
    <p>You've found my <router-link to="blog">blog</router-link>.</p>
  </div>
</TerminalCommand>
</template>