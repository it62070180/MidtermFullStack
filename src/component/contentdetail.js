import React,{ useEffect, useState} from "react";
import { useParams } from "react-router-dom";
// import axois from 'axios';



function Contentdetail(){
    const { contentdetailId } = useParams();
    const[post, setPost] = useState([]);
    const[author, setAuthor] = useState([]);
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(null)

    const Logsomething = () =>{
        console.log("Data is "+ post.title.rendered)
    }

    const getPostData = (id) =>{
                        // setLoading(true)
                        fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/posts/${id}`)
                        .then((res) => res.json())
                        .then((json) => setPost(json))
                        // .catch((error) => setError(error))
                        // .finally(() => setLoading(false))
    }


    useEffect(
        () => {
            getPostData(contentdetailId)
        },
        [contentdetailId],
        );

    return(
        <div  className="bg-dark fullscreen mainC">
                <div className="container my-5">
                    <div className="shadowBox">
                        <h1 className=" rainbow rainbow_text_animated ">Hello this is Content Detail Page {post.id}</h1>
                    </div>
                    <button className='btn btn-danger' type='button' onClick={Logsomething}>
                        Click me! 
                    </button>
                </div>

        </div>

    )
}

export default Contentdetail;