import './Homepage.css';
import githubIcon from '../../assets/github.png'

function Homepage() {
    return (
        <div className='homepage_container'>
            <div className='homepage_left'>
                <p className='homepage_left_h1'>
                    <span className='red_color'>Hi,</span> my name is ....
                </p>
                <p className='homepage_left_h2'>Utkarsh Sharma</p>
                <p className='homepage_left_h3'>Developer At <span className='red_color'>Lpu</span></p>
                <p className='homepage_left_description'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente nisi fugit placeat, quia adipisci, earum saepe pariatur sint alias reiciendis dolores. Fuga vero quos commodi magni itaque consequuntur corporis ad minus perferendis velit, fugit iste, fugiat aut atque earum beatae temporibus aperiam. Dolore nihil nostrum vel hic possimus expedita tempora, enim in unde earum, alias iste. Cum eveniet eaque nihil!
                </p>
                <div>
                    <a href="#" target='_blank'>
                        <img src={githubIcon} 
                        alt="GITHUB"
                        className='homepage_logo'
                        
                        />
                    </a>
                </div>
                <a href="mailto:abc@gmail.com">
                    <button className='homepage_left_button'>Get In Touch</button>
                </a>

            </div>
            <div className='homepage_right'>
                <img src="https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif" alt="GIF" />
            </div>
        </div>
    )
}
export default Homepage;