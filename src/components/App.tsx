import Home from './Home';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import ResultPage from './ResultPage';

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/search' component={ResultPage}/>
        <Route path='/' render={()=> <div style={{textAlign: 'center'}}><h3>Sorry this page dosen't exist</h3> <h1 style={{color: 'red'}}>Error: 404</h1></div>}/>
      </Switch>
    </BrowserRouter>
  )
  
}

export default App;