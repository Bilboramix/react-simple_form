const HasSubmit = ({ username, email, password, getBack }) => {
  return (
    <>
      <header>
        <h1>Results</h1>
      </header>
      <main>
        <section>
          <p>Name : {username}</p>
          <p>Email : {email}</p>
          <p>Password : {password}</p>
          <button onClick={getBack}>Edit your informations</button>
        </section>
      </main>
    </>
  );
};

export default HasSubmit;
