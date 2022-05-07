import beepody from './'

describe('version number', () => {
  it('matches semver format', () => {
    // regex is from https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
    const serverRegex =
      /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/
    expect(beepody.version).toEqual(expect.stringMatching(serverRegex))
  })
})
