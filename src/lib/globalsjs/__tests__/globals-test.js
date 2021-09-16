import * as globals from '../globals'

const alwaysAny = { any: () => true }

it('have unregisterAll method', () => {
  expect(typeof globals.unregisterAll).toBe('function')
})

describe('globals', () => {
  beforeEach(() => {
    globals.unregisterAll()
  })

  it('have register method', () => {
    const name = 'any'
    const data = alwaysAny

    expect(globals.register({ name, data }))
      .toBeEqual({ [name]: data })

    expect(globals.object(name).call('any')).toBeTruthly()
  })

  it('have unregister method', (name) => {
    const doSomething = {
      do: () => 'something',
    }
    const name = 'doIt'
    globals.register(name, doSomething)
    const expectingDoSomethingProduces = doSomething.do()
    expect(globals.object(name).call('do')).toBe(expectingDoSomethingProduces)
    globals.unregister(name)
    expect(globals.object(name).call('do')).toBe(undefined)
  })
})
