import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: true,
  apiVersion: "2023-05-03",
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => builder.image(source)

// GROQ queries
export const projectsQuery = `*[_type == "project"] | order(order asc) {
  _id,
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  featured,
  order
}`

export const featuredProjectsQuery = `*[_type == "project" && featured == true] | order(order asc) {
  _id,
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  featured,
  order
}`
