const SearchBar = ({ setSearchUser }: { setSearchUser: React.Dispatch<React.SetStateAction<string>> }) => {
   const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setSearchUser(e.target.value.toLowerCase());
   };

   return (
      <>
         <label htmlFor='search_user'>Search for a user (name, username or email): </label>
         <input type={'search'} onChange={handleInput} placeholder={'Search...'} id={'search_user'}></input>
      </>
   );
};

export default SearchBar;
