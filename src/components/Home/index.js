import { useNavigate,Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Header from "../Header";
import axios from "axios";

import './index.css'

function Home(){
    let naviagete = useNavigate();
    const [data,setData] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3001/allprofiles',{
            headers:{
                'x-token': localStorage.getItem('token')
            }
        })
        .then(response =>setData(response.data))
        .catch(error=>console.log(error.response.data))
    },[])

    useEffect(()=>{
        if(localStorage.getItem('token') === null){
            naviagete("/")
        }  
    })
           
    
    return(
        <>
            <div className="home-container">
                <Header/>
                <div className="profiles">
                    {data.length >= 1 ? 
                    data.map(profile=>
                        <div key={profile.email} className="profile-container">
                            <img src="https://cdn.shopify.com/s/files/1/0644/7058/1470/products/Candidateprofilemale_a4aa0739-39d4-4e40-92d9-540767fce00f.jpg?v=1661420196&width=533" alt="p-logo" className="w-25"/>
                            <h1 className="text-primary">{profile.fullname}</h1>
                            <p className="text-danger">{profile.email}</p>
                            <p className="text-info">India</p>
                            <ul className="skills">
                                {profile.skilss.split(",").map(skill=>
                                    <li className="text-success">
                                        {skill}
                                    </li>
                                    )}
                            </ul>
                            <Link to={`/indprofile/${profile.fullname}/${profile.email}/${profile.skilss}/${profile._id}`}>
                                <button type="button" className="btn btn-success">View Profile</button>
                            </Link>
                        </div>)
                    :null}
                </div>
            </div>
               
        </>
    )
}

export default Home;