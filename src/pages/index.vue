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
      type="file"
      :updated="$meta.lastUpdated"
    >
      <a
        href="#about.txt"
      >
        about.txt
      </a>
    </LsResult>
    <LsResult
      type="file"
      executable
      :updated="$meta.lastUpdated" 
    >
      <a
        href="#greeting.sh"
      >
        greeting.sh
      </a>
    </LsResult>
    <LsResult
      type="directory"
      :updated="$meta.lastUpdated"
    >
      <a
        href="#links"
      >
        links
      </a>
    </LsResult>
  </TerminalCommand>
</nav>
<TerminalCommand
  command="./greeting.sh"
  id="greeting.sh"
>
  <hello mt-2/>
</TerminalCommand>
<TerminalCommand
  command="cat about.txt"
  id="about.txt"
>
  <div class="prose text-white">
    <p>I'm Paul, a DevOps Engineer.</p>
  </div>
</TerminalCommand>
<TerminalCommand
  command="ls links"
  id="links"
>
    <a class="text-purple-200 no-underline" href="https://micro.paultibbetts.uk">blog</a>&nbsp;
    <a class="text-purple-200 no-underline" href="https://github.com/paultibbetts">github</a>
</TerminalCommand>
</template>
