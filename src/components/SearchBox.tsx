import React, { useState, useContext } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { withRouter } from 'react-router-dom';


import SearchArea from './SearchArea';
import DataContext from '../contexts/SearchDataContext';
import '../styles/searchBox.css'



const SearchBox = withRouter(({ history }) => {
  
  const [input, setInput] = useState<string>('');
  const { onSearch } = useContext(DataContext);
  
  const handleSearchBox = async (event: React.FormEvent) => {
    event.preventDefault();
    await onSearch(input);
    history.push('/search');
  }

  return (
    <div className="search">
      <img className="search__img" alt="google icon" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
     
      <SearchArea
        IconFirst={SearchIcon}
        IconSecond={MicIcon}
        term={input}
        onTermChange={setInput}
        handleSearchBox={handleSearchBox} />


      <div className="search__buttons">
        <button onClick={()=>onSearch(input)}>Google Search</button>
        <button>I'm Feeling Lucky</button>
      </div>
      <div className="search__languages">
        <p>Google offered in: </p>
        <a href="#"> हिन्दी </a>
        <a href="#">বাংলা</a>
        <a href="#">తెలుగు</a>
        <a href="#"> मराठी </a>
        <a href="#">தமிழ் </a> 
        <a href="#"> ગુજરાતી </a>
        <a href="#">ಕನ್ನಡ</a>
        <a href="#">മലയാളം</a>
        <a href="#"> ਪੰਜਾਬੀ</a>
      </div>
    </div>
  )  
});

export default SearchBox;