import type { VercelRequest, VercelResponse } from '@vercel/node'

const query = `
  query ($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              color
            }
          }
        }
      }
    }
  }
`

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method !== 'GET') {
    return response.status(405).json({ error: 'Method not allowed' })
  }

  if (!process.env.GITHUB_TOKEN || !process.env.GITHUB_USERNAME) {
    return response.status(500).json({ error: 'GitHub environment variables are missing' })
  }

  const to = new Date()
  const from = new Date()
  from.setFullYear(to.getFullYear() - 1)

  try {
    const githubResponse = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: {
          login: process.env.GITHUB_USERNAME,
          from: from.toISOString(),
          to: to.toISOString(),
        },
      }),
    })

    const result = await githubResponse.json()

    if (!githubResponse.ok || result.errors) {
      return response.status(502).json({ error: 'Unable to fetch GitHub contributions' })
    }

    return response.status(200).json(
      result.data.user.contributionsCollection.contributionCalendar,
    )
  } catch {
    return response.status(502).json({ error: 'Unable to reach GitHub' })
  }
}