'use client'
import React, { createContext } from "react";

type AppContextType ={
    flagurl:any;
    countryname: String;
    ChangeFlag: (flag:any)=> any;
};


const AppContext = createContext<AppContextType>({flagurl:"",countryname:"", ChangeFlag: (flag: any)=>{ return }});

export { AppContext };