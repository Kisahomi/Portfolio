import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Projects(){
    const [folderOpen, setFolder] = useState(false);
    const [openFiles, setOpenFiles] = useState([]);
    const [activeFile, setActiveFile] = useState(null);

    const toggleFolder = () => {
        setFolder(!folderOpen);
    }
    const handleFileClick = (filename) => {
        if (!openFiles.includes(filename)) {
          setOpenFiles([...openFiles, filename]);
        }
        setActiveFile(filename);
      };
      
    const closeFile = (filename) => {
        const updatedFiles = openFiles.filter(file => file !== filename);
        setOpenFiles(openFiles.filter(file => file !== filename));
        if (activeFile === filename) {
            setActiveFile(updatedFiles[updatedFiles.length - 1] || null);
        }
    };

        
    return(
        <>
        <div class="projectsparent">
            <div class="projectsdiv1"> 
                <div className='panel-heading'>
                    <p>EXPLORER</p>
                </div>
                <div className={`projects-folder ${folderOpen ? 'open' : ''}`}> 
                    <div className='folder-heading' onClick={toggleFolder}>
                        <FontAwesomeIcon style={{fontSize:'16px', transform: folderOpen ? 'rotate(90deg)' : 'rotate(0deg)'}}icon={faChevronRight} /> 
                        <h4>PORTFOLIO</h4></div>
                        
                        {folderOpen && (
                            <div className='sub-folder'>
                                <ul>
                                    <li  className={activeFile === 'CompE-Learn.jsx' ? 'active-li' : ''} onClick={() => handleFileClick('CompE-Learn.jsx')}> <img src='/reactlogo.png' style={{width:'16px', height:'16px'}}></img>CompE-Learn.jsx</li>
                                    <li  className={activeFile === 'Testing.jsx' ? 'active-li' : ''} onClick={() => handleFileClick('Testing.jsx')}> <img src='/reactlogo.png' style={{width:'16px', height:'16px'}}></img>Testing.jsx</li>
                                </ul>
                            </div>
                        )}
                </div>
            </div>
            <div class="projectsdiv2"> 
                <div className='code-panel'>
                {openFiles.map((file, index) => (
                    <div  className={`file-bar ${activeFile === file ? 'active' : ''}`} key={index} onClick={() => setActiveFile(file)}>
                        <p><img src='/reactlogo.png' style={{width:'16px', height:'16px'}}></img>{file}</p>
                        <button className="close-button" onClick={(e) => {e.stopPropagation(); closeFile(file);}}><FontAwesomeIcon style={{fontSize:'12px'}} icon={faX} /></button>
                    </div>
                    ))}
                </div>
                <div className='code-content'>
                    {activeFile === 'CompE-Learn.jsx' && <p>This is CompE-Learn.jsx content.</p>}
                    {activeFile === 'Testing.jsx' && <p>This is Testing.jsx content.</p>}
                </div>
            </div>
        </div>
        </>
    );
}

export default Projects;