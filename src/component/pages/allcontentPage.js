import React from 'react';
import { useState , useEffect } from "react"
import { Link } from "react-router-dom";
import { posts , categories } from '../url.js'

export default function Allcontent(){

    const [post, setPost] = useState([]);


    const [category, setCategory] = useState([]);
    const [categorySelect, setCategorySelect] = useState(-1);


    const CategortButton = () => {
        return category.map((val)=>{
            return (
                <button type="radio" key={`ctg-${ val.id }`} className="btn btn-outline-warning me-2" 
                onClick={() => {
                    if (categorySelect !== val.id) {
                        setCategorySelect(val.id);
                    } else {
                        setCategorySelect(-1)
                    }
                }}
                >
                    {val.name}
                </button>
            );
        });
    };


    useEffect(
        () => {
            fetch(posts
            ).then((res) => res.json())
            .then((json) => setPost(json))
            fetch(categories
            ).then((res) => res.json())
            .then((json) => setCategory(json))

        },
        [],
        )
    const PostDate = (props) => {
        let dateStr = new Date(props.date);
        let value = dateStr.toDateString();
        return <span className="date">{value}</span>;
    };


const PostCard = () => {
    return post.map((val) => {
        if ((categorySelect === -1 || val.categories.includes(categorySelect)))
        return(
            <div className='col-6' key={`pst-${ val.id }`} >
            <Link to={`/Contentdetail/${val.id}`} style={{ 
                textDecoration: "none",
                }} >
                    <div className="card border-primary m-2 text-dark">
                        <div className="card-body " style={{height:'100px'}}>
                            <h4 className="card-title">{val.title.rendered}</h4>
                        </div>
                            <div className='card-footer'>
                                <p className='card-text'>
                                    <PostDate date={val.date}/>
                                </p>
                            </div>
                    </div>
            </Link>
            </div>  
        );
        return(<></>)
    });
}
return (
    <div className="bg-dark fullscreen main"
    style={{ overflow: "auto"}}>
        <div className="container my-5">
                 <div className='shadowBox' >
                    <h1 className='rainbow rainbow_text_animated'>Hello this is All Content Page </h1>
                </div>
                <div className="row pt-2">
                    <div className='col-1 fw-bold text-white'>
                        <p>Category</p>
                    </div>
                </div>
                
                <div className="rounded-3 ">
                    <div className='bgimg p-5'>
                    <CategortButton/>
                    </div>
                </div>
                <div className='row py-3'>
                    <PostCard/>
                </div>
        </div>
    </div>
    );
}