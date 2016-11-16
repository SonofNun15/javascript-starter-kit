import { expect } from 'chai'
import jsdom from 'jsdom'
import fs from 'fs'

describe('sample tests', () => {
  it('should succeed', () => {
    expect(true).to.be.true
  })
})

describe('index.html', () => {
  it ('should contain a heading', (done) => {
    const index = fs.readFileSync('./source/index.html', 'utf-8')
    jsdom.env(index, (err, window) => {
      const h1 = window.document.getElementsByTagName('h1')[0]
      expect(h1.innerHTML).to.equal('My First Heading')
      window.close()
      done()
    })
  })
})
