import PropTypes from 'prop-types'
import Header from './assets/Header.jsx';
import Footer from './assets/Footer.jsx';
import Food from './assets/Food.jsx';
import Card from './assets/Card.jsx';
import "./index.css";
//import Button  from "./Button/Button";
import Button2 from './assets/Button2.jsx';

import Student from './assets/Student.jsx';
function App() {

  return (
    //01. basics
    <>
      <Header />
      <Food />


   {/* 02. card component */}
      <Card />
      <Card />
      {/* <Button /> */}
      <Button2 />

      <Student name="Hiruni" age={22} isStudent={true} />
      <Student name="mari" age={30} isStudent={false} />
      <Student name="John" age={47} isStudent={false} />
      <Student name="janna" age={18} isStudent={true} />
      <Student name="jay" />


      <Footer />

    </>

  );
}
export default App
