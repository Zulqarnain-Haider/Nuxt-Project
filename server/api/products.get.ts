import { readFileSync } from 'node:fs'
import { join } from 'node:path'

export default defineEventHandler(async (event) => { 
  try {
    const query = getQuery(event)
    const category = (query.category || '').toString().toLowerCase()
    const genres = (query.genres || '').toString().split(',').filter(Boolean)
    const minPrice = Number(query.minPrice ?? 0)
    const maxPrice = Number(query.maxPrice ?? 999)

    const filePath = join(process.cwd(),'data', 'products.json')
    const raw = readFileSync(filePath, 'utf-8')
    const allProducts = JSON.parse(raw)

    let filtered = allProducts.filter((p: any) => {
      if (category && p.category.toLowerCase() !== category) return false
      if (p.price < minPrice || p.price > maxPrice) return false
      if (genres.length && !genres.some((g) => p.genres.includes(g))) return false
      return true
    })

    return filtered
  } catch (err) {
    console.error('❌ API Error:', err)
    return { error: 'Failed to load products' }
  }
})
