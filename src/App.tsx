import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout';

import { SearchPage } from './pages/SearchPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<SearchPage />} />
      </Route>
    </Routes>
  );
}

export default App;
