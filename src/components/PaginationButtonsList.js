import React,{useState,useRef, useEffect} from 'react';
const PaginationButtonsList = (props) => 
{
    const setPageNo=props.setPageNo;
    const ref = useRef();

    const [buttonList, setButtonList] = useState([]);
    const [pageNumber, setPageNumber] =useState(1);

    
    useEffect(()=> 
    {
        console.log("PaginationButtonsList:useEffect");

        const pageButtons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((item) =>
        <button type="button" name={item} key={item} id={"button-"+item} onClick={handleClick} className= {item==props.pageNo?"active-btn":""}  >Page{item} </button> );


        setButtonList(pageButtons);
        
        ref.current = pageNumber;

    },[props.setPageNo])

    const handleClick=(event) =>{
        
        setPageNo(event.target.name);
        
    };


    //console.log("buttons:",pageButtons);



    return (
                
        <div className="pagination-buttons-list">
            {buttonList}
        </div>
    )
}

export { PaginationButtonsList }