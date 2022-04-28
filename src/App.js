import './App.css';
import CarList from './CarList.js';
import CustomerList from './CustomerList';
import AnimalList from './AnimalList';
// import your arrays here
import { cars } from './cars.js';
import { customers } from './customer';
import { animals } from './animals';

function App() {
  return (
    <div className="App">
      Render all your lists here. Pass the arrays as props.
      <CarList cars={cars} />
      <CustomerList customers={customers} />
      <AnimalList animals={animals} />
    </div>
  );
}

export default App;
