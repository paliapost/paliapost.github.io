<template>
    <div class="blueposts">
        <input class="input is-large block" type="text" placeholder="Search a keyword" v-model="searchString">
        <template
            v-for="(bluepost, index) in filteredBlueposts">

            <div v-if="bluepost.type == 'qna'" class="content block" :key="bluepost.question.id + index">
                <blockquote class="is-size-4 question">{{ bluepost.question.content }}</blockquote>
                <div class="is-size-4 answer">
                  <span class="tag is-info">Dev:</span>
                  {{ bluepost.answer.content }}
                </div>
            </div>
            <div v-if="bluepost.type == 'statement'" class="block" :key="bluepost.statement.id + index">
              <div class="is-size-4 question">{{ bluepost.statement.content }}</div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
  methods: {
    filterByValue (searchString) {
      searchString = searchString.toLowerCase()
      return this.blueposts.filter((post) => {
        if (post.type === 'qna') {
          if (post.question.content.toLowerCase().includes(searchString)) {
            return true
          }
          if (post.answer.content.toLowerCase().includes(searchString)) {
            return true
          }
        }

        if (post.type === 'statement') {
          if (post.statement.content.toLowerCase().includes(searchString)) {
            return true
          }
        }

        return false
      })
    }
  },
  async asyncData ({ $content, params }) {
    const blueposts = await $content('blueposts', params.slug).fetch()

    return { blueposts }
  },
  data () {
    return {
      searchString: ''
    }
  },
  computed: {
    filteredBlueposts () {
      return this.filterByValue(this.searchString)
    }
  }
}
</script>
