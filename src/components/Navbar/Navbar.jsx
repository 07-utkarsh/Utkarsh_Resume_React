import './Navbar.css';
import { navOptions } from '../../constants';
import us from '../../assets/us.jpg';



function NavOption(props){
    return <p>{props.navItem}</p>;
}
function Navbar(){
    return (
        <div className='navbar_container'>
            <div className='navbar_left'>
                <img className='uslogo' src={us} alt="USICON" />

            </div>
            <div className='navbar_right'>
                {navOptions.map(function(item,index){
                    return <NavOption key={item} navItem={item}>S</NavOption>
                })}
            </div>
        </div>
    )
}
export default Navbar;