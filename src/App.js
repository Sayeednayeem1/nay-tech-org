
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

function App() {
  return (
    <div className='bg-gradient-to-tr from-[#CEB9DB] to-[#E2D7EA] bg-cover'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;


// import { RouterProvider } from 'react-router-dom';
// import ParticlesBg from 'particles-bg';
// import './App.css';
// import { router } from './router/router';

// function App() {
//   return (
//     <div >
//       <ParticlesBg type="color" bg={true} />
//       <RouterProvider router={router}></RouterProvider>
//     </div>
//   );
// }
// // todo className='bg-gradient-to-tr from-[#CEB9DB] to-[#E2D7EA] bg-cover'

// export default App;
