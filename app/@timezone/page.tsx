
'use client'
import { delay } from '@/lib/utils'
import { AppContext } from '../AppContext';
import { useContext } from 'react';

export default  function Timezone() {
  const { flagurl,countryname } = useContext(AppContext);
  const divStyle = {
    display:"flex",

    backgroundImage: `url(${flagurl})`,
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'contain', 
    backgroundPosition: 'center', 
  };

  return (
    <div style={divStyle} className='h-96 flex-1 rounded-2xl bg-purple-800 p-5 text-black'>
      <h2 style={{background:"white", maxHeight:"30px"}} className='text-xl font-semibold'>{countryname}</h2>
    </div>
  )
}