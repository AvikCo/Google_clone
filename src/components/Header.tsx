import React, { useContext, useState } from 'react';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import BallotOutlinedIcon from '@material-ui/icons/BallotOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import IconButton from './IconButton';
import '../styles/header.css';
import SearchArea from './SearchArea';
import SearchContext from '../contexts/SearchDataContext';



interface HeaderProps {
	links: boolean;
	history?: any;
}

const Header: React.FC<HeaderProps> =({ links, history }) => {
  const { term, onSearch } = useContext(SearchContext);
	const [searchTerm, setSearchTerm] = useState(term);
	const [selectedTab, setSelectedTab] = useState('All');

  const handleSearchBox = async (event: React.FormEvent) => {
		event.preventDefault();
		if (!searchTerm) {
			return;
		}
    await onSearch(searchTerm);
  }

  const headerBorder = !links ? { borderBottom: '0.2px solid lightgrey' } : {borderBottom: '0px solid lightgrey'}
  return (
		<div style={headerBorder} className='header'>
			<div className='header__left'>
				{/* google icon */}
				{!links && (
					<React.Fragment>
						<img onClick={()=>history.push('./') } src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png' />
						<div className='header__leftOptions'>
							<SearchArea
								term={searchTerm}
								onTermChange={setSearchTerm}
								IconSecond={MicIcon}
								IconThird={SearchIcon}
								handleSearchBox={handleSearchBox}
								history={history}
							/>
							<div className='header__leftOptions__below'>
								<div className='header__leftOptions__belowLeft'>
									<IconButton
										name='All'
										selectedTab={selectedTab}
										onTabClick={(name: string) => 
											setSelectedTab(name)
										}
										Icon={SearchIcon}
									/>
									<IconButton
										name='Images'
										selectedTab={selectedTab}
										onTabClick={(name: string) => setSelectedTab(name)}
										Icon={ImageOutlinedIcon}
									/>
									<IconButton
										name='Maps'
										selectedTab={selectedTab}
										onTabClick={(name: string) => setSelectedTab(name)}
										Icon={RoomOutlinedIcon}
									/>
									<IconButton
										name='Videos'
										selectedTab={selectedTab}
										onTabClick={(name: string) => setSelectedTab(name)}
										Icon={VideoLibraryOutlinedIcon}
									/>
									<IconButton
										name='News'
										selectedTab={selectedTab}
										onTabClick={(name: string) => setSelectedTab(name)}
										Icon={BallotOutlinedIcon}
									/>
									<IconButton
										name='More'
										selectedTab={selectedTab}
										onTabClick={(name: string) => setSelectedTab(name)}
										Icon={MoreVertOutlinedIcon}
									/>
								</div>
								<div className='header__leftOptions__belowRight'>
									<a href='#'>Settings</a>
									<button>Tools</button>
								</div>
							</div>
						</div>
					</React.Fragment>
				)}
				{/* search area */}
			</div>
			<div className='header__right'>
				{links && (
					<React.Fragment>
						<a href='https://mail.google.com/mail'>Gmail</a>
						<a href='#'>Images</a>
					</React.Fragment>
				)}
				<AppsIcon style={{ color: 'gray' }} className='header__icon' />
				<Avatar
					src='https://avatars.githubusercontent.com/u/73161634?v=4'
					className='header__avatar'
				/>
			</div>
		</div>
		// {/* Below icons */}
	);
}

export default Header;