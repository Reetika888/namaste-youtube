import { useEffect, useRef, useState } from "react";
const Demo2 = ()=> {

    const [y,setY] = useState(0);
    let x = 10;
    const ref = useRef(0);

    const  i = useRef(null);
    useEffect(()=>{
        if(i.current) return ;
       i.current =  setInterval(()=>{console.log("Namaste React",Math.random())},1000);

    //   return  ()=>{clearInterval(i.current)}
    },[]);

    return (
        <div className="m-4 p-2 bg-slate-50 border border-black-200 w-96 h-96">
            <div>
                <button className="bg-green-300 rounded px-2 m-4" onClick={()=>{
                    x = x+1;
                    console.log("x",x)
                }}>Increase x</button>
                <span className="font-bold text-xl">Let = {x}</span>
            </div>
            <div>
                <button className="bg-green-300 rounded px-2 m-4" onClick={()=>{
                    setY(y+1);

                    console.log("x",x)
                }}>Increase y</button>
                <span className="font-bold text-xl">State = {y}</span>
            </div>
            <div>
                <button className="bg-green-300 rounded px-2 m-4" onClick={()=>{
                    ref.current = ref.current + 1;
                    console.log("ref",ref)
                }}> ref</button>
                <span className="font-bold text-xl">ref = {ref.current}</span>
            </div>
            <button className="bg-red-500 p-2 m-4 text-white font-bold rounded-lg" onClick={()=>{
                clearInterval(i.current);
            }}>Stop Printing</button>
        </div>
    )
}

export default Demo2;