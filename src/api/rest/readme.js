import { makeRequest } from '../request'

export const getReadme = ({ owner, repo }) => {
  const contentHeader = 'application/vnd.github.v3.html+json'
  return makeRequest({
    url: `https://api.github.com/repos/${owner}/${repo}/readme`,
    headers: {
      accept: contentHeader
    }
  })
}
