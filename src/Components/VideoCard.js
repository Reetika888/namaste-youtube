import React from "react";
const VideoCard = ({info}) => {
     const {snippet,statistics} = info;
     const {thumbnails,channelTitle,title} = snippet;
     const {viewCount} = statistics;
    
    return (
         <div className="p-2 m-2 w-72">
                     <img  className="rounded-lg" src={thumbnails?.medium?.url} alt="video" />
                      <ul>
                        <li className="font-bold py-2">{title}</li>
                        <li>{channelTitle}</li>
                        <li>{viewCount} <views></views></li>
                      </ul>
                 </div>
    )
}

export const AdVideoCard = ({info,index}) => {
   return <div className="p-1 m-1 border border-red-400">  <VideoCard key={index} info={info}/> </div>
}

export default VideoCard;