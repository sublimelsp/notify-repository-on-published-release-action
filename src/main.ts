import * as core from '@actions/core'
import * as http from '@actions/http-client'

async function run(): Promise<void> {
  try {
    await new http.HttpClient().postJson(
      'https://api.github.com/repos/sublimelsp/repository/dispatches',
      {
        event_type: 'lsp-add-or-update-repository',
        client_payload: core.getInput('payload')
      },
      {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `token ${core.getInput('personal-access-token')}`
      }
    )
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
