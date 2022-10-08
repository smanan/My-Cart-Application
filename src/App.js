import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { useGlobalContext } from './components/Context';

function App() {
  const {loading} = useGlobalContext();
  if(loading){
    return(
      <div className="loading">
        <h1>loading...</h1>
      </div>
    );
  }
  return (
    <>
      <Navbar/>
      <CartContainer/>
    </>
  );
}

export default App;
