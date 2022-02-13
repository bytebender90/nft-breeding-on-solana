import React, { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import withStyles from './styles';

const Loader = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/script.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <canvas id='particle'></canvas>
      <div className='loading'>
        <div className='loading-text'>
          <span className='loading-text-words'>L</span>
          <span className='loading-text-words'>O</span>
          <span className='loading-text-words'>A</span>
          <span className='loading-text-words'>D</span>
          <span className='loading-text-words'>I</span>
          <span className='loading-text-words'>N</span>
          <span className='loading-text-words'>G</span>
        </div>
      </div>
    </>
  );
};

export default withStyles(Loader);
