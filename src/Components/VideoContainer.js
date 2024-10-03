import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = ()=>{
    const [videos,setVideos] = useState([]);

    const getVideos = async() => {
        const data =  await fetch(YOUTUBE_VIDEOS);
        const json =  await data.json();
        setVideos(json.items); 
      }

    useEffect(()=>{
        getVideos();
    },[]);

    
 return (
    <div className="flex flex-wrap">
       { videos[0] && <AdVideoCard info = {videos[0]} />
       }
        {
            videos.map((item)=>(
               <Link to={"/watch?v="+item.id}> <div key={item.id}><VideoCard info = {item}/></div>
               </Link>
            ))
        }
        
    </div>
 )
};

export default VideoContainer;