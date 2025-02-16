import './App.css';

function App() {
  const [colorValue, setColor] = useState('');
  const [textValue, setText] = useState('');

  const colorChange = (event) => {
    setInputValue(event.target.value);
  };

  const textChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div class="App">
      <h1>Change this websites color</h1>
      <p class="text">Change this text</p>
      <input type="text" name="color" value={colorValue} onChange={colorChange}></input>
      <br></br>
      <h2>Input text to change to</h2>
      <input type="text" name="text" value={textValue} onChange={textChange}></input>
    </div>
  );
}

export default App;
