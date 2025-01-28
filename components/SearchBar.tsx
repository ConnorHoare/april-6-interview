'use client'

import React from 'react'

type SearchProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

const SearchBar = ({value, onChange, placeholder = "Search..."}: SearchProps) => {
  return (
    <div className='w-full max-w-sm'>
        <input 
            type='text'
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:border-transparent'
        />
    </div>
  )
}

export default SearchBar