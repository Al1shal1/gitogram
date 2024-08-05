import { makeRequest } from '../request'

export const getIssues = ({ owner, repo }) => {
  const params = new URLSearchParams()
  params.append('per_page', 10)

  return makeRequest({
    url: `https://api.github.com/repos/${owner}/${repo}/issues`
  })
}
