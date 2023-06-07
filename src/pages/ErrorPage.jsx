import MainNavigation from '../components/MainNavigation';
import ErrorElement from '../components/ErrorElement';

/**
 *
 * @returns  error page
 */

/** When exceptions are thrown in loaders the error path is render and the error is available with "useRouteError" */

const ErrorPage = () => {
   return (
      <>
         <MainNavigation />
         <ErrorElement />
      </>
   );
};

export default ErrorPage;
