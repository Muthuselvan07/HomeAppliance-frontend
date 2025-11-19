
function Cards(){

    const arr = [
        {
            title:"card no 1",
            image:"../assets/1.jpg",
            content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        },
        {
            name:"card no 2",
            image:"../assets/2.webp",
             content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        },
        {
           name:"card no 2",
            image:"../assets/3.jpg",
             content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." 
        },
    ]
 return(
    <div className="Cards-container" style={{position:"relative",display:"flex",}}>
        {arr.map((item, index) => (
            <div className="Cards" key={index} style={{}}>
                <h2>{item.name}</h2>
                <img src={item.image} alt="" />
                <p>{item.content}</p>
                <button>know more</button>
            </div>
       ) )}
    </div>
 );
}
export default Cards;
