import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


export default function Display() {
    const data = useSelector(state => state.products)
    console.log('data from display component', data)
    const { id } = useParams();
    const [user, setUser] = useState({})


    const navigate = useNavigate();

    useEffect(() => {
        const userData = data.find((user) => user.id === parseInt(id));
        console.log('useeffect inner', userData)
        if (userData) {
            setUser(userData);
        }

    }, [id]);

    function handleClick() {
        navigate('/profilenames');

    }
    return (
        <>
            <center>
                <h1>Display component</h1>
                {/* <div>{data}</div> */}

                <div key={user.id} className='container'>
                    <div className='card col-md-6 m-auto'>
                        <div className='card-body'>
                            Name:{user.name}<br />
                            userName:{user.username}<br />
                            emailID:{user.email}<br />
                            PhoneNum:{user.phone}<br />
                            Website:{user.website}
                        </div>
                    </div>
                    <button className="btn btn-primary" style={{ marginLeft: "45%", marginTop: '3%' }} onClick={handleClick}>Back to Profiles</button>
                </div>

            </center>
        </>
    )
}
