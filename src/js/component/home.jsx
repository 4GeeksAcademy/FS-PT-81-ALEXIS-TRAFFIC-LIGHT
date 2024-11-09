import React, { useState } from 'react';
import ReactDom from 'react-dom/client';

// Create your first component
const Home = () => {
  const [color, setColor] = useState('');

  return (
	<div className='stick'>
    <div className='text-center bg-dark'>
     <div className='colors'>
		
	  <div
        className={`light red ${color === 'red' ? 'glow' : ''}`}
        onClick={() => setColor('red')}
      ></div>
	  <div 
	  className={`light bg-warning ${color === 'yellow' ?'glow' : ''}`} 
	  onClick={()=>setColor('yellow')}>

	  </div>
	  <div className={`light green ${color === 'green' ? 'glow' : ''}`}
	  onClick={()=>setColor('green')}>
		
	  </div>

	  <div 
	  className={`light purple ${color === 'purple' ?'active purple-glow' : ''}`} 
	  onClick={()=>setColor('purple')}>

	  </div>
	  </div>
	  </div>
    </div>
	
  );
};

export default Home;
const root = ReactDom.createRoot(document.querySelector('#app'));
root.render(<Home />);