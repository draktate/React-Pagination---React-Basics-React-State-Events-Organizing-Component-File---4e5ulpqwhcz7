import React,{useState, useEffect} from 'react';
import {PaginationButtonsList} from "./PaginationButtonsList"

import {Post} from "./Post";

const PostList = () => 
{
    const [pageNo, setPageNo] = useState(1);
    const [data, setData] = useState([]);
    const [pageList, setPageList] = useState("");
    const [pageButtenList, setPageButtenList] = useState();
    
    useEffect(() => 
    {
        setPageButtenList(null);
        console.log("loading page:"+ pageNo);
        let postUrl='https://jsonplaceholder.typicode.com/posts?_page='+pageNo+'&_limit=5';
        fetch(postUrl)
        .then((response) => response.json())
        .then((data) => {setData(data); 
            const posts = data.map((item) =>
            <Post key={item.id} data={item}>
            </Post> );
            setPageList(posts);
            })
        .then(()=>{
            let PBL= <PaginationButtonsList setPageNo={setPageNo}>
            </PaginationButtonsList>;

            setPageButtenList(PBL);
    

        })
        .catch((err)=> {alert(err.message); });

        setPageList(<div id="loader"> <h1> loading..   </h1> </div>);
        

        
    }, [pageNo]); 


    


    return (
    <>
        <div>
        {pageList}
        </div>

         {pageButtenList}   
    </>
    )
}

export { PostList }