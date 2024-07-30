<template>
    <div class="topline">
        <topline>
            <template #headline>
                <div class="c-headline">
                    <logo class="logo"/>
                    <div class="icon">
                        <icon name="home" />
                        <icon name="photo" class="icon-photo"/>
                        <icon name="out" />
                    </div>
                </div>
            </template>
            <template #content>
                <ul class="stories">
                    <li class="stories-item" v-for="story in stories" :key="story.id">
                        <story-user-item
                :avatar="story.avatar"
                :username="story.username"
                />
                    </li>
                </ul>
            </template>
        </topline>
    </div>
    <div class="content">
        <div class="c-main-content">
            <div class="x-container-post">
                <ul class="post-list">
                    <li class="post-item" v-for="item in items" :key="item.id">
                        <div class="profile">
                            <icon name="photo" class="profile-photo"/>
                            <div class="username" >{{ getPostData(item).username }}</div>
                        </div>
                        <post v-bind="getPostData(item)"
                        />
                        <feed />
                        <div class="date">15 may</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
import { topline } from '../../components/topline'
import { StoryUserItem } from '../../components/StoryUserItem'
import stories from './data.json'
import { icon } from '../../icon'
import { logo } from '../../icon/logo'
import { post } from '../../components/post'
import { feed } from '../../components/feed'
import * as api from '../../api'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'feeds',
  components: {
    topline,
    StoryUserItem,
    icon,
    logo,
    feed,
    post
  },
  data () {
    return {
      stories,
      items: []
    }
  },
  methods: {
    getPostData (item) {
      return {
        title: item.name,
        description: item.description,
        username: item.owner.login,
        stars: item.stargazers_count,
        forks: item.forks_count
      }
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

<style lang="scss" scoped>
.icon {
    display: flex;
    cursor: pointer;
}
.icon-photo{
    margin-left: 24px;
    margin-right: 24px;
}
</style>
