'use client'

import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useState } from 'react'

type ComboBoxProps = {
  onSelection: (cuisine: string) => void
}

const countries = [
  {
    value: 'british',
    label: 'British',
  },
  {
    value: 'canadian',
    label: 'Canadian',
  },
  {
    value: 'chinese',
    label: 'Chinese',
  },
  {
    value: 'egyptian',
    label: 'Egyptian',
  },
  {
    value: 'french',
    label: 'French',
  },
  {
    value: 'german',
    label: 'German',
  },
  {
    value: 'greek',
    label: 'Greek',
  },
  {
    value: 'indian',
    label: 'Indian',
  },
  {
    value: 'irish',
    label: 'Irish',
  },
  {
    value: 'italian',
    label: 'Italian',
  },
  {
    value: 'jamaican',
    label: 'Jamaican',
  },
  {
    value: 'japanese',
    label: 'Japanese',
  },
  {
    value: 'kenyan',
    label: 'Kenyan',
  },
  {
    value: 'mexican',
    label: 'Mexican',
  },
  {
    value: 'polish',
    label: 'Polish',
  },
  {
    value: 'portuguese',
    label: 'Portuguese',
  },
  {
    value: 'russian',
    label: 'Russian',
  },
  {
    value: 'spanish',
    label: 'Spanish',
  },
  {
    value: 'thai',
    label: 'Thai',
  },
  {
    value: 'turkish',
    label: 'Turkish',
  },
  {
    value: 'ukrainian',
    label: 'Ukrainian',
  },
  {
    value: 'american',
    label: 'American',
  },
  {
    value: 'uruguayan',
    label: 'Uruguayan',
  },
  {
    value: 'venezuelan',
    label: 'Venezuelan',
  },
  {
    value: 'vietnamese',
    label: 'Vietnamese',
  },
]

const ComboBox = ({ onSelection }: ComboBoxProps) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  const handleSelect = (currentValue: string) => {
    setValue(currentValue)
    setOpen(false)
    onSelection(currentValue)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? countries.find(
                (country) => country.value === value
              )?.label
            : 'Select Cuisine...'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] max-h-[300px] overflow-y-auto p-0">
        <Command>
          <CommandInput placeholder="Search Country..." />
          <CommandEmpty>No Country Found.</CommandEmpty>
          <CommandGroup>
            {countries.map((country) => (
              <CommandItem
                key={country.value}
                value={country.value}
                onSelect={handleSelect}
              >
                <Check
                  className={`mr-2 h-4 w-4 ${
                    value === country.value
                      ? 'opacity-100'
                      : 'opacity-0'
                  }`}
                />
                {country.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default ComboBox
