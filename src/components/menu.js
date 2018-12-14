import React from 'react';
import '../styles/menu.css';



function Menu(props){
	return(
        
		<div className="Menu">
           {props.children}
	    </div>
	)
}


export default Menu;


