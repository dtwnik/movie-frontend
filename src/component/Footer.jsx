import photo from '../assets/img/icon.png'
import insta from '../assets/img/insta.png'
import github from '../assets/img/github.png'
import youtube from '../assets/img/youtube.png'

const Footer = () => {
    return (
        <div>
            <footer>
                <a href="#" class="logo">
                    <img src={photo} height='30px' width='30px' /><span>Movies</span>
                </a>
                <div class="social">
                    <a href="https://www.instagram.com/it_college/"><img src={insta} alt="" height='50px' width='50px' /></a>
                    <a href="https://github.com/dtwnik"><img src={github} alt="" height='50px' width='50px' /></a>
                    <a href="https://www.youtube.com/"><img src={youtube} alt="" height='50px' width='50px' /></a>
                </div>
            </footer>
            <div class="copyright">
                <p>&#169; Сайт создан Ерболом. Все права не защищены</p>
            </div>
        </div>
    );
}

export default Footer;