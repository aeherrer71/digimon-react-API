import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Digimon from './Digimon'

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/579c0ee2-24dd-4d54-a259-f1185c0e62e8/ddri009-8d41407a-4f68-4082-8f13-45e027a4d755.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU3OWMwZWUyLTI0ZGQtNGQ1NC1hMjU5LWYxMTg1YzBlNjJlOFwvZGRyaTAwOS04ZDQxNDA3YS00ZjY4LTQwODItOGYxMy00NWUwMjdhNGQ3NTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.lj3lvbhdKBlxaqBwMWfm6-AESjvoBxMDFsGkD1cfU4U" className="title"/>
        <Digimon />
        </div>
);
  }
}
export default App;