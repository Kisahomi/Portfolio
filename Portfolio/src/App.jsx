import './App.css';
import Introduction from './App/Introduction';
import Skills from './App/Skills';
import Projects from './App/Projects';
import Education from './App/Education';
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/messages')
      .then(response => setMessages(response.data))
      .catch(error => console.error('Error fetching messages:', error));
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Adjust based on when to trigger (e.g., 0.6 = 60% visible)
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="main-container">
      <Sidebar active={activeSection} />
      <div className="content">
        <section id="introduction"><Introduction /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="education"><Education /></section>
      </div>
    </div>
  );
}
