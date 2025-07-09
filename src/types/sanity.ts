export interface SanityProject {
	_id: string
	title: string
	description: string
	image: {
	  asset: {
		_ref: string
		_type: string
	  }
	  _type: string
	}
	technologies: string[]
	liveUrl?: string
	githubUrl?: string
	featured: boolean
	order: number
  }
  