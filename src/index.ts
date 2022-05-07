import version from './version'

class beepody {
  static get version(): string {
    return version
  }
}

export default beepody
export { version }
export * from './Beep'
