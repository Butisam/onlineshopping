import './cartItems.css';
import React from 'react';

const cart =({Items,click1})=>{

    return(

        <div className='cartList'>
            <div className='items'>
                {Items.map((Item)=>{

                return(

                    <div className="cardid" key={Item.id} onClick={()=>click1(Item.id)}>
                    <div className="name-div"><p className="name">{Item.name}</p></div>
                    <div className="id-div"><p className="id">{Item.Price}</p></div>
                   <div className="pic-div"><img src={require(`./pictures/${Item.picture}`)} alt={Item.name}/></div>
           </div>
                ) 


                })

                }


            </div>

        </div>
    )
}
export default cart;
