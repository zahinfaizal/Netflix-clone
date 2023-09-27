import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Row from './components/Row';
import requests from './components/request';



function App() {
  return (
    <div>
      <Navbar/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
     <Row isPoster = {true} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
     <Row title="Trending In India" fetchUrl={requests.fetchTrending} />
     <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
     <Row title="comedy Movies" fetchUrl={requests.fetchComedyMovies} />
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
     <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />
      
    </div>
  );
  }

export default App;
