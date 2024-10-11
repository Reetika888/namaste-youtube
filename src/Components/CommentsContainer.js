import React from "react";

const commentsData = [
    {
        name: "Reetika Rani",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
        replies: [
          {
            name: "Reetika Rani",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
          }
        ],
    },
    {
        name: "Reetika Rani",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
        replies: [
            {
                name: "Reetika Rani",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
            },{
                name: "Reetika Rani",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
            }

        ],
    },
    {
        name: "Reetika Rani",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
        replies: [
            {
                name: "Reetika Rani",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
            }
        ],
    },
    {
        name: "Reetika Rani",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        replies: [
           {
              name: "Reetika Rani",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
              replies: [
                  {
                     name: "Reetika Rani",
                     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
                     replies: [
                    ],
                 }
               ],
           },

        ], 
    },
    {
        name: "Reetika Rani",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
        replies: [
        
            {
                name: "Reetika Rani",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
            }
        ],
    }
]

const Comment = ({data})=> {
    const {name,text,replies} = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
    <img 
    className="w-8 h-8"
    src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
    alt="user" />
    <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
    </div>
    </div>
  )
}


const CommentsList = ({comments})=> {
  return  comments?.map((comment,index)=> (
  <div>
  <Comment key={index} data={comment} />
     <div className="pl-5 border border-l-black ml-5">
      <CommentsList key={index} comments={comment.replies}  />
     </div>
  </div>
  ));
};

const CommentsContainer = ()=> {
    return (
        <div className="p-2 m-5">
            <h1 className="text-2xl font-bold">Comments :</h1>
            {/* <Comment data={commentsData[0]} /> */}
            <CommentsList comments={commentsData}/>
        </div>
    )
}

export default CommentsContainer;

