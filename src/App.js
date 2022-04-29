import './App.css';
import CarList from './CarList.js';
import CustomerList from './CustomerList';
import AnimalList from './AnimalList';
import BookList from './BookList';
// import your arrays here
import { cars } from './cars.js';
import { customers } from './customer';
import { animals } from './animals';
import { books } from './book';

function App() {
  return (
    <div className="App">
      <h1>A List of Lists</h1>
      <CarList cars={cars} />
      <CustomerList customers={customers} />
      <AnimalList animals={animals} />
      <BookList books={books} />
    </div>
  );
}

export default App;
