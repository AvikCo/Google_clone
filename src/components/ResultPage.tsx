import { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import SearchContext from '../contexts/SearchDataContext';
import Footer from './Footer';
import Header from './Header';
import ResultArea from './ResultArea';


const ResultPage = withRouter(({history}) => {
  const contextType = useContext(SearchContext);
  console.log(contextType);

  if (contextType.data.length === 0) {
    history.push('/');
  }
  
  return (
    <div>
      <Header links={false} />
      <ResultArea
        result={contextType.data}
        searchInfo={contextType.searchInformation}
      />
      {/* <Footer/> */}
    </div>
  );
});

export default ResultPage;
