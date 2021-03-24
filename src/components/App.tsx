import Header from './Header';
import SearchBox from './SearchBox';
import Footer from './Footer';
import '../styles/app.css'

const App = () => {

  return (
    <div className="app">
      <Header />
      <SearchBox />
      <Footer /> 
    </div>
  )
}

export default App;