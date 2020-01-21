// examples as named exports

interface IData {
  title: string
  repoLink: string
  demoLink?: string
}

class WorkExample {
  _demoInfo: IData

  constructor(title: string, repoLink: string, demoLink: string) {
    this._demoInfo = {
      title,
      repoLink,
      demoLink,
    }
  }

  get exampleData() {
    return this._demoInfo
  }
}

export const devSite = new WorkExample(
  'this site',
  'https://github.io/ArdenJ/site',
  'https://ardenj.co',
)

export const audioPlayer = new WorkExample(
  'ID3 audio player',
  'https://github.io/ArdenJ/audioplayer',
  'https://w9c0x.csb.app/',
)
