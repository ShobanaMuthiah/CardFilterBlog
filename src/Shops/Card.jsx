import React from 'react';

const Card = ({ele}) => {
    return (
        <div>
                        
            <div className="col mt-3 ">
                <div className="card h-100">
      <img src={ele.image} width="200" height="150" className="card-img-top" alt="..."/>
        <h5 className="card-title">{ele.cont}</h5>
    </div>
  </div>
  </div>
    );
};

export default Card;