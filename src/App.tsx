import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ProjectsPage from '@/pages/ProjectsPage';
import GamesPage from '@/pages/GamesPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/tools" element={<div className="p-8"><h1 className="text-3xl">Tools Page Coming Soon</h1></div>} />
          <Route path="/contact" element={<div className="p-8"><h1 className="text-3xl">Contact Page Coming Soon</h1></div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
