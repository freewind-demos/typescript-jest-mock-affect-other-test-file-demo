import shared from "./shared";

describe('hello2', () => {

  it('hello2-1', () => {
    shared.push('hello2-1')
    console.log('### shared in hello2:', shared)
  })

  it('hello2-2', () => {
    shared.push('hello2-2')
    console.log('### shared in hello2:', shared)
  })

})
