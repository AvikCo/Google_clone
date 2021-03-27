
import Header from './Header';
import SearchBox from './SearchBox';
import Footer from './Footer';
import '../styles/app.css'


const Home:React.FC = () => {
   
  return (
    <div className="app">
      <Header links={true}/>
      <SearchBox/>
      <Footer /> 
    </div>
  )
}

export default Home;