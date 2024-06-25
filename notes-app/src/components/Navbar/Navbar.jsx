import React, { useState } from 'react'
import ProfileInfo from '../Cards/ProfileInfo'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import { CiMenuBurger } from 'react-icons/ci'
import { IoCloseSharp } from 'react-icons/io5'

function Navbar({ userInfo, onSearchNote, handleClearSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [hide, setHide] = useState(false)

  const navigate = useNavigate();
  const onLogout = () =>{
    localStorage.clear()
    navigate("/login")
  };

  const handleSearch = () =>{
    if(searchQuery){
      onSearchNote(searchQuery)
    }
  };

  const onClearSearch = () => {
    setSearchQuery("")
    handleClearSearch()
  };

  const handleDisplay = () => {
    setHide(!hide)
    console.log(setHide)
  }

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
        <h2 className="text-xl font-medium text-black py-2">Notes</h2>
        <SearchBar
        value={searchQuery}
        onChange={({target}) => {
          setSearchQuery(target.value)
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
        />
        <ProfileInfo userInfo={userInfo} onLogout={onLogout}/>
        <CiMenuBurger onClick={handleDisplay} className='md:hidden'/>
        {/* <IoCloseSharp className='md:hidden'/> */}
        <div className="fixed bg-red-500 insert-0"></div>
    </div>
  )
}


export default Navbar;