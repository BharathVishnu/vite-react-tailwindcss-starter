// import { useEffect, useState } from "react";
// import { createClient } from "@supabase/supabase-js";

// const supabase = createClient("https://<project>.supabase.co", "<your-anon-key>");

// function App() {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
// 	getCountries();
//   }, []);

//   async function getCountries() {
// 	const { data } = await supabase.from("countries").select();
// 	setCountries(data);
//   }

//   return (
// 	<ul>
// 	  {countries.map((country) => (
// 		<li key={country.name}>{country.name}</li>
// 	  ))}
// 	</ul>
//   );
// }

// export default App;

import React from 'react';

function App() {
	return (
		<div className='flex items-center justify-center w-screen h-screen bg-gray-900 '>
			<div className='w-3/12 p-6 mx-auto space-y-10 text-center bg-gray-800 rounded'>
				<h1 className='text-4xl text-white'>Vite + React + Tailwind</h1>
				<p className='text-2xl text-blue-300'>It's working</p>
				<a
					href='https://github.com/moinulmoin/vite-react-tailwind-starter'
					className='block text-3xl text-blue-300 underline'
				>
					⭐Star the repo if it helped you! :)
				</a>
			</div>
		</div>
	);
}

export default App;
