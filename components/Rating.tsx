'use client'
import { useState } from 'react'

const Rating = () => {
  const [rating, setRating] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-2 mt-2">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            className={`${
              rating >= num
                ? 'bg-yellow-400 hover:bg-gray-300'
                : 'hover:bg-gray-300'
            } p-1 rounded-md`}
            onClick={() => setRating(num)}
          >
            {`⭐️`}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Rating
