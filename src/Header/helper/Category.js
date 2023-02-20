import React from "react";
import { NavLink } from "react-router-dom";

export default function Category(props){
    return(
        <div className="col-lg-6 col-md-4 mt-2 mb-2 text-center ">
            <div className="card">
                <div className="card-body bg-warning text-white text-wrap text-capitalize">
                    <NavLink to={`/products/${props.value}`} className='btn'>{props.value}</NavLink>
                </div>
            </div>
        </div>
    )
}