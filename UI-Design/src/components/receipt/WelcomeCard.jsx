import React from 'react';

const WelcomeCard = () => {
  return (
    // Orange welcome card
    <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-3xl p-8 h-full flex flex-col">
      
      {/* Welcome Header */}
      <div className="mb-8">
        <div className="flex justify-end">
          <span className="text-4xl">☀️</span>
        </div>
        <h3 className="text-xl font-medium mt-6">A note from your host,</h3>
        <p className="text-3xl font-semibold mt-1">Margaux.</p>
      </div>

      {/* Message */}
      <div className="flex-1">
        <p className="leading-relaxed text-orange-100">
          We're so glad you're coming. The shutters will be open, 
          the lemonade cold, and the cat — Poivre — pretending not to notice you.
        </p>
      </div>

      {/* Room Info at bottom */}
      <div className="mt-auto pt-8 border-t border-orange-500">
        <p className="uppercase text-xs tracking-widest opacity-75">ROOM</p>
        <p className="text-xl font-medium">La Garrigue</p>
      </div>
    </div>
  );
};

export default WelcomeCard;