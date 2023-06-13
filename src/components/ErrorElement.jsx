import { Link } from 'react-router-dom';

const ErrorElement = () => {
   return (
      <main className='error-container'>
         <h1>404</h1>
         <p>
            <span>Oups! La page que</span>{' '}
            <span>vous demandez n{"'"}existe pas.</span>
         </p>
         <Link to='/' className='error-container__link'>
            Retourner sur la page d{"'"}accueil
         </Link>
      </main>
   );
};

export default ErrorElement;
