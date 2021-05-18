import React from 'react'

const Enzyme = require('enzyme')
const EnzymeAdapter = require('enzyme-adapter-react-16')

React.useLayoutEffect = React.useEffect

Enzyme.configure({ adapter: new EnzymeAdapter() })

/*
  Util methods to start/close an express server during tests
 */
const serverMap = {}

global.startServer = (server) =>
  new Promise((resolve, reject) => {
    const listener = server.listen(0, 'localhost', (err) => {
      if (err) {
        return reject(err)
      }
      const address = listener.address()
      const url = `http://${address.address}:${address.port}`

      if (url in serverMap) {
        return reject(new Error(`${url} is already mapped!`))
      } else {
        serverMap[url] = listener
      }

      return resolve(url)
    })
  })

global.closeServers = (urls) => {
  Object.entries(serverMap).forEach(([url, listener]) => {
    if ((!urls || urls.includes(url)) && listener) {
      listener.close()
    }
  })
}
