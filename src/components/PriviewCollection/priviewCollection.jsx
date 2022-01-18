import React from 'react';
import './priview.collection.css';

//component
import Collactiontems from '../ShopComponets/collection-items/Collaction.items';
import CardDropDown from '../Cart/Cart-drop-down/CardDropDown';

function PriviewCollection(props) {
    
   
    return (
        <>
        
        <div className='collection-preview'>
        
            <h1>{props.title}</h1>
            <div className='preview'>
            
             {
                 props.items.filter((item,idx)=>idx<4).map((items)=>(
                     <Collactiontems key={items.id}{...items}/>
                 ))
             }
             
            </div>
        </div>
        </>
    )
}

export default PriviewCollection;
