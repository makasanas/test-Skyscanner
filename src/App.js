import React from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Switch } from 'react-router-dom';
import routes from './routes/index';


function App() {
  return (
    <div className="main">
      <Header />
      <Switch>
        {
          routes.map((route, index) => (
            <route.type
              key={index}
              exact={route.exact}
              path={route.path}
              component={route.component}
              location={route.location}
            />
          ))
        }
      </Switch>
      <Footer/>
    </div>      
  );
}

export default App;
