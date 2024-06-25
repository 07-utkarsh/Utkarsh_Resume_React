 import './Techstackicon.css';


export default function Techstackicon(props){
    console.log('props',props);
    return (
        <div className='techstack_icons'>
                    <img src={props.image} alt={props.altproperty}/>
                    <p>{props.title}</p>
                </div>
    )
}