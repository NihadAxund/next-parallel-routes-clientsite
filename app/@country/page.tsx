"use client"
//Nihad
import { delay } from '@/lib/utils'

import { AppContext } from '../AppContext';
import { useContext,useEffect,useState } from 'react';

async function  getData() {

  const response = await fetch('http://localhost:3000/api');
  let data = await response.json();
  return data.data;
}


export default  function Country() {
  const { flagurl ,ChangeFlag } = useContext(AppContext);
  const [countrylist, setcountrylist] = useState([]);

  useEffect(()=>{
    async function fun(){
      let list = await getData();
      if(list){
        setcountrylist(list);
        console.log(list[1]);
        ChangeFlag(list[0]);
      }
    }
    fun();
  },[])

  async function handleclick(flag:any){

      ChangeFlag(flag);
  }



  return (
    <div className='h-96 flex-1 rounded-2xl bg-pink-800 p-5 text-white overflow-y-auto'>
      <ul>
        {countrylist.map((country: any, index) => (
          <li onClick={(()=> handleclick(country))}
            key={index} className="hover:bg-pink-900 cursor-pointer m-3 p-2" >
            {country?.name.common}
          </li>
        ))}
      </ul>
    </div>
  );
}