import React from 'react';
import Card from './Card';

const Fsd = ({data}) => {
    return (
        <div className="row row-cols-sm-3 g-4 ">
        {data.map((ele)=>{
              if (ele.head==='fsd'){
                return(
                <Card ele={ele}/>
            )

              }
        })}
        </div>
        
    );
};

export default Fsd;