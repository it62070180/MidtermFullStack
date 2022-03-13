import { useEffect, useState } from "react";
import axios from "axios";
import { PostAPI } from '../PostAPI'

export default function CommentPosts(props) {
    const postId = props.postId;
    const [comment, setComment] = useState([]);
    const [newComment, setNewComment] = useState([]);

    const addComment = () => {
      PostAPI(props.postId, "Test999", newComment).then((response) => {
        setNewComment(response)
    })
    setNewComment("")
    };
    
    const CommentDate = (props) => {
        let dateStr = new Date(props.date);
        let value = dateStr.toDateString();
        return <span className="date">{value}</span>;
    };

    const CommentPost = () => {
        return comment.map((val, index) => {
          return (
            <div
              className="d-flex flex-row mt-3  border-bottom border-2"
              key={postId + index}
            >
              <div className="px-3 py-1">
                <img
                  className="rounded-circle"
                  src={
                    val.author_avatar_urls[48] !== ""
                      ? `${val.author_avatar_urls[48]}`
                      : "https://i.imgur.com/uIgDDDd.jpg"
                  }
                  alt="user"
                  width="50"
                />
              </div>
              <div className="comment-text m-2">
                <h4>{val.author_name}</h4>

                <p
                  className="mt-2"
                  dangerouslySetInnerHTML={{ __html: val.content.rendered }}
                />
                <div className="comment-footer">
                  <CommentDate date={val.date} />
                </div>
              </div>
            </div>
          );
        });
      };

    const getCommentData = async (id) => {
        const data = await axios.get(
          `https://fswd-wp.devnss.com/wp-json/wp/v2/comments`
        );
        const dataComment = data.data.filter((val) => {
          return val.post === parseInt(id);
        });
        // console.log(dataComment)
        setComment(dataComment);
    };

    useEffect(()=>{
        getCommentData(postId);
    },[postId])

    return (
        <div className="container">
        <div className="bg-black p-5 mb-5">
          <h2>Comment</h2>
          <div className="d-flex flex-row border-bottom border-3 mt-4 pb-4 px-2">
            <img
              className="rounded-circle"
              src="https://secure.gravatar.com/avatar/45ac6cf88a576c262383415f81b4ac1c?s=48&d=mm&r=g"
              alt="user"
              width="50"
            />
            <input
              type="text"
              className="form-control mx-3"
              placeholder="Add comment"
              value={newComment}
              onChange={(event) => setNewComment(event.target.value)}
              onKeyPress={(event) => {
                if (event.key === 'Enter'){
                  addComment()
                }
              }}
            />
            <button className="btn btn-warning" type="button" onClick={addComment}>
              Comment
            </button>
          </div>
          <CommentPost />
        </div>
      </div>
    )
}