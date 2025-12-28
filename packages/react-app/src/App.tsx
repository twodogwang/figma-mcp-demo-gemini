import React from 'react';
import Tabs from './components/Tabs';
import TableHeader from './components/TableHeader';
import OrderCard from './components/OrderCard';
import Pagination from './components/Pagination';

function App() {
  return (
    <div className="min-h-screen bg-white p-5 font-arial">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-4">
          <Tabs />
        </div>
        
        <div className="mb-4">
          <TableHeader />
        </div>

        <div className="space-y-4">
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </div>

        <div className="mt-4">
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default App;