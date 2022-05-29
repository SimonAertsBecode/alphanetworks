const SearchBar = ({ setSearchUser }: { setSearchUser: React.Dispatch<React.SetStateAction<string>> }) => {
   const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setSearchUser(e.target.value);
   };

   return (
      <>
         <label htmlFor='search_user'>Search for an user: </label>
         <input type={'search'} onChange={handleInput} placeholder={'Search for an user...'} id={'search_user'}></input>
      </>
   );
};

export default SearchBar;
