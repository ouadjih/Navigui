import React from 'react';
import {BrowserRouter,Route} from'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {
  return (
   <BrowserRouter>
       <div className="grid-container">
        <header>
          <div className="row">
            <div>
                <a href="/" className="brand"><span className="lwn">NAVI</span>GUI</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">Sign In</a>
            </div>
          </div>
          </header>
        <main>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/product.html/:id" component={ProductScreen}></Route>       
        </main>
        <footer className="row center">All right reserved To Boudraa Med Ouadjih</footer>
      </div>
    
    </BrowserRouter>

  );
}

export default App;
