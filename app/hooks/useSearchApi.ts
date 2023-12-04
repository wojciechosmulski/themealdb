'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const useSearchApi = (searchQuery: string) => {
  const [meals, setMeals] = useState<any[]>([])

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
            searchQuery
          )}`
        )
        setMeals(response.data.meals)
      } catch (error) {
        console.error(error)
      }
    }

    fetchMeals()
  }, [searchQuery])

  return meals
}
