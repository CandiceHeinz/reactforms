import Authenticate from './components/Authenticate.jsx'
import SignUpForm from './components/SignUpForm.jsx'
import './App.css'
import React, { useState } from "react";

function App() {
  const [token, setToken] = useState(null);

return (
  <>
    <SignUpForm token={token} setToken={setToken} />
    <Authenticate token={token} setToken={setToken} />
  </>
);
}

export default App;
 