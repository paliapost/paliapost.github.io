<template>
    <div
      class="block"
      v-if="bluepost.type == 'statement'"
      :key="bluepost.message.id + index"
    >
      <div class="is-size-4 question">
          <span class="has-text-link">
            {{ bluepost.message.author.username }}:
          </span>
          <span
            v-html="$options.filters.highlight(bluepost.message.content, searchString)"
          >
            {{ bluepost.message.content }}
          </span>
      </div>
    </div>
</template>

<script>
export default {
  props: ['statement']
}
</script>
