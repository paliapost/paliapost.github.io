<template>
    <div class="blueposts">
        <template
            v-for="bluepost in blueposts">

            <div v-if="bluepost.type == 'qna'" class="block" :key=bluepost.question.id>
                <div class="is-size-3 question">Q: {{ bluepost.question.content }}</div>
                <div class="is-size-4 answer">A: {{ bluepost.answer.content }}</div>
            </div>
            <div v-if="bluepost.type == 'statement'" class="block" :key=bluepost.statement.id>
              <div class="is-size-3 question">{{ bluepost.statement.content }}</div>
            </div>
        </template>
    </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const blueposts = await $content('blueposts', params.slug).fetch()
      
      return { blueposts }
    }
  }
</script>

