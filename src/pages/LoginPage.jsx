import '../css/AuthPage.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const onRegister = async (e) => {
        e.preventDefault()
        if (username !== "" && password !== "") {
            try {
                const data = await axios.post(
                    'https://movie-drf-backend.herokuapp.com/api/auth/',
                    { username: username, password: password }
                )
                alert("Вы успешно авторизовались")
                localStorage.setItem("id", data.data.id)
                localStorage.setItem("username", username)
                localStorage.setItem("token", data.data.token)
                navigate('/')
            }
            catch (e) {
                alert("Имя пользователя или пароль введен неправильно")
            }
        }
    }
        return (
            <div className='body'>
                <div className='auth'>
                    <form action='' className='form'>
                        <h2>ВОЙТИ</h2>
                        <input type="text" name='username' class="field" placeholder='Введите Имя пользователя' onChange={(e) => setUsername(e.target.value)}></input>
                        <input type="password" name='password' className='field' placeholder='Введите пароль' onChange={(e) => setPassword(e.target.value)}></input>
                        <input type="submit" value="ВОЙТИ" id='submit' onClick={onRegister}></input>
                        <Link to={""} className="link">Забыли пароль?</Link>
                        <Link to={"/register/"} className="link">Зарегистрироваться</Link>
                    </form>
                    <div className='side'>
                        <img src='https://media.istockphoto.com/vectors/retro-cinema-retro-film-projector-vector-id963851942?k=20&m=963851942&s=612x612&w=0&h=FVY1oF0EZFX5mhr3k_Vi0qV2S7GT_I5jsS9hIJoZ8KI='></img>
                    </div>
                </div>
            </div>
        );
    }

    export default LoginPage;