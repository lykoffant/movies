import { Routes, Route, useLocation } from 'react-router-dom';

import { Layout } from './components/Layout';
import { DetailsPage } from './pages/DetailsPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { SearchPage } from './pages/SearchPage';

function getPageName(pathname: string) {
  if (/^\/\??$/.test(pathname)) {
    return '';
  }

  if (/^\/details\/.*$/.test(pathname)) {
    return 'Details';
  }

  return 'Error';
}

function App() {
  const { pathname } = useLocation();
  const pageName = getPageName(pathname);

  return (
    <Routes>
      <Route path='/' element={<Layout pageName={pageName} />}>
        <Route index element={<SearchPage />} />
        <Route path='details/:id' element={<DetailsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
