import ClearSharpIcon from '@material-ui/icons/ClearSharp';
import '../styles/searchArea.css';
import IconButton from '@material-ui/core/IconButton';


interface SearchAreaProps{
  term: string;
  onTermChange: React.Dispatch<React.SetStateAction<string>>;
  IconFirst?: any;
  IconSecond?: any;
  IconThird?: any;
  handleSearchBox: (event: React.FormEvent) => Promise<void>;
}
const SearchArea: React.FC<SearchAreaProps> = ({term, onTermChange, IconFirst, IconSecond, handleSearchBox, IconThird})=> {
  
  
  return (
		<div
			style={IconThird && { width: '112vh' }}
			className='search__box'
		>
			{IconFirst && <IconFirst className='search__icon' />}
			<form onSubmit={handleSearchBox}>
				<input value={term} onChange={(e) => onTermChange(e.target.value)} />
			</form>
			{term && (
				<ClearSharpIcon
					onClick={() => onTermChange('')}
					className='search__cross'
					style={{ color: 'gray' }}
				/>
			)}

			<IconSecond className='search__mic' />

			{IconThird && (
				<IconButton style={{ color: '#4285f4' }} onClick={handleSearchBox}>
					<IconThird />
				</IconButton>
			)}
		</div>
	);
}

export default SearchArea;
