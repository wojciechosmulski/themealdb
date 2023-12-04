'use client'
import { useMealDetailsApi } from '@/app/hooks/useDetails'

const MealSection = ({ mealId }: { mealId: string }) => {
  const data = useMealDetailsApi(mealId)
  return (
    <div className="max-w-2xl mx-auto p-4 flex-col items-center justify-center gap-5">
      <h1 className="text-2xl font-bold mb-4">
        {data?.strMeal}
      </h1>
      <div className="mb-4">
        <div>
          <p className="text-lg font-semibold">
            Category: {data?.strCategory}
          </p>
          <p className="text-lg font-semibold">
            Area: {data?.strArea}
          </p>
          <p className="mt-4">{data?.strInstructions}</p>
          {data?.strTags && (
            <p className="mt-2">Tags: {data?.strTags}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default MealSection
