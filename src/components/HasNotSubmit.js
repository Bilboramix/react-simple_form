const HasNotSubmit = ({ handleSubmit, username, handleUsernameChange, email, handleEmailChange, password, handlePasswordChange, confirmation, handleConfirmationChange }) => {
  return (
    <>
      {/* Has not submit */}
      <header>
        <h1>Create account</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <p>Name</p>
          <input value={username} onChange={handleUsernameChange} placeholder="username" type="text" />
          <p>Email</p>
          <input value={email} onChange={handleEmailChange} placeholder="email" type="email" />
          <p>Password</p>
          <input value={password} onChange={handlePasswordChange} placeholder="password" type="password" />
          <p>Confirm your password</p>
          <input value={confirmation} onChange={handleConfirmationChange} placeholder="confirm password" type="password" />
          <button type="submit">Register</button>
        </form>
      </main>
    </>
  );
};

export default HasNotSubmit;
