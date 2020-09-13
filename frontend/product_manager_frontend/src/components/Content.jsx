import React from 'react'

function Content(props) {
    const { data } = props;
    return (
        <div className="col-md-4">
            <div className="card text-left mb-5">
                <img className="card-img-top" src={data.image} alt="" />
                <div className="card-body">
                    <h5 className="card-title float-left">{data.product_name}</h5>
                    <h5 className="card-text float-right">{data.product_price}</h5>
                </div>
            </div>
        </div>
    )
}

export default Content
