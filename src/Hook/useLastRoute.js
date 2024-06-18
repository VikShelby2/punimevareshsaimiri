import { useLocation } from 'react-router-dom';

const useLastRoute = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const segments = pathname.split('/').filter(Boolean);
  return segments.length > 0 ? segments[segments.length - 1] : '';
};

export default useLastRoute;
