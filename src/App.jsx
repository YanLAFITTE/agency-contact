import {
   createBrowserRouter,
   RouterProvider,
   createRoutesFromElements,
   Route,
} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import RootLayout from './pages/RootLayout';
import Loader from './components/Loader';

const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const Agency = lazy(() => import('./pages/Agency'));
const Whoarewe = lazy(() => import('./pages/Whoarewe'));
const Work = lazy(() => import('./pages/Work'));
const Team = lazy(() => import('./pages/Team'));
const Localisation = lazy(() => import('./pages/Localisation'));
const Contact = lazy(() => import('./pages/Contact'));

const renderLoader = () => <Loader />;

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route
         path='/'
         element={<RootLayout />}
         errorElement={
            <Suspense>
               <ErrorPage />
            </Suspense>
         }
      >
         <Route
            index
            element={
               <Suspense fallback={renderLoader}>
                  <Agency />
               </Suspense>
            }
         />
         <Route
            path='/whoarewe'
            element={
               <Suspense fallback={renderLoader}>
                  <Whoarewe />
               </Suspense>
            }
         />
         <Route
            path='/work'
            element={
               <Suspense fallback={renderLoader}>
                  <Work />
               </Suspense>
            }
         />
         <Route
            path='/team'
            element={
               <Suspense fallback={renderLoader}>
                  <Team />
               </Suspense>
            }
         />
         <Route
            path='/localisation'
            element={
               <Suspense fallback={renderLoader}>
                  <Localisation />
               </Suspense>
            }
         />
         <Route
            path='/contact'
            element={
               <Suspense fallback={renderLoader}>
                  <Contact />
               </Suspense>
            }
         />
      </Route>
   )
);

const App = () => {
   return <RouterProvider router={router} />;
};

export default App;
