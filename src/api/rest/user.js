import { makeRequest } from '../request'

export const getUserData = () => makeRequest({
  url: 'https://api.github.com/user'
})

export const getUserRepos = () => makeRequest({
  url: 'https://api.github.com/user/repos'
})
