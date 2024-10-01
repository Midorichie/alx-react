import React from 'react';
import Notifications from './Notifications';
import Header from './Header';
import Login from './Login';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <div className="App-body">
          <Login />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
