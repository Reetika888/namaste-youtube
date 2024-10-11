import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = ()=> {
    const [LiveMessage,setLiveMessage] = useState("");
    const chatMessages = useSelector( (store) => store.chat.messages);
     const dispatch = useDispatch();
    useEffect(()=>
    {
       const i =  setInterval(()=>{
            // Api / Long Polling
            console.log("Good time to test");
            dispatch(addMessage({
                name: generateRandomName(),
                message:makeRandomMessage(7) + "🚀"
            }))
         },2000);

        return ()=>{clearInterval(i)};

    },[]);

    return (
        <>
        <div className="ml-2 w-full h-[600px] p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
          <div >  { chatMessages.map((c,index)=>
               <ChatMessage key={index} name={c.name} message={c.message} />
            )}
            </div>
        </div>

        <form className="w-full p-2 ml-2 border border-black flex" onSubmit={(e)=>{
                 e.preventDefault();
                 dispatch(addMessage({
                    name: "Akshay",
                    message:LiveMessage
                 }));
                 setLiveMessage("");
        }}>
            <input className="w-full px-2" type="text" value={LiveMessage}  onChange={(e)=>{
                 setLiveMessage(e.target.value);
            }}/>
            <button className="px-2 mx-4 bg-green-100">Send</button>
        </form>
        </>
    )
}

export default LiveChat;