import logo from './logo.svg';
import './App.css';
import ExpenseItem from './Components/Expenseitem';
import ExpenseLocation from './Components/ExpenseLocation';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <ExpenseItem/>
      <ExpenseLocation/>
    </div>
   
  );
}

export default App;
