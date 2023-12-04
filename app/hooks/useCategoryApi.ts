import { useEffect, useState } from 'react'
import axios from 'axios'

export const useCategoryApi = (category: string) => {
  const [categoryData, setCategoryData] = useState<any[]>(
    []
  )

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await axios.get(
          `www.themealdb.com/api/json/v1/1/filter.php?a=${category}`
        )
        setCategoryData(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchCategoryData()
  }, [category])

  return categoryData
}
