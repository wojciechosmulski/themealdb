'use client'
import React, { useState } from 'react'
import axios from 'axios'
import SearchBar from '@/components/SearchBar'
import ComboBox from '@/components/ComboBox'
import MealCard from './MealCard'
import { Meal } from '@/app/types/meal'

const SearchSection = () => {
  const [searchResults, setSearchResults] = useState<
    Meal[] | null
  >(null)

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery) {
      setSearchResults(null)
      return
    }
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
          searchQuery
        )}`
      )
      setSearchResults(response.data.meals)
    } catch (error) {
      console.error(error)
    }
  }

  const handleSelection = async (
    selectedCuisine: string
  ) => {
    if (!selectedCuisine) {
      setSearchResults(null)
      return
    }
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${encodeURIComponent(
          selectedCuisine
        )}`
      )
      setSearchResults(response.data.meals)
    } catch (error) {
      console.error(error)
    }
    console.log('Selected cuisine:', selectedCuisine)
  }

  return (
    <div className="flex flex-col gap-4 mx-auto w-full justify-center items-center">
      <div className="flex justify-center items-center gap-3">
        <SearchBar onSearch={handleSearch} />
        <h4 className="font-medium text-md">OR</h4>
        <ComboBox onSelection={handleSelection} />
      </div>
      <h4 className="font-bold text-2xl">
        {searchResults !== null
          ? searchResults.length > 0
            ? `${searchResults.length} Results`
            : 'No Results'
          : 'No Results'}
      </h4>
      <div className="grid grid-cols-5 gap-8">
        {searchResults &&
          searchResults.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
      </div>
    </div>
  )
}

export default SearchSection
