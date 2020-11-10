
import './App.css';
import Themebox from "./Components/Themebox"
import DataContextProvider from "./Contexts/DataContext"

function App() {
  return (
    <div className="App">
      <DataContextProvider>
      <Themebox />
      </DataContextProvider>
    </div>
  );
}

export default App;
