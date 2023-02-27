
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router/router';

function App() {
  return (
    <div className='bg-gradient-to-tr from-[#CEB9DB] to-[#E2D7EA] bg-cover'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
