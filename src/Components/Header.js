import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice"

const Header = ()=> {
    const [searchQuery,setSearchQuery] = useState("");
    const [suggestions,setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchCache = useSelector((store)=>store.search);
    const dispatch = useDispatch();

    // {
    //     "iphone" : ["iphone11","iphone12","iph"]
    // }
    // searchQuery = "iphone"

    const toggleMenuHandler = ()=> {
      dispatch(toggleMenu());
    }
   
    useEffect(()=>{
        // API Call

        // make an api call after every key press
        //  but if the difference between 2 api calls is less than 200ms
        //  decline api call
      const timer =  setTimeout(()=>{
        if(searchCache[searchQuery]) {
            setSuggestions(searchCache[searchQuery])
        } else {

       getSearchSuggestions();
        }
       
    },200);

      return ()=>{
        clearTimeout(timer);
      };

    },[searchQuery]);


    //  key => i
    //  -  render the component
    //  -  useEffect()
    //  -  start timer => amke api call after 200ms

    //  key => iP
    //  -  destroy the component(useEffect return method)
    //  -  rerenders the component
    //  -  useEffect()
    //  -  start new timer => amke api call after 200ms

    const getSearchSuggestions = async ()=> {
        const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);
        dispatch(cacheResults({
            [searchQuery] :  json[1],
        }));
    }

    return (
        <div className="grid grid-flow-col p-5 m-2 shadow">
            <div className="flex col-span-1">
                <img className="h-8 cursor-pointer" alt="menu" onClick={()=>toggleMenuHandler()} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAABLS0vPz8+Wlpb29vZfX1+RkZHDw8M3Nzc0NDSCgoLU1NSkpKSFhYX8/Pzg4ODx8fF1dXUaGhqrq6vq6uq6uroXFxdmZmaxsbELCwtYWFgdHR2fn589PT3KyspxcXFEREQoKCh7e3tGlryJAAACdElEQVR4nO3d7VLCMBCF4QiUDxHLp4iIgN7/PWoHHfXPJm0ys7Pb97mCc6ZTStI0CQEAAAAAAAAAAAAAAAAA/Kunk/HAjvFkWrfqt/u4s+djl15woh22o0liv2qmnbSzWZVUcK+dM8M+peK9dsos9/GCc+2MmeaxgkvthNmWkYbP2gGzPcsFV9r5CliJDQ/a8Qo4iA3X2vEKWIsNbT8qbuQHxot2vAJexIba6YoQG2600xWwERseteMVcBQbWh03/SWPoR604xXwIDZ0cCO+ygXDQjtgtkWkofmLGLuE9u/EyF3Y2GpnzLKNFwzhpJ0ywymlYAhT7ZydTdMKhlDZHEStk+YSv+1Gb9p5W5qNWkx539TLoR3Ldm8tAAAAAAAAAACAKfV5MbJjcW7z3qnxNNB+l9Ta4KlFv+G7dtxO3s+pBR+1o3b2mFZwrJ0zwzil4EU7ZZZLvKD1ld7yKu8vlXbCbLHHht1fmR+RX5taO18B8qIFu4uFfsnLhqx/19WQv+26ascr4Co29PC9xV5sqJ2uiJ5fw6t2vALk+9DDb6n8yPf/PPT/n8b//9IejC38jw97MMbvwTyN5V+bxLm2HsyXBv9z3g3v7y0AAAAAAAAAAIAhzveJ8r7Xl9H92i7J75/sLhtK3HPP/b6J7ve+9L9/qfs9aP3vI2z9EkYv4lA7XwHyneh/T3b/++rbvw1jZyNopytCbOjhewv5jBL/58zYHDb9J58VZH2Vd0Ne6e3/zC7/56714Ow88992Rc8/tP7ASDjDsgfnkIbK2lTpr7SzZIPdMVTqecChB2c6h+ZzC9/ncgMAAAAAAAAAAAAAAACATZ8gAVacgh1jCwAAAABJRU5ErkJggg==" />
                <a href="/">
                <img  className="h-8 mx-2" alt="youtube-logo" src="data:image/jpeg;base64,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"/>
                </a>
            </div>
            <div className="col-span-10 px-10">
                <div>
                <input className="w-1/2 px-5 py-2 border border-gray-400 rounded-l-full" type="text" 
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
                onFocus={()=>setShowSuggestions(true)}
                onBlur={()=>setShowSuggestions(false)}
                />
                <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">💭</button>
            </div>
            {  showSuggestions && suggestions.length > 0 && <div className="fixed bg-white px-2 py-2 w-[28rem] shadow-lg rounded-lg border border-100">
                {/* Make it responsive  */}
              <ul>
     
                 { suggestions.map((suggestion)=>(
                      <li className="py-2 px-3 shadow-sm hover:bg-gray-100" key={suggestion}>💭 {suggestion}</li>
                 )) }


                    {/* <li className="py-2 px-3 shadow-sm hover:bg-gray-100">💭 Iphone</li>
                    <li className="py-2 px-3 shadow-sm  hover:bg-gray-100">💭 Ihpne pro</li>
                    <li className="py-2 px-3 shadow-sm  hover:bg-gray-100">💭 Iphone pro m</li>
                    <li className="py-2 px-3 shadow-sm  hover:bg-gray-100">💭 Iphone pro max</li> */}
                </ul>
            </div> }
            </div>
            <div className="col-span-1">
                <img className="h-8" alt="user-icon" src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" />
            </div>
        </div>
    )
}

export default Header;