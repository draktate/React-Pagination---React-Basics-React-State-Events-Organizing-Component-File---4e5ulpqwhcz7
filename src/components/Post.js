import React from 'react'
const Post = (props) => {

    const data=props.data;
    //console.log("data:",data);
    return (
        <div className="post">
            <h3>{data.title} </h3>
            <p> {data.body} </p>

        </div>
    )
}

export { Post }