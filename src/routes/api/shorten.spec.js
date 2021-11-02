import { expect } from '@hapi/code'
import { post } from './shorten.js'

describe('api/shorten', () => {
  it('some test', () => {
    expect(post).to.be.a.function()
  })
})
