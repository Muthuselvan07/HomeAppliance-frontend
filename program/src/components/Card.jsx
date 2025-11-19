 import alien from '../assets/3.jpg';
function Card(){
   
    return(
        <div className="card">

            <h1>card title</h1>
            <img src={alien} />
            <p>this is a simple card component</p>
        </div>
    );
}
export default Card;