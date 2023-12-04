import { useMealDetailsApi } from '@/app/hooks/useDetails'
import MealSection from '@/components/MealSection'

export default function Page({
  params,
}: {
  params: { mealId: string }
}) {
  const { mealId } = params
  return (
    <>
      <MealSection mealId={mealId} />
    </>
  )
}
