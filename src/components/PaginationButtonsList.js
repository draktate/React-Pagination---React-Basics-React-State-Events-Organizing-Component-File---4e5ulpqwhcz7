import React,{useState,useRef, useEffect} from 'react';
const PaginationButtonsList = (props) => 
{
    const setPageNo=props.setPageNo;
    const ref = useRef();

    let [buttonList, setButtonList] = useState([]);
    let [pageNumber, setPageNumber] =useState(1);
    
    useEffect(()=> 
    {
        ref.current = pageNumber;

    },[pageNumber])

    const handleClick=(event) =>{
        

        //xelement= document.getElementById("button-"+prevButtonPressed);
        //xelement.className="";
        
        //event.persist();
        
        document.getElementById("button-"+ref.current).className="";
        setPageNumber(event.target.name);
        setPageNo(event.target.name);
        event.target.className="active-btn";
        //prevButtonPressedID=event.target.id;

        
    };

    const pageButtons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((item) =>
    <button type="button" name={item} key={item} id={"button-"+item} onClick={handleClick} className= {item==1?"active-btn":""}  >Page{item} </button> );

    //console.log("buttons:",pageButtons);



    return (
                
        <div className="pagination-buttons-list">
            {pageButtons}
            
        </div>
    )
}

export { PaginationButtonsList }