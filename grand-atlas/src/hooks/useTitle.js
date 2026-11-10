import { useEffect } from 'react'

export default function useTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Grand Atlas` : 'Grand Atlas | Luxury Real Estate'
  }, [title])
}
