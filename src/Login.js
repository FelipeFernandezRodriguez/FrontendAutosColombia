import axios from 'axios';
import React, { useState } from 'react';
import Validation from './LoginValidation';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };    

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = Validation(values);
        setErrors(validationErrors);
    
        if (!validationErrors.email && !validationErrors.password) {
            axios.post('http://localhost:8081/login', values)
                .then(res => {
                    if (res.data === 'Success') {
                        navigate('/home');
                    } else {
                        alert("Usuario o contraseña incorrecta");
                    }
                })
                .catch(err => console.log(err));
        }
    };
    

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Correo</strong></label>
                        <input type="email" placeholder='Ingrese correo' name='email'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.email && <span className= 'text-danger'> {errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Contraseña</strong></label>
                        <input type="password" placeholder='Ingrese contraseña' name='password'
                        onChange={handleInput}className='form-control rounded-0'/>
                        {errors.password && <span className= 'text-danger'> {errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Iniciar sesión</button>
                </form>
            </div>
        </div>
    )
}

export default Login