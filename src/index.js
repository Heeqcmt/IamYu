import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header';
import Footer from './components/footer';
import ProjectBoard from './components/projectBoard'
import reportWebVitals from './reportWebVitals';


function App()
{
  return(
  <>
    <Header />
    <ProjectBoard />
    <Footer />
  
  
  </>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

reportWebVitals();
