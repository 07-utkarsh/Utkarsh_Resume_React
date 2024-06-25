


import './Techstack.css';
import Techstackicon from './Techstackicon/Techstackicon';
import {techstackRowOne,techstackRowTwo} from '../../constants'
function Techstack(){
 

    return (
        <div className='techstack_container'>
            <p className='techstack_title'>TechStack</p>
            <div className='techstack_icon_container'>
                {
                    techstackRowOne.map(function(element,index){
                        console.log('t is : ',element)
                        console.log('i is : ',index)
                        return(
                            <Techstackicon 
                            key={element.iconName}
                            title={element.iconName}
                            altProperty={element.iconAltProperty}
                            image={element.iconImage}
                            
                            />
                        )
                    })
                }
               
            </div>
            <div className='techstack_icon_container'>
                {
                    techstackRowTwo.map(function(element,index){
                        console.log('t is : ',element)
                        console.log('i is : ',index)
                        return(
                            <Techstackicon 
                            key={element.iconName}
                            title={element.iconName}
                            altProperty={element.iconAltProperty}
                            image={element.iconImage}
                            
                            />
                        )
                    })
                }
               
            </div>
        </div>
    )
}
export default Techstack;
