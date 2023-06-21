import {
   createBrowserRouter,
   RouterProvider,
   createRoutesFromElements,
   Route,
} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from './components/Loader';

const RootLayout = lazy(() => import('./pages/RootLayout'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const Agency = lazy(() => import('./pages/Agency'));
const Contact = lazy(() => import('./pages/Contact'));
const Whoarewe = lazy(() => import('./pages/Whoarewe'));
const Work = lazy(() => import('./pages/Work'));
const Team = lazy(() => import('./pages/Team'));
const Localisation = lazy(() => import('./pages/Localisation'));

const renderLoader = () => <Loader />;

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
   return (
      <Suspense fallback={renderLoader}>
         <RouterProvider router={router} />
      </Suspense>
   );
};

export default App;
