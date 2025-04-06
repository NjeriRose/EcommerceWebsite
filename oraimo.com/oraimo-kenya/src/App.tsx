import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import OfflineIndicator from './components/ui/OfflineIndicator';
import { registerServiceWorker } from './utils/registerServiceWorker';

const App = () => {
  useEffect(() => {
    // Register service worker on initial render
    registerServiceWorker();
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <OfflineIndicator />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Other routes will be added here */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
