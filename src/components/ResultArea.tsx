import { searchData as ContextDataInterface } from '../contexts/SearchDataContext';
import { SearchInformation} from '../contexts/SearchDataContext';
import ResultCard from './ResultCard';


interface ResultAreaProps {
	result: ContextDataInterface[];
	searchInfo: SearchInformation;
}
const ResultArea: React.FC<ResultAreaProps> = ({ result, searchInfo }) => {
  

  const searchResult = result.map((item: ContextDataInterface, index) => (<ResultCard key={item.title} content={item} index={index}/>
	));
  return (
		<div style={{ marginLeft: '29vh' }}>
			<p style={{ color: 'gray', fontFamily: 'sans-serif', fontSize: "13px"}}>
				About {searchInfo.totalSearchResult} results in ({searchInfo.searchTime}{' '}
				seconds)
			</p>
			{searchResult}
		</div>
	);
}

export default ResultArea;