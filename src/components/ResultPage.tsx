import { useContext } from 'react';
import SearchContext from '../contexts/SearchDataContext';
import Header from './Header';


const ResultPage= ()=> {
  const contextType = useContext(SearchContext);
  console.log(contextType);
  return (
    <div>
      <Header links={false}/>
      {contextType.data.map((item: any) => (<h4>{item.title}</h4>))}
    </div>
  )
}

export default ResultPage;
