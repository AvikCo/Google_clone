import React, { useContext, useState } from 'react';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import '../styles/header.css';
import SearchArea from './SearchArea';
import SearchContext from '../contexts/SearchDataContext';
interface HeaderProps {
  links: boolean;
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  const {term, onSearch} = useContext(SearchContext);
  const [searchTerm, setSearchTerm] = useState(term);

   const handleSearchBox = async (event: React.FormEvent) => {
    event.preventDefault();
    await onSearch(searchTerm);
  }


  console.log('from header',searchTerm);
  return (
    <div className="header">
      <div className="header__left">
         {/* google icon */}
        {!links && <React.Fragment>
          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" />
          <SearchArea
            term={searchTerm}
            onTermChange={setSearchTerm}
            IconSecond={MicIcon}
            IconThird={SearchIcon}
            handleSearchBox={handleSearchBox}
          />
        </React.Fragment>
        }
        {/* search area */}
      </div>


      <div className="header__right">
        {links && <React.Fragment>
          <a href="https://mail.google.com/mail">Gmail</a>
          <a href="#">Images</a>
        </React.Fragment>}
        <AppsIcon style={{color: 'gray'}} className="header__icon"/>
        <Avatar src="https://media-exp1.licdn.com/dms/image/C5103AQHGVIKBumYhxQ/profile-displayphoto-shrink_400_400/0/1554026022479?e=1619654400&v=beta&t=zFhdCZtH4AnnqhbI2ZyCK7m3jlMu8zCtJgaM3KjVNyc" className="header__avatar" />
        </div>
    </div>
    // {/* Below icons */}
      );
}

export default Header;