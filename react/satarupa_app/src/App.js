import logo from './logo.svg';
import './App.css';
import {Home} from'./Home';
import About from'./About';
import {Menu} from'./Menu';
function App() {
  return (
    <div >
      <h1>welcome to webskitters</h1>
      <form>
        <input type="text" placeholder="name"/>
      </form>

      <Home/>
      <About/>
      <Menu/>
    </div>
  );
}

export default App;
