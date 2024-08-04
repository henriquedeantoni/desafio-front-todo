import React, { FC, useState } from "react";
import { Link } from 'react-router-dom';
import everestLogo from "/everest-logo.svg";
import './App.css';

const App: FC = () => {
  const [userName, setUserName] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  return (
    <div className="everestApp">
      <img className="everestAppLogo" src={everestLogo} alt="Everest logo" />
      <h1 className="everestAppTitle">TODO App Challenge</h1>
      <div className="inputDiv">
        <label className="labelEverestApp" >To enter the application, please enter your name: </label>
        <input 
          type="text" 
          placeholder="Type your name here"
          value={userName}
          onChange={handleInputChange}
          className="inputEverestApp"
        />  
      </div>  
      <Link to={`/todos?userName=${encodeURIComponent(userName)}`}>
        <button>Enter Here</button>
      </Link>
      <p className="everestAppDocs">Read the instructions to get started!</p>
    </div>
  );
};

export default App;
