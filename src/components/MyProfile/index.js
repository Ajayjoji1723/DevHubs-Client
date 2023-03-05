import { useState,useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import Header from '../Header'
import axios from 'axios';
import './index.css'


function MyProfile(){
    let naviagete = useNavigate();
    const [data,setData] = useState([]);
    const [review, setReview] = useState(null)


    useEffect(()=>{
        axios.get('https://devhubs-server.onrender.com/myprofile',{
            headers:{
                'x-token': localStorage.getItem('token')
            }
        })
        .then(response =>setData(response.data))
        .catch(error=>console.log(error.response.data))

        axios.get('https://devhubs-server.onrender.com/myreview',{
            headers:{
                'x-token': localStorage.getItem('token')
            }
        })
        .then(response =>setReview(response.data))
        .catch(error=>console.log(error.response.data))
    },[])

    useEffect(()=>{
        if(localStorage.getItem('token') === null){
            naviagete("/")
        }  
    })

    console.log(review)

    return(
        <>
         <Header />
        <div className='pro-container'>
            {data && 
                <div className='my-container'>
                    <img src="https://cdn.shopify.com/s/files/1/0644/7058/1470/products/Candidateprofilemale_a4aa0739-39d4-4e40-92d9-540767fce00f.jpg?v=1661420196&width=533" alt="my-profile" className='w-50'/>
                    <h1 className='fullname'>{data.fullname}</h1>
                    <p className='text-danger'>{data.email}</p>
                    <p className='text-secondary'>India</p>
                    <p className='text-primary'>{data.skilss}</p>   
                </div>
             }
             <div className='rating-container'>
                <h2 className='text-primary'>Reviews and Rating</h2>
                {review && 
                    review.map(eachReview=>
                        <div className='review' key={review._id}>
                            <h3 className='text-secondary'>{eachReview.taskprovider}</h3>
                            <p className='success'>{eachReview.rating}/5</p>
                        </div>)
                }
             </div>
        </div>
    </>
    )
}

export default MyProfile