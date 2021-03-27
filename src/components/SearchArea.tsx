import ClearSharpIcon from '@material-ui/icons/ClearSharp';
import '../styles/searchArea.css';


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
     <div className="search__box">
      {IconFirst && <IconFirst className="search__icon"/>}
        <form onSubmit={handleSearchBox}>
          <input value={term} onChange={e => onTermChange(e.target.value)} />
        </form>{
          term && <ClearSharpIcon onClick={()=> onTermChange('') } className="search__cross" style={{ color: 'gray' }} />
      }
      
      {IconThird && <IconThird />}
      
      <IconSecond className="search__mic" />
      </div>
  )
}

export default SearchArea;
