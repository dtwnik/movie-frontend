
import { useEffect, useState } from 'react';
import photo from '../assets/img/icon.png'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isAuth, setIsAuth] = useState(false)
  const [username, setUsername] = useState("")
  let timerId;
  const navigate = useNavigate()


  const checkY = () => {
    if (window.scrollY > 0) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const trottleFunction = (delay) => {
    if (timerId) {
      return;
    }
    timerId = setTimeout(function () {
      checkY();
      timerId = undefined;
    }, delay);
  };
  const Logout = () => {
    const isSure = window.confirm("Вы уверены?")
    if (isSure) {
      localStorage.removeItem("id")
      localStorage.removeItem("username")
      localStorage.removeItem("token")
      setIsAuth(false)
      setUsername("")
      navigate('/')
    }

  }
  useEffect(() => {
    const id = localStorage.getItem("id")
    const login = localStorage.getItem("username")
    setUsername(login)
    if (id && login) {
      setIsAuth(true)
    }
    window.addEventListener("scroll", trottleFunction);
    return () => {
      window.removeEventListener("scroll", trottleFunction);
    };
  }, []);
  return (
    <div>
      <header className={isActive ? 'shadow' : ''}>
        <a href="/" class="logo">
          <img src={photo} height='30px' width='30px' /><span>Movies</span>
        </a>
        <div class="bx bx-menu" id="menu-icon"></div>
        <ul class="navbar">
          <li><a href="/#home" class="navitem">Главная</a></li>
          <li><a href="/#movies" class="navitem">Фильмы</a></li>
          <li><a href="/#theatr" class="navitem">Театры</a></li>
          <li><a href="/#coming" class="navitem">Ожидаемые фильмы</a></li>
        </ul>
        <ul>
          {isAuth ? <div className='dropdown'>
            <div className='dropbtn'>{username}</div>
            <div className='dropdown-content'>
              <Link to={'/ticket/'} className="ssylki">Мой билеты</Link>
              <div onClick={Logout} className="ssylki">Выйти</div>
            </div>
          </div> :
            <><Link to={'/login/'} className="btn">Авторизоваться</Link>
              <Link to={'/register/'} class="btn register">Зарегистрироваться</Link></>}
        </ul>
      </header>
    </div>
  );
}

export default Header;