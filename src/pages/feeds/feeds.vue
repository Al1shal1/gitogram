<template>
    <div class="topline">
        <topline>
            <template #headline>
                <div class="c-headline">
                    <xHeader />
                </div>
            </template>
            <template #content>
                <ul class="stories">
                    <li
                    class="stories-item"
                    v-for="{ id, owner } in getUnstarredOnly"
                    :key="id"
                    >
                        <story-user-item
                          class="story-user-item"
                          :avatarUrl="owner.avatar_url"
                          :username="owner.login"
                          @click="$router.push({name:'stories', params: { initialSlide: id }})"
                        />
                    </li>
                </ul>
            </template>
        </topline>
    </div>
    <div class="content">
        <div class="c-main-content">
            <div class="x-container-feeds">
              <ul class="feeds-list">
      <li
        class="feeds-item"
        v-for="{ id, owner, name, description, stargazers_count, forks_count, issues, created_at } in starred"
        :key="id"
      >
        <feed
          :avatarUrl="owner.avatar_url"
          :username="owner.login"
          :issues="issues?.data"
          :date="new Date(created_at)"
          :loading="issues?.loading"
          @loadContent="loadIssues({ id, owner: owner.login, repo: name })"
        >
          <template #card>
            <card
              :title="name"
              :description="description"
              :stars="stargazers_count"
              :forks="forks_count"
            ></card>
          </template>
        </feed>
      </li>
    </ul>
            </div>
        </div>
    </div>

</template>

<script>
import { useStore } from 'vuex'
import * as api from '../../api'
import { xHeader } from '../../admin/components/xHeader'
import { topline } from '../../components/topline'
import { StoryUserItem } from '../../components/StoryUserItem'
import stories from './data.json'
import { feed } from '../../components/feed'
import { card } from '../../admin/components/card'
import { onMounted, computed } from 'vue'
export default {
  name: 'TheFeeds',
  components: {
    topline,
    StoryUserItem,
    xHeader,
    feed,
    card
  },
  data () {
    return {
      stories,
      items: []
    }
  },
  setup () {
    const { dispatch, state, getters } = useStore()
    const loadIssues = ({ id, owner, repo }) => {
      dispatch('starred/fetchIssuesForRepo', { id, owner, repo })
    }

    onMounted(() => {
      dispatch('trendings/fetchTrendings')
      dispatch('starred/fetchStarred', { limit: 10 })
    })

    return {
      trendings: computed(() => state.trendings.data),
      starred: computed(() => state.starred.data),
      getUnstarredOnly: computed(() => getters.getUnstarredOnly),
      loadIssues
    }
  },
  async created () {
    try {
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss"></style>
