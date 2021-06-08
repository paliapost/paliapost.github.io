<template>
    <div class="blueposts">
        <input class="input is-large block" type="text" placeholder="Search a keyword" v-model="searchString">
        <template
            v-for="(bluepost, index) in filteredBlueposts">

            <div v-if="bluepost.type == 'qna'" class="content block" :key="bluepost.messages[0].id + index">
                <template v-for="(message, idx) in bluepost.messages">
                  <!-- Dev answer -->
                  <div v-if="idx == bluepost.messages.length - 1" :key="bluepost.messages[0].id + idx" class="is-size-4 answer">
                    <div>
                      <span class="has-text-link">
                        {{ message.author.username }}:
                      </span>
                    </div>
                    <div>
                      <span>
                        {{ message.content }}
                      </span>
                    </div>
                  </div>
                  <!-- Message Chain -->
                  <div v-else :key="bluepost.messages[0].id + idx" class="is-size-4 question">
                      <div>
                        <span class="has-text-success">
                          {{ message.author.username }}:
                        </span>
                      </div>
                      <div><span>{{ message.content }}</span></div>
                  </div>
                </template>
            </div>

            <!-- ANSWER -->
            <div v-if="bluepost.type == 'statement'" class="block" :key="bluepost.message.id + index">
              <div class="is-size-4 question">
                  <span class="has-text-link">
                    {{ bluepost.message.author.username }}:
                  </span>
                  <span>
                    {{ bluepost.message.content }}
                  </span>
              </div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
  methods: {
    filterByValue (searchString) {
      // Get search string
      searchString = searchString.toLowerCase()

      // Loop over all blueposts files
      return this.blueposts.filter((bluepost) => {
        if (bluepost.type === 'qna') {
          // Q&A: Loop over all messages
          return bluepost.messages.some((message) => {
            if (message.content.toLowerCase().includes(searchString)) {
              console.log('A')
              return true
            }

            return false
          })
        }

        // Statement: Check single message
        if (bluepost.message.content.toLowerCase().includes(searchString)) {
          return true
        } else {
          return false
        }
      })
    }
  },
  async asyncData ({ $content, params }) {
    const blueposts = await $content('blueposts').fetch()

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
