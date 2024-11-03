import React from 'react';
import PenerimaanForm from './components/PenerimaanForm';
import PengeluaranForm from './components/PengeluaranForm';
import StockReport from './components/StockReport';

function App() {
  return (
    <div className="App">
      <h1>Warehouse Management System</h1>
      <PenerimaanForm />
      <PengeluaranForm />
      <StockReport />
    </div>
  );
}

export default App;