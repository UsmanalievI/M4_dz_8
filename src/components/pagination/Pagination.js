import React from "react";
import classes from "./pagination.module.css";
import { useState } from "react";

const Pagination=({handleNext, currentPage, handlePrev})=>{
    
    const [page, setPage] = useState(currentPage); 
    const handleChangePage = (event) => {
        const newPage = parseInt(event.target.value);
        if (!isNaN(newPage)) {
            setPage(newPage);
        }
    };

    return (
        <div className={classes.pagination}>
            <p onClick={handlePrev}>Prev</p> 
            <input type="text" value={page} onChange={handleChangePage}/>
            <p onClick={handleNext}>Next</p>
        </div>
               
        
    )
}
export default Pagination;
