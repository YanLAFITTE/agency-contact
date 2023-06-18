import MainNavigation from '../components/MainNavigation';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
   return (
      <div className='layout'>
         <MainNavigation />
         <main className='layout__main'>
            <Outlet />
         </main>
      </div>
   );
};

export default RootLayout;
