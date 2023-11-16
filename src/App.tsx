import React, { Fragment } from 'react';

import Header from './components/Header';
import Container from './components/Container';

import BookContainer from './components/Book/BookContainer';
import Addform from './components/AddForm';



const App = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <Addform />
        <BookContainer />
      </Container>
    </Fragment>
  );
};

export default App;