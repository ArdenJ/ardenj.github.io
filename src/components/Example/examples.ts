// examples as named exports

class WorkExample {
  // TODO: Create interface for _exampleData - it is defined implicitly in the constructor but...
  _exampleData: any

  constructor(
    title: string,
    repoLink: string,
    demoLink: string,
    image: string,
    description: string,
    challenges: string[],
    technologies: string[],
  ) {
    this._exampleData = {
      title,
      repoLink,
      demoLink,
      image,
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
  '',
  'This is the description of the project Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
  ['these', 'were', 'the', 'challenges'],
  ['Js', 'Ts', 'React'],
)

export const WebPlayer = new WorkExample(
  'React Web Player',
  'https:github.io/ArdenJ/site',
  '',
  '',
  'This is the web player description in less than 200 words',
  ['There were a few challenges'],
  ['Js', 'React'],
)

export const WebPlayurrr = new WorkExample(
  'React Web Player',
  'https:github.io/ArdenJ/site',
  '',
  '',
  'This is the web player description in less than 200 words',
  ['There were a few challenges'],
  ['Js', 'React'],
)
