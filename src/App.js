import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import HasSubmit from "./components/HasSubmit";
import HasNotSubmit from "./components/HasNotSubmit";

function App() {
  const [hasSubmit, setHasSubmit] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleUsernameChange = (event) => {
    const changedValue = event.target.value;
    setUsername(changedValue);
  };

  const handleEmailChange = (event) => {
    const changedValue = event.target.value;
    setEmail(changedValue);
  };

  const handlePasswordChange = (event) => {
    const changedValue = event.target.value;
    setPassword(changedValue);
  };

  const handleConfirmationChange = (event) => {
    const changedValue = event.target.value;
    setConfirmation(changedValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmation) {
      alert("Passwords does not match");
    } else {
      setHasSubmit(true);
      console.log(hasSubmit);
    }
  };

  const getBack = () => {
    setHasSubmit(false);
    console.log("GET BACK FUCKER !");
  };

  return (
    <div>
      {hasSubmit ? <HasSubmit username={username} email={email} password={password} getBack={getBack} /> : <HasNotSubmit handleSubmit={handleSubmit} username={username} handleUsernameChange={handleUsernameChange} email={email} handleEmailChange={handleEmailChange} confirmation={confirmation} handlePasswordChange={handlePasswordChange} handleConfirmationChange={handleConfirmationChange} />}

      <Footer />
    </div>
  );
}

export default App;
