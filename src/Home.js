import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <>
    <NavBar />
    <main id="home">
      <div id="content" className="content">
        <h1 className="helloWorld">Hello World</h1>
        <p>
          My name is Michael Sanchez.
          <br />
          I'm a full stack web developer looking to create.
          <br />
          Feel free to <Link to="/contact">Contact</Link> me.
        </p>
        <Button color="info" onClick={() => props.navigate("/projects")}>
        </Button>
      </div>
    </main>
    </>
  );
}

export default App;