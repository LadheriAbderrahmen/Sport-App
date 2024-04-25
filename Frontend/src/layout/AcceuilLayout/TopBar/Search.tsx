import React, { useEffect, useRef, useState } from 'react'
import { IoSearch } from 'react-icons/io5'

function Search() {

  const [visible, setvisible] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(()=>{
    if(visible){
      inputRef.current!.focus();
    }
  },[visible])

  const openSearch = () => {
    setvisible(!visible)
  }

  return (
    <div className='SearchBar'>
        <input type="text" ref={inputRef} className={`searchbar ${visible ? 'visible' : ''}`} placeholder='Recherche'/>
        <IoSearch className='Icons' onClick={openSearch} />
    </div>
  )
}

export default Search