import './App.css'
import Introduction from './Introduction';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Sidebar from './Sidebar';

export default function App() {
  return (
    <div className="main-container">
      <Sidebar />
      <div className="content">
        <section id="introduction"><Introduction /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="education"><Education /></section>
      </div>
    </div>
  );
}
