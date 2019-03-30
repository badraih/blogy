import React, { Component } from 'react';
import './App.css';
import style from 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div>
        <div class="wrapper">
        <div className="slider">
          <input id="slide_1" type="radio" name="slide-changer" checked/>
          <div className="slide slide_1"></div>
          
          <input id="slide_2" type="radio" name="slide-changer" />
          <div className="slide slide_2"></div>
          
          <input id="slide_3" type="radio" name="slide-changer" />
          <div className="slide slide_3"></div>

          <input id="slide_4" type="radio" name="slide-changer" />
          <div className="slide slide_4"></div>
          <input id="slide_5" type="radio" name="slide-changer" />
          <div className="slide slide_5"></div>
          <input id="slide_6" type="radio" name="slide-changer" />
          <div className="slide slide_6"></div>
          <input id="slide_7" type="radio" name="slide-changer" />
          <div className="slide slide_7"></div>
          <input id="slide_8" type="radio" name="slide-changer" />
          <div className="slide slide_8"></div>
        </div>
        </div>
        {/* <div className="wrapper">
          <div className="sliding-background"></div>
        </div> */}

       <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300" type="text/css" />
       <div className="content">
        <h1> Max Power </h1>
        <p>
        s simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
        sheets containing Lorem Ipsum passages, and more recently with desktop
         publishing software like Aldus PageMaker including versions of Lorem Ipsum..</p>
        <button id="myBtn" onclick="myFunction()">Read more</button>
       </div>
    </div>
    );
  }
}

export default App;
