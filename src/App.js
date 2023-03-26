import Navbar from './components/Navbar';
import './App.css';
import TextFroms from './components/TextFroms';

function App() {
  return (
      <> 
        <Navbar title=" text-utils " about="about"/>
        <div className="container" >
        <TextFroms heading="Enter the text below" />
        </div>
      </>
     );
}

export default App;
