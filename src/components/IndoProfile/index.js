import { useState,useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import Header from '../Header'
import axios from 'axios';
import './index.css'


function IndProfile({ match }){
    const params = useParams();
    const [rating,setRating] = useState('');
    const [taskprovider,setTaskProvider] = useState(null);

    const {fullname,email,skilss,id} = (params);
    
    const onSubmitHandler = e =>{
        e.preventDefault()
        axios.get('http://localhost:3001/myprofile',{
            headers:{
                'x-token' : localStorage.getItem('token')
            }
        })
        .then(response=>setTaskProvider(response.data.fullname))
        .catch(error=>console.log(error.response.data))

        let review = {
            taskprovider,
            taskworker:id,
            rating
        }

        axios.post('http://localhost:3001/addreview', review ,{
            headers:{
                'x-token' : localStorage.getItem('token')
            }
        })
        .then(response=>alert(response.data))
        .catch(error=>console.log(error.response.data))
        setRating('')
    }


    return(
        <>
         <Header />
            <div className='my-container'>
                <img src="https://cdn.shopify.com/s/files/1/0644/7058/1470/products/Candidateprofilemale_a4aa0739-39d4-4e40-92d9-540767fce00f.jpg?v=1661420196&width=533" alt="my-profile" className='w-50'/>
                <h1 className='text-primary'>{fullname}</h1>
                <h2 className='text-danger'>{email}</h2>
                <ul className='skill-container text-primary'>
                {skilss.split(",").map(skill=>
                    <li className='skill'>
                        {skill}
                    </li>

                    )}
                </ul>
                <p className='text-primary'>India</p>
            </div>
            <div className='rating-container'>
                <h2 className='text-primary'>Reviews and Rating</h2>
                <form onSubmit={onSubmitHandler} className="form">
                    <label className='label'>Enter Your Review</label>
                    <input type='text' 
                        placeholder="Enter rating out 5"
                        value={rating} 
                        onChange={(e)=>setRating(e.target.value)}
                        required 
                    />
                    <button type='submit' className='btn btn-success mt-2'>Add Review</button>
                </form>
            </div>
    </>
    )
}

export default IndProfile