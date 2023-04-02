import React from 'react'
import {CiSearch} from 'react-icons/ci'

function Search() {
  return (
    <div className='search-box'>
        <div className='button'>
            <CiSearch />
        </div>
        <input type={'text'} placeholder='Search...' />
    </div>
  )
}

export default Search