const express = require('express')
const request = require('request')

describe('Helmet middleware', () => {
  let TEST_SERVER_URL = ''

  beforeAll(async () => {
    const app = express()
    app.use(require('./helmet').default)
    app.get('/helmet', (_, res) => {
      res.send('Hello from helmet')
    })
    TEST_SERVER_URL = await global.startServer(app)
  })
  afterAll(() => {
    global.closeServers([TEST_SERVER_URL])
  })

  it('should set the appropriate headers in the response', async () => {
    await new Promise((resolve) => {
      request(`${TEST_SERVER_URL}/helmet`, (_, response, body) => {
        expect(response.headers['x-xss-protection']).toBe('0')
        expect(response.statusCode).toBe(200)
        expect(body).toBe('Hello from helmet')
        resolve()
      })
    })
  }, 1000)
})
