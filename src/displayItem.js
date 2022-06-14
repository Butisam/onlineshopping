const DisplayItem = ({addItem}) => {
  return (
    <div className="list">
        <div className="itemList">
            {addItem.map((Item)=>{

                return(

                    <div className="cardid" key={Item.id}>
                             <div className="name-div"><p className="name">{Item.name}</p></div>
                             <div className="id-div"><p className="id">{Item.Price}</p></div>
                            <div className="pic-div"><img src={require(`./pictures/${Item.picture}`)} alt={Item.name}/></div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default DisplayItem