'use client'
import React from 'react'
import Image from 'next/image'
import { Meal } from '@/app/types/meal'
import Rating from './Rating'
import { useRouter } from 'next/navigation'

type MealCardProps = {
  meal: Meal
}

const MealCard = ({ meal }: MealCardProps) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(`/meal/${meal.idMeal}`)
  }
  return (
    <div className="flex flex-col">
      <div
        key={meal.idMeal}
        className="relative flex flex-col items-center justify-center  transition-all duration-500 ease-in-out rounded-md hover:scale-110"
        onClick={handleClick}
      >
        <Image
          src={meal.strMealThumb}
          alt={meal.strMeal}
          width={192}
          height={192}
          className="w-48 h-48 object-cover rounded-md"
        />
        <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-md text-white text-center z-10 px-4 py-2">
          {meal.strMeal}
        </h3>
        <div className="absolute inset-0 bg-black opacity-50 blur-sm rounded-md"></div>
      </div>
      <Rating />
    </div>
  )
}

export default MealCard
