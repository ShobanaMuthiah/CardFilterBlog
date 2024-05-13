import React from 'react';
import Card from './Card';

const Ds = ({data}) => {
    return (
        <div>
                   <div>
<div className="row row-cols-sm-3 g-4 ">
        {data.map((ele,ind)=>{
              if (ele.head==='ds'){
                return(
                    <div key={ind}>
                <Card ele={ele}/>
            </div>
            )

              }
        })}
        </div>

            
        </div>
        </div>
    );
};

export default Ds;