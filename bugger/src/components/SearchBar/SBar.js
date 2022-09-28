import { React, useState } from "react";
import TextField from "@mui/material/TextField";

import List from "./List";

// import Footer from './Footer';
// import Header from './Header';


function SearchBar() {



    const [inputText, setInputText] = useState("");
    const inputHandler = (e) => {
        
        // i might change it to uppercase
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return( 
        <div className="main cover-container float-md ">
           
            <div className=" showRows search">
            <TextField 
            id="filled-basic"
            onChange= {inputHandler}
            variant="filled"
            fullWidth
            label="Search Bugs"
            />
            </div>

        <List input={inputText} />
        
        </div>
    );
}



export default SearchBar;