import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import ClearSharpIcon from '@material-ui/icons/ClearSharp';

import '../styles/searchBox.css'

const SearchBox = () => {
  const [input, setInput] = useState<string>('');


  return (
    <div className="search">
      <img className="search__img" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
      <div className="search__box">
        <SearchIcon className="search__icon" />
        <form onSubmit={()=>alert('form submitted')}>
          <input value={input} onChange={e => setInput(e.target.value)} />
        </form>{
          input && <ClearSharpIcon onClick={()=> setInput('') } className="search__cross" style={{ color: 'gray' }} />
        }
        <MicIcon className="search__mic" />
      </div>
      <div className="search__buttons">
        <button>Google Search</button>
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
}

export default SearchBox;