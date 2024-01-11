import './styles/app.css'
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer
       small={"Industry veterans"}
       title={"trust us:"}
      />
    </div>
  );
}

export default App;
