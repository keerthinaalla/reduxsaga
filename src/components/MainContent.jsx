import React from 'react'
import { useDispatch } from 'react-redux'
import productList from '../newredux/productActionNew';
// import { useSelector } from 'react-redux'

import { NavLink } from "react-router-dom";

export default function mainContent() {
    const dispatch = useDispatch()
    // const data = useSelector((state) => state.show)
    // console.log(data)
    return (
        <div>
            <center>
                <h1>MainContent</h1>

                <button className='btn btn-primary' onClick={() => dispatch(productList())}><NavLink to='/profilenames' className="text-white">Get Profile Names</NavLink></button>
            </center>

        </div>
    )
}
