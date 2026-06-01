import React from 'react'

const AdminHeader = () => {
  return (
    <>
      <header className="flex items-center justify-center p-6 border border-l-0 border-r-0 sticky top-0">
        <div className="flex items-center gap-2">
          <span className="bg-green-900 text-white font-bold rounded px-3 py-1">
            K
          </span>
          <h2 className="text-lg md:text-xl font-bold text-green-800">
            Kavitacare
          </h2>
          <span className="text-gray-400 text-sm md:text-lg">Pharma</span>
        </div>
        <div className="flex-1 font-bold text-center text-3xl ">
          <i className='bg-green-700 text-white p-3 rounded-[20px]'>Admin Default Page</i>
        </div>
      </header>
    </>
  );
}

export default AdminHeader