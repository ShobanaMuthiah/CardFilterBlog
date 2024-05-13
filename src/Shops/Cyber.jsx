import React, { useState } from 'react';
import Card from './Card';

const Cyber = ({data}) => {
    return (
        <div>
<div className="row row-cols-sm-3 g-4 ">
        {data.map((ele)=>{
              if (ele.head==='cyber'){
                return(
                <Card ele={ele}/>
            )

              }
        })}
        </div>

            
        </div>
    );
};

export default Cyber;