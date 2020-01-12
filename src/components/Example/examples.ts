// examples as named exports

export class WorkExample {
  // TODO: Create interface for _exampleData - it is defined implicitly in the constructor but...
  _exampleData: any

  constructor(
    title: string,
    repoLink: string,
    demoLink: string,
    description: string,
    challenges: string[],
    technologies: string[],
  ) {
    this._exampleData = {
      title,
      repoLink,
      demoLink,
      description,
      challenges,
      technologies,
    }
  }

  get exampleData() {
    return this._exampleData
  }
}

export const DevSite = new WorkExample(
  'this site',
  'https://github.io/ArdenJ/site',
  'https://ardenj.co',
  'This is the description of the project',
  ['these', 'were', 'the', 'challenges'],
  ['Js', 'Ts', 'React'],
)

export const WebPlayer = new WorkExample(
  'React Web Player',
  'https:github.io/ArdenJ/site',
  '',
  'This is the web player description in less than 200 words',
  ['There were a few challenges'],
  ['Js', 'React'],
)
