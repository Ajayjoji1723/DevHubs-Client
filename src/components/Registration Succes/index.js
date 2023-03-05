import { useNavigate } from 'react-router-dom'
import './index.css'

function RegistrationSuccess (){
    let navigate = useNavigate();
    
    const onClickBtn=()=>{
        navigate('/')
    }
    return(
        <div className="res-container">
            <h1 className='res-heading'>Hello User Your Registration Has been Successfull</h1>
            <img src="https://i.pinimg.com/736x/ca/93/68/ca9368ef147aff0510e7d666a6d526a3.jpg" alt="reg-success" className="res-img"/>
            
            <button type="button" className='button btn btn-success' onClick={onClickBtn}>
                Login
            </button>
        </div>
    )
}

export default RegistrationSuccess