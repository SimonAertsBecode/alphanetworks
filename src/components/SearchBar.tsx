import React, { useState } from 'react';

const SearchBar = ({ setSearchUser }: { setSearchUser: React.Dispatch<React.SetStateAction<string>> }) => {
   
   const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setSearchUser(e.target.value);
   };

   return <input onChange={handleInput}></input>;
};

export default SearchBar;
