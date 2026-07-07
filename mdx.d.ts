declare module '*.mdx' {
  import type { ComponentType } from 'react'

  export const meta: {
    title: string
    description: string
    keywords?: string[]
    ogTitle?: string
    ogDescription?: string
  }

  const MDXComponent: ComponentType
  export default MDXComponent
}
