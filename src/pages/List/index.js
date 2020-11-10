
import React, { useEffect, useState } from "react";
import List from "./components/List";

const Index = props => {
    let races = props.searchResults
   
console.log(races)
     
    return (
        <div>
            <h1>List Tech</h1>
            <List  races={races} />
        </div>
      
    );
}
export default Index;