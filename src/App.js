
import { RouterProvider } from 'react-router-dom';
import Particle from './Pages/Particles/Particle';
import { router } from './router/router';

function App() {
  return (
    <div className='bg-gradient-to-tr from-[#CEB9DB] to-[#E2D7EA] bg-cover' style={{ height: '80vh' }}>
      <Particle></Particle>
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
