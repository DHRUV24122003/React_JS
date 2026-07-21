import React from 'react';
import Sidebar from './components/layout/Sidebar';
import BookingReceipt from './components/receipt/BookingReceipt';
import WelcomeCard from './components/receipt/welcomeCard';

function App() {
  return (
    <div className="flex min-h-screen bg-[#F8F4F0]">
      <Sidebar />

      <div className="flex-1 p-8 overflow-auto">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-widest text-gray-500">BOOKING • CONFIRMED</p>
            <h1 className="text-4xl font-serif mt-1">
              Bienvenue, <span className="text-orange-700">Lucia.</span>
            </h1>
          </div>

          {/* Booking Receipt */}
          <div className="mb-10">
            <BookingReceipt />
            <WelcomeCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;