export interface GhRepositorio extends Array<GhRepositorio>{

  name: string
  html_url: string
  description: string
  created_at: string
  updated_at: string
  forks_count: number

}
