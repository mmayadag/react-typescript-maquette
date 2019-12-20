import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Cards from '../Card/Cards';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Cards />
      <Main />
      <Footer />
    </>
  );
}

export default App;
