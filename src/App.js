import logo from './logo.svg';
import './App.css';
import Title from './componenets/Title'
import Meme from './componenets/meme'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Title/>
      <Meme/>

       {/* <Hello weather="Cold" />*/}
      </header>
    </div>
  );
}

export default App;
