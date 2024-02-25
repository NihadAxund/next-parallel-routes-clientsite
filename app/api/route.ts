import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export const GET = async (req: Request,res: Response)=>{
    console.log("////////////////////////////////////////////////////////////////////////////////");
    const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags');
    let data = await response.json();
    //console.log(data);
    return NextResponse.json({data},{status:200})
}
