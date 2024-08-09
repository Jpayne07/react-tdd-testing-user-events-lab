import { useState } from 'react';



function App() {
  const [checkedItems, setCheckedItems] = useState({checkbox1: false,checkbox2: false,checkbox3: false});

  const [message, setMessage] = useState(false);

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  const [name, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const updateName = (e) => setFullName(e.target.value);
  const updateEmailAddress = (e) => setEmailAddress(e.target.value);

  function submitFunction(e){
    e.preventDefault()
    setMessage(true)
   
  }
  return (
    
    
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
      <form onSubmit={(e)=>submitFunction(e)}>
        <div>
          <h3>Size</h3>
          <label htmlFor="name">Enter Username</label>
          <input type="text" id="name" name="name"value = {name} onChange={updateName}/>

          <label htmlFor="email">Enter Email</label>
          <input type="text" id="email" value = {emailAddress} onChange={updateEmailAddress}/>

          <label htmlFor="checkbox1">Checkbox 1</label>
          <input
            type="checkbox"
            id="checkbox1"
            name="checkbox1"
            checked={checkedItems.checkbox1 || false}
            onChange={handleChange}
          />
        
        <label htmlFor="checkbox2">Checkbox 2</label>
        <input
            type="checkbox"
            id="checkbox2"
            name="checkbox2"
            checked={checkedItems.checkbox2 || false}
            onChange={handleChange}
          />
        
        <label htmlFor="checkbox3">Checkbox 3</label>
        <input
            type="checkbox"
            id="checkbox3"
            name="checkbox3"
            checked={checkedItems.checkbox3 || false}
            onChange={handleChange}
          />
        <button type="submit"name="submit"id="submit">Submit</button>
        </div>
      </form>
      {message && (
        <div>
          <p>Thanks {name}! You are signed up for these newsletters:</p>
        </div>
      )}
      
    </main>
  );
  
}

export default App;
