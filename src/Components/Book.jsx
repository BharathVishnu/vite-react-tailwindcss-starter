import React from 'react'

const Book = () => {
  return (
    <div className='bg-sky-100'>
      <div className='font-poppins text-sky-700 text-4xl font-bold mb-4 pt-10 pl-5'>
      Book Your Tickets
      </div>
        
        <div className="flex justify-center my-8">
          <div className="flex items-center space-x-4 bg-sky-300 p-4 border-4 border-sky-600 rounded-2xl">
            <input
            type="text"
            placeholder="From"
          
            className="border p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="To"
          
              className="border p-2 rounded-lg"
            />
            <input
              type="date"
              placeholder="Date"
          
              className="border p-2 rounded-lg"
            />
            <input
              type="number"
              placeholder="Passengers"
          
              className="border p-2 rounded-lg"
            />
            <button
          
              className="bg-blue-500 text-white p-2 rounded-2xl cursor-pointer"
            >
              Search
            </button>
          </div>
        </div>
        <div className='bg-sky-100 text-center flex justify-center p-20'>
          <div>
            Fetch from DB
          </div>
        </div>
    </div>
  )
}

export default Book