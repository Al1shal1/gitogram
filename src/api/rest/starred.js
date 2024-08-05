import { makeRequest } from '../request'

export const getStarredRepos = ({ limit }) => {
  const params = new URLSearchParams()
  if (limit) {
    params.append('per_page', limit)
  }
  return makeRequest({
    url: `https://api.github.com/user/starred?${params}`
  })
}

export const starRepo = ({ repo, owner }) => makeRequest({
  url: `https://api.github.com/user/starred/${owner}/${repo}`,
  method: 'put'
})

export const unStarRepo = ({ repo, owner }) => makeRequest({
  url: `https://api.github.com/user/starred/${owner}/${repo}`,
  method: 'delete'
})
