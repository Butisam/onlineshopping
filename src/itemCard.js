import './itemCard.css'


 const ItemCard = ({Items,click1})=>{

 return(

 <div className="items">
 {Items.map((Item)=>{
  
 return(
        <div className='card' key={Item.id} onClick={()=>click1(Item.id)}>
        <div className="name-div"><p className="name">{Item.name}</p></div>
        <div className="id-div"><p className="id">{Item.Price}</p></div>
         <div className="pic-div"><img src={require(`./pictures/${Item.picture}`)} alt={Item.name}/></div>
        </div>


 )
 })};

 </div>


 )

 }
export default ItemCard;


