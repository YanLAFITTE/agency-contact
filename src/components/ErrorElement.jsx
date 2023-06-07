import { Link } from 'react-router-dom';

const ErrorElement = () => {
   return (
      <main className='error-container'>
         <h1 className='error-title'>404</h1>
         <p className='error-paragraph'>
            <span>Oups! La page que</span>{' '}
            <span>vous demandez n'existe pas.</span>
         </p>
         <Link to='/' className='error-link'>
            Retourner sur la page d'accueil
         </Link>
      </main>
   );
};

export default ErrorElement;
