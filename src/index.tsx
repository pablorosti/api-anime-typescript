import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';

import 'bootswatch/dist/flatly/bootstrap.min.css';
import { Manga } from './pages/Manga';
import { DataProvider } from './context/DataProvider';


const Index = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <div className='container'>
            <Route exact path={'/'} component={App} />
            <Route exact path={'/manga'} component={Manga} />
          </div>
        </Switch>
      </BrowserRouter>
    </DataProvider>
  )
}

ReactDOM.render(

  <Index />
  ,
  document.getElementById('root')
);
