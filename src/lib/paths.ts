export function sitePath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  return `${basePath}${normalizedPath}`
}

export const assetPath = sitePath
