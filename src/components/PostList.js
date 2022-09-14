import React,{useState, useEffect} from 'react';
import {PaginationButtonsList} from "./PaginationButtonsList"

import {Post} from "./Post";

const PostList = () => 
{
    const [pageNo, setPageNo] = useState(1);
    const [data, setData] = useState([]);
    const [pageList, setPageList] = useState("");
    
    useEffect(() => 
    {
        let postUrl='https://jsonplaceholder.typicode.com/posts?_page='+pageNo+'&_limit=5';
        fetch(postUrl)
        .then((response) => response.json())
        .then((data) => {setData(data); 
            const posts = data.map((item) =>
            <Post key={item.id} data={item}>
            </Post> );
            setPageList(posts);})
        .catch((err)=> {alert(err.message); });

        setPageList(<div id="loader"> loading </div>);

        
    }, [pageNo]); 


    return (
    <>
        
        {pageList}

        <PaginationButtonsList setPageNo={setPageNo}>
            
        </PaginationButtonsList>
    </>
    )
}

export { PostList }