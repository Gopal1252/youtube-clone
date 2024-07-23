import React from 'react'
import Comment from './Comment'

const commentsData = [
    {
        name: "Gopal Gupta",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: []
    },
    {
        name: "Hrijul",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [
            {
                name: "Gopal Gupta",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: []
            },
            {
                name: "Dheeraj",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: []
            }

        ]
    },
    {
        name: "Gopal Gupta",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [
            {
                name: "Dheeraj",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [
                    {
                        name: "Gopal Gupta",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                        replies: [
                            {
                                name: "Dheeraj",
                                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                                replies: [
                                    {
                                        name: "Gopal Gupta",
                                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                                        replies: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Gopal Gupta",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: []
    },
    {
        name: "Gopal Gupta",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [
            {
                name: "Hrijul",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [
                    {
                        name: "Gopal Gupta",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                        replies: []
                    }
                ]
            }
        ]
    }
]

const CommentsList = ({comments}) => {
    return comments.map((comment, index) => (
        <div key={index} className='mt-5'>
            <Comment data={comment}/>
            <div className='ml-10 mt-2 border-l-2 pl-3'>
                <CommentsList comments={comment.replies}/>
            </div>
        </div>
    ))
}

const CommentsContainer = () => {
  return (
    <div className=''>
        <h1 className='text-xl font-bold'>714 Comments</h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer;
