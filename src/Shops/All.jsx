import React from 'react';
import Card from './Card';

const All = ({data}) => {
    return (
        <div>
            <>
            <div className="row row-cols-sm-3 g-4 ">
{data.map((ele,ind)=>{
    return(
        <div key={ind}>
            <Card ele={ele}/>
             </div>
    )
})}
</div>
</>
        </div>
    );
};

export default All;