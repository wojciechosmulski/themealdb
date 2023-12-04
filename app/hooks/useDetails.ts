'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { MealDetails } from '../types/mealdetails'

export const useMealDetailsApi = (mealId: string) => {
  const [mealDetails, setMealDetails] =
    useState<MealDetails | null>(null)

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${encodeURIComponent(
            mealId
          )}`
        )
        if (
          response.data.meals &&
          response.data.meals.length > 0
        ) {
          setMealDetails(response.data.meals[0])
        } else {
          setMealDetails(null)
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchMealDetails()
  }, [mealId])

  return mealDetails
}
