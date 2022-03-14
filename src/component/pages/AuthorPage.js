import axios from "axios";
import { useEffect, useState } from "react";

export default function Author (){
   const [author, setAuthor] = useState([]);

   const getAuthor = async (id) =>{
       const data = await axios.get(
           `https://fswd-wp.devnss.com/wp-json/wp/v2/users/`
       );
       setAuthor(data.data);
   };
   useEffect(
       () => {
           getAuthor()
       },
       [],
   )

       return (
           <div className="bg-dark fullscreen main">
                <div className="container">
                     <div className="row" style={{justifyContent: "center"}}>
                         {
                             author.map(user => {
                                 return (
                                     <div className="col-6 md-4" key={user.id}>
                                         <div className="card bg-secondary" style={{justifyContent: "center",width: "18rem;"}}>
                                             <div className="text-center">
                                                 <img src={user.avatar_urls[96]} style={{width:'80%'}}  className="card-img-top" alt=" "/>
                                             </div>
                                             <div className="card-body">
                                                <h3 className="card-title">{user.id} </h3>
                                              <h4>Name :{user.name}</h4><br></br>
                                              <h4>slug :{user.slug}</h4>
                                             </div>
                                                
                                         </div>
                                     </div>
                                     
                                 )
                             })
                         }
                     </div>
                 </div>
           </div>
       )

   
};