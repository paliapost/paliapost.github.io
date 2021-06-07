<template>
    <div class="blueposts">
        <input class="input is-large" type="text" placeholder="Search a keyword" v-model="searchString">
        <template
            v-for="bluepost in filteredBlueposts">

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
  methods: {
    filterByValue (searchString) {
      searchString = searchString.toLowerCase()
      return this.blueposts.filter(post => {
        if (post.type == "qna") {
          if (post.question.content.toLowerCase().includes(searchString))
            return true
          if (post.answer.content.toLowerCase().includes(searchString))
            return true
        } else {
          if (post.statement.content.toLowerCase().includes(searchString))
            return true
        }
      })
    }
  },
  async asyncData ({ $content, params }) {
    const blueposts = await $content('blueposts', params.slug).fetch()

    return { blueposts }
  },
  data() {
    return {
      searchString: '',
    }
  },
  computed: {
    filteredBlueposts () {
      if (this.searchString != '') {
        return this.filterByValue(this.searchString)
      } else {
        return this.blueposts
      }
    }
  }
}
</script>
