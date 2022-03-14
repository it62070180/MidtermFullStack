import React,{ useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axois from 'axios';
import CommentPosts from "./commentPost";


var obj;
function Contentdetail(){
    const { contentdetailId } = useParams();
    const[post, setPost] = useState([]);
    const[author, setAuthor] = useState([]);

    const Logsomething = () =>{
        console.log("1 Data is "+ post._links.author[0].href)
        console.log("2 Author is " + author.name)
        console.log(obj._links.author[0].href)
    }

    const getPostData = (id) =>{
                        fetch(
                            `https://fswd-wp.devnss.com/wp-json/wp/v2/posts/${id}`
                        )
                        .then((res) => res.json())
                        .then(data => obj = data)
                        .then((json) => setPost(json))
                        .then(() => getAuthor(obj._links.author[0].href))                   
    }

    const getAuthor = async (href) => {
        const data = await axois.get(href);
        setAuthor(data.data);
    }

    useEffect(
        () => {
            getPostData(contentdetailId)
        },
        [contentdetailId],
        );

        const Card = () => {
            const isBlack  = Object.keys(post).length === 0;
            if (!isBlack) {
              return (
                <div>
                  <div
                    className="py-4 px-5"
                    style={{
                      backgroundColor: "#0E0C0C",
                      color: "white",
                    }}
                  >
                    <div className="row">
                      <div className="col-10 fs-3">{post.title.rendered}</div>
                      <div className="col-2 text-end fs-5 mt-1">
                        Author: <Link to={'/author/'}  style={{  color: "red" }} > {author.name} </Link>
                      </div>
                    </div>
                  </div>
                  <div className="py-3" style={{ backgroundColor: "#263B3C" }}></div>
                  <div
                    className="post-content text-white p-5"
                    style={{ backgroundColor: "#0E0C0C" }}
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                  ></div>
                </div>
              );
            } else {
              return <></>;
            }
          };


    return(
        <div  className="fullscreen main"
        style={{ overflow: "auto", backgroundColor:"#263B3C"}}>
                <div className="container my-5">
                    <div className="shadowBox">
                        <h1 className=" rainbow rainbow_text_animated ">Hello this is Content Detail Page {post.id}</h1>
                    </div>
                    <button className='btn btn-danger' type='button' onClick={Logsomething}>
                        Click me! 
                    </button>
                    <Card/>
                </div>
            <div className="bg-light-grey p-3">
                <CommentPosts postId={contentdetailId} />
            </div>
        </div>

    )
}

export default Contentdetail;