import React, { useState } from 'react'
import { Input } from '@/components/ui/input'

type SearchBarProps = {
  onSearch: (searchQuery: string) => void
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value)
  }

  const handleEnterKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      onSearch(searchQuery)
    }
  }

  return (
    <div className="relative w-80">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>

      <Input
        type="text"
        placeholder="Search"
        className="pl-12 pr-4"
        value={searchQuery}
        onChange={handleInputChange}
        onKeyPress={handleEnterKeyPress}
      />
    </div>
  )
}

export default SearchBar
