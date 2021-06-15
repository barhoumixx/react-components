import './App.css';
import Photo from './Component/Profile/ProfilePhoto';
import Name from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Photo/>
        <br/>
        <br/>
        <Name/>
        <br/>
        <br/>
        <Address/>
      </header>
    </div>
  );
}

export default App;
