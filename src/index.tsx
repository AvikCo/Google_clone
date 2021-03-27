import ReactDOM from 'react-dom';
import App from './components/App';
import { SearchDataStore } from './contexts/SearchDataContext';


ReactDOM.render(
<SearchDataStore>
<App/>
</SearchDataStore>
, document.querySelector('#root'));