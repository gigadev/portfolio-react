import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import Services from './pages/Services';
import BuildYourOwn from './pages/BuildYourOwn';
import Navbar from './components/Navbar';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/services" element={<Services />} />
            <Route path="/build-your-own" element={<BuildYourOwn />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </main>
        <footer className="bg-gray-900 text-gray-300 px-4 py-6 text-center border-t border-gray-800">
          <div className="flex flex-wrap gap-4 justify-center mb-3 text-sm">
            <a href="https://www.linkedin.com/in/scottwshepherd/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">LinkedIn</a>
            <a href="https://www.upwork.com/freelancers/gigadev?viewMode=1" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">Upwork</a>
            <a href="https://www.freelancer.com/u/gigadev?frm=gigadev&sb=t" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">Freelancer</a>
            <a href="https://github.com/gigadev/portfolio-react" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">Fork this site</a>
          </div>
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Scott Shepherd &middot; Gigadev Consulting &middot; SaaS &amp; PWA Product Builder
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
