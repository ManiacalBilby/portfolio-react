import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
<body>

    <header>
        <h1>Tyler McDonald</h1>
    </header>

    <main>
        <p>I am a full-stack developer currently enrolled in the Web Development Immersive program at General Assembly in Atlanta,
            GA. I have a background in childcare and addiction counseling and made a decision to pursue a field where I could
            put my love of problem solving to work</p>
        <p>While I am still discovering what type of work I would like to do, a positive work environment is exremely important
            to me. Feel free to review my projects below and interact with me via the social sites below.</p>
        <div>
            <h3>Projects</h3>
            <div>
                <a href="http://twmcdonaldhangman.bitballoon.com/">Hangman Game</a>
            </div>
            <div>
                <a href="https://lit-river-55055.herokuapp.com">Sticktimes</a>
            </div>
            <div>
                <a href="https://young-bastion-12479.herokuapp.com/">TreeTime</a>
            </div>
        </div>
        <div>
            <h3>Social</h3>
            <a href="https://twitter.com/tylermcdonald">Twitter</a>
            <a href="https://github.com/ManiacalBilby">Github</a>
            <a href="https://www.linkedin.com/in/tylerwmcdonald/">Linkedin</a>
            <a href="https://young-bastion-12479.herokuapp.com/"></a>
        </div>
    </main>

    <script src="app.js"></script>
</body>
    );
  }
}

export default App;
