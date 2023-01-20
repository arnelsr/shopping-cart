import '../styles/App.css';




import dog from '../images/dog.png';
const App=()=>{
  //scores
  return (
        <div className="App-content">
            <div>
              <h1>Get Your New</h1>
              <h1>Pet Here!</h1>
            </div>
            <img src={dog} alt="Dog" width="600" height="600"/>
        </div>

  );
};
export default App;
