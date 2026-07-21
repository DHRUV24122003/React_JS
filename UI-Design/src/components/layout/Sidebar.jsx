import React from 'react';

const Sidebar = () => {
  const menuItems = [
    { name: "Your stay", icon: "🛏️", active: true, notification: 1 },
    { name: "The house", icon: "🏠", active: false },
    { name: "Around town", icon: "📍", active: false },
    { name: "Breakfast", icon: "☕", active: false },
    { name: "Messages", icon: "✉️", active: false },
  ];

  return (
    <div className="w-64 h-screen bg-[#F8F4F0] border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <span className="text-2xl">☀️</span>
          <div>
            <h1 className="text-xl font-serif tracking-tight">Maison Soleil</h1>
            <p className="text-xs text-gray-500">Cassis, France</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
                  ${item.active 
                    ? 'bg-white shadow-sm text-orange-800' 
                    : 'hover:bg-white/70 text-gray-700'
                  }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
                {item.notification && (
                  <span className="ml-auto bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                    {item.notification}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-200 mt-auto">
        <div className="flex items-center gap-3 p-3 rounded-2xl hover:bg-white cursor-pointer">
          <div className="w-9 h-9 bg-orange-200 rounded-full"></div>
          <div>
            <p className="font-medium text-sm">Lucia Martinez</p>
            <p className="text-xs text-gray-500">Guest</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;