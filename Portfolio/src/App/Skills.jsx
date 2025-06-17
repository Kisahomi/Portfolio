import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import SkillsTech from './Skills/SkillsTech';
import SkillsDeve from './Skills/SkillsDeve';
import SkillsOthe from './Skills/SkillsOthe';

function Skills(){
    const [skill, setSkill] = useState('tech');
    return(
        <>
        <div className="skillsparent">
            <div className='skill-panel'>
                <div className='skill-bar'>
                <FontAwesomeIcon className='skill-icon' icon={faStar} /><p>Extension: My Skills</p>
                </div>
            </div>
            <div className='skill-content'>
                <div className='skill-card'>
                    <FontAwesomeIcon className='skill-card-icon' icon={faPerson} />
                    <div className='skill-card-content'>
                        <h2>My Skills</h2>
                        <p>Jemuel Lucas</p>
                        <p>Valuable skills in computer science.</p>
                    </div>
                </div>
                <div className='skill-content-buttons'>
                    <button className={skill === 'tech' ? 'active' : ''} onClick={() => setSkill('tech')}>TECHNICAL SKILLS</button>
                    <button className={skill === 'deve' ? 'active' : ''} onClick={() => setSkill('deve')}>DEVELOPMENT EXPERTISE</button>
                    <button className={skill === 'othe' ? 'active' : ''} onClick={() => setSkill('othe')}>OTHER STRENGTHS</button>
                </div>
                <div className='skill-main-content'>
                    {skill === 'tech' && <SkillsTech />}
                    {skill === 'deve' && <SkillsDeve />}
                    {skill === 'othe' && <SkillsOthe />}
                </div>
            </div>
        </div>
        </>
    );
}

export default Skills;