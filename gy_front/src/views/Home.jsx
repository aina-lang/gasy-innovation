import React from 'react'
import Landing from '../components/Landing';
import TutorielCarrousel from '../components/TutorielCarrousel';

function Home() {
  return (
    <div className='min-w-full'>
     <Landing/>
     <TutorielCarrousel/>
    </div>
  )
}

export default Home;
