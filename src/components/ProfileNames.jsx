import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'


export default function ProfileNames() {
    const data = useSelector((state) => state.products)
    return (
        <div>
            <center>
                <h1>Profile Names:</h1>
                {
                    data.map((item) => {
                        return (
                            <div key={item.id} className='mt-3'>
                                profileName: <span className='text-danger'>{item.name} </span><button className='btn btn-primary ms-3'><NavLink className="text-white" to={`/display/${item.id}`}>get {item.name} details</NavLink></button>
                            </div>
                        )
                    })
                }
            </center >
        </div >
    )
}
