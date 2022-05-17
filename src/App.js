import './App.css'
import Banner from './Component/Header/Banner/Banner';
import Header from './Component/Header/Header';
import LiveDemo from './Component/LiveDemo/LiveDemo';
import MathCourse from './Component/MathCourse/MathCourse';
import MyService from './Component/MyService/MyService';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <MyService></MyService>
      <MathCourse></MathCourse>
      <LiveDemo></LiveDemo>
    </div>
  );
}

export default App;
