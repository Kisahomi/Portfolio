import './Introduction.css';
import { useState } from 'react';


function Introduction() {
  const [terminal, setTerminal] = useState('about');
  

  return(
   <>   
   <div class="introparent">
    <div class="introdiv1">
      <div>
        <h1>
          <span class="colorgray">&lt;</span><span class="colorblue">div</span><span class="colorgray">&gt;</span>
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span class="colorgray">&lt;</span><span class="colorblue">h1</span><span class="colorgray">&gt;</span>
          <span class="colorwhite">Portfolio</span>
          <span class="colorgray">&lt;/</span><span class="colorblue">h1</span><span class="colorgray">&gt;</span>
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span class="colorgray">&lt;</span><span class="colorblue">h2</span><span class="colorgray">&gt;</span>
          <span class="colorwhite">Lucas Jemuel</span>
          <span class="colorgray">&lt;/</span><span class="colorblue">h2</span><span class="colorgray">&gt;</span>
          <br/>
          <span class="colorgray">&lt;/</span><span class="colorblue">div</span><span class="colorgray">&gt;</span>
        </h1>
      </div>
    </div>
    <div class="introdiv2"> 
    <div className='about'>
      <div className="about-buttons">
        <button className={terminal === 'about' ? 'active' : '' } onClick={() => setTerminal('about')}>ABOUT</button>
        <button className={terminal === 'background' ? 'active' : '' } onClick={() => setTerminal('background')}>BACKGROUND</button>
        <button className={terminal === 'contact' ? 'active' : '' } onClick={() => setTerminal('contact')}>CONTACT</button>
      </div>
      <div className='terminalContent'>
      <p>PS C:\Users\Administrator\Desktop\womp&gt; {terminal === 'about' &&  <span style={{color:'yellow'}}>Hi, I'm Jemuel Lucas an aspiring Computer Science student. I created this website to showcase my skills and to show my passion for programming.</span>}
        {terminal === 'background' && <span style={{color:'yellow'}}>I am 21 years old and currently resides at Quezon City, Philippines.</span>}
        {terminal === 'contact' &&  <span style={{color:'yellow'}}>Email: magnemite72@gmail.com Facebook: Jemuel Cancio Lucas</span>}
        </p>
      </div>
    </div>
    </div>
  </div>
        
          

          
         
        

   </>
  );
}

export default Introduction