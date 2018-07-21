const { JSDOM } = require('jsdom')
const glob = require('glob')
const { resolve } = require('path')

const jsdom = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = jsdom

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop))
  Object.defineProperties(target, props)
}

global.window = window
global.document = window.document
global.navigator = {
  userAgent: 'node.js',
}

copyProps(window, global)

// process.argv.slice(2).forEach(function (arg) {
// glob(arg, function (er, files) {
glob('source/**/*.test.js', (er, files) => {
  if (er) {
    throw er
  }

  files.forEach(file => {
    require(resolve(process.cwd(), file))
  })
})
// })
