import {
   createBrowserRouter,
   RouterProvider,
   createRoutesFromElements,
   Route,
} from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import Agency from './pages/Agency';
import Contact from './pages/Contact';
import Whoarewe from './pages/Whoarewe';
import Work from './pages/Work';
import Team from './pages/Team';
import Localisation from './pages/Localisation';

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path='/' element={<RootLayout />} errorElement={<ErrorPage />}>
         <Route index element={<Agency />} />
         <Route path='/whoarewe' element={<Whoarewe />} />
         <Route path='/work' element={<Work />} />
         <Route path='/team' element={<Team />} />
         <Route path='/localisation' element={<Localisation />} />
         <Route path='/contact' element={<Contact />} />
      </Route>
   )
);

const App = () => {
   return <RouterProvider router={router} />;
};

export default App;
