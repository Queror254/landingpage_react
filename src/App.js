import './App.css';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/About';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HeroSection />
      {/**<AboutUs />**/}
    </div>
  );
}

export default App;
