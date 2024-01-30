import React, {useState} from 'react';
import Helmet from '../components/Helmet/Helmet'
import {Container, Row,Col, FormGroup} from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css'
// import {signInWithEmailAndPassword} from "firebase/signInSuccess"
// import {signInSuccess} from '../firebase.config'
import {toast} from 'react-toastify'
import { Form ,useActionData} from 'react-router-dom';
import {loginUser} from '../utils/getAuth'
import Spinner from '../components/Spinner'
import {useDispatch, useSelector} from 'react-redux'
import { signInSuccess ,getAunthentication} from '../redux/slices/loginSlice';


export async function action({request}){
  const formData= await request.formData()
  const username=formData.get("username")
  const password=formData.get("password")
  
  
  try {
    const res=await loginUser({username, password})
    toast.success("login successful")
    return res
  } catch (error) {
    return toast.error(error.message)
  }
}


const Login = () => {

  const navigate=useNavigate()
  const token = useActionData()
  const dispatch= useDispatch()
  const authentication=useSelector(getAunthentication)
  
  
  if(!authentication){
    dispatch(signInSuccess({token:token}))
  }else{
    navigate("/")
  }
  

  
 
 
  return <Helmet title="Login">
    <Container>
      <Row>
      {
        <Spinner/>?(<Col lg="6" className='m-auto text-center mb-5'>
            <h3 className='mb-4 fw-bold'>Login</h3>
            <Form method='post' replace>
              <FormGroup className='form__group'>
                <input type="text" 
                placeholder='Enter your name' 
                 name="username"
                />
              </FormGroup>
              <FormGroup className='form__group'>
                <input type="password" 
                placeholder='Enter your password' 
                name="password"
                />
              </FormGroup>
              <button type='submit' className="buy__btn auth__btn">Login</button>
              <p>Don't have an account ?<Link to='/signup'>create account</Link></p>
            </Form>
        </Col>): ""
      }
        
      </Row>
    </Container>
  </Helmet>
}

export default Login;
