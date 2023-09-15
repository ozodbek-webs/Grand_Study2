import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/MainTop';
import Courses from './components/Courses';
import About from './components/About';
import OurTeacher from './components/ourTeacher';

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Courses />
      <About />
      <OurTeacher/>
      <Footer />
    </>
  );
};

export default App;