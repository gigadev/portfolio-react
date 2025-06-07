import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ReactUsage from './pages/ReactUsage';
import Navbar from './components/Navbar';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/react-usage" element={<ReactUsage />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          &copy; {new Date().getFullYear()} Scott Shepherd
        </footer>
      </div>
    </Router>
  );
}

export default App;
