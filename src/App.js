import './App.css';
import Header from './Header';
import Footer from './Footer';
import Animal from './Animal';


const App = () => {
  return (
    <div>
    <Header />

    <Animal name="Panda" className="Panda"/>
    
    <Animal name="Tiger" className="Tiger"/>

    <Footer />
    </div>
    

  );
}

export default App;