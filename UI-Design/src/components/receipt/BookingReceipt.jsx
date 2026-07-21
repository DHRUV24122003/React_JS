// import React from 'react';
// import { bookingData } from '../../data/bookingData';

// const BookingReceipt = () => {
//   return (
//     // Main white receipt card
//     <div className="bg-white rounded-3xl shadow-sm p-8">
      
//       {/* Header */}
//       <div className="flex justify-between mb-8">
//         <div>
//           <p className="text-xs uppercase tracking-widest text-gray-400">RECEIPT</p>
//           <h2 className="text-2xl font-semibold mt-1">Your stay</h2>
//         </div>
//         <div className="text-right">
//           <p className="text-sm text-gray-500">No. MS-2026</p>
//           <p className="text-sm text-gray-500">0421-AH</p>
//         </div>
//       </div>

//       {/* Check In & Check Out */}
//       <div className="grid grid-cols-2 gap-10 mb-8">
//         <div>
//           <p className="text-xs text-gray-500 mb-1">CHECK IN</p>
//           <p className="text-3xl font-semibold">{bookingData.checkIn.date}</p>
//           <p className="text-sm text-gray-600">
//             {bookingData.checkIn.day} • {bookingData.checkIn.time}
//           </p>
//         </div>
//         <div className="text-right">
//           <p className="text-xs text-gray-500 mb-1">CHECK OUT</p>
//           <p className="text-3xl font-semibold">{bookingData.checkOut.date}</p>
//           <p className="text-sm text-gray-600">
//             {bookingData.checkOut.day} • {bookingData.checkOut.time}
//           </p>
//         </div>
//       </div>

//       {/* Details */}
//       <div className="space-y-4 py-6 border-t border-b border-gray-100">
//         <div className="flex justify-between text-base">
//           <span>Room • {bookingData.room}</span>
//           <span>× {bookingData.nights} nights</span>
//         </div>
//         <div className="flex justify-between text-base">
//           <span>Breakfast × {bookingData.guests} guests</span>
//           <span>€ 96.00</span>
//         </div>
//         <div className="flex justify-between text-sm text-gray-600">
//           <span>Tourist tax</span>
//           <span>€ 14.40</span>
//         </div>
//       </div>

//       {/* Total */}
//       <div className="flex justify-between items-end pt-6">
//         <div>
//             <p className="text-4xl font-semibold text-orange-800">
//   {bookingData.currency}{bookingData.total}
// </p>
//           {/* <p className="text-sm text-gray-500">TOTAL PAID</p>
//           <p className="text-4xl font-semibold text-orange-800">
//             {bookingData.currency}{bookingData.total.toFixed(2)}
//           </p> */}
//         </div>
//         <div className="text-right">
//           <p className="text-xs text-gray-400">PAID • WISE • GBP</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingReceipt;







import React from 'react';
import { bookingData } from '../../data/bookingData';

const BookingReceipt = () => {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-8">
      
      {/* Header */}
      <div className="flex justify-between mb-8">
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-400">RECEIPT</p>
          <h2 className="text-2xl font-semibold mt-1">Your stay</h2>
        </div>
        <div className="text-right text-sm text-gray-500">
          <p>No. MS-2026</p>
          <p>0421-AH</p>
        </div>
      </div>

      {/* Dates */}
      <div className="grid grid-cols-2 gap-10 mb-8">
        <div>
          <p className="text-xs text-gray-500 mb-1">CHECK IN</p>
          <p className="text-3xl font-semibold">{bookingData.checkIn.date}</p>
          <p className="text-sm text-gray-600">
            {bookingData.checkIn.day} • {bookingData.checkIn.time}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500 mb-1">CHECK OUT</p>
          <p className="text-3xl font-semibold">{bookingData.checkOut.date}</p>
          <p className="text-sm text-gray-600">
            {bookingData.checkOut.day} • {bookingData.checkOut.time}
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-4 py-6 border-t border-b border-gray-100 text-base">
        <div className="flex justify-between">
          <span>Room • {bookingData.room}</span>
          <span>× {bookingData.nights} nights</span>
        </div>
        <div className="flex justify-between">
          <span>Breakfast × {bookingData.guests} guests</span>
          <span>€ 96.00</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Tourist tax</span>
          <span>€ 14.40</span>
        </div>
      </div>

      {/* Total */}
      <div className="pt-6 flex justify-between items-end">
        <div>
          <p className="text-sm text-gray-500">TOTAL PAID</p>
          <p className="text-4xl font-semibold text-orange-800">
            €{bookingData.total}
          </p>
        </div>
        <p className="text-xs text-gray-400">PAID • WISE • GBP</p>
      </div>
    </div>
  );
};

export default BookingReceipt;