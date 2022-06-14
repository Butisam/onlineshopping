import './App.css';
import Item from './Data';
import ItemCard from './itemCard';
import cart from './cartItems'
import DisplayItem from './displayItem';



function App() {

  const Items  = Item;
  const addItem = [];
  for (let index = 0; Items< Items.length; index++) {
    if(localStorage.getItem(Items[index].name))
    {
      addItem.push(JSON.parse(localStorage.getItem(Items[index].name)))

    }
    
  }
  console.log(addItem);
  const click1 = (id) => {
    for (let index = 0; index < Items.length; index++) {
      
      if(id===Items[index].id){

        localStorage.setItem(Items[index].name,JSON.stringify(Items[index]));
        window.location.reload();
      }
      
    }
  };
console.log(addItem)

  return (
    <div className='maincontainer'>
      
      <div className='rightcontainer'>
       <h1>items 1</h1>
      <div className='ItemCon'><ItemCard Items ={Item} click1={click1}/> </div>
      </div >
       


      <div className='leftcontainer'>
        <h1>item 2</h1>
        <DisplayItem addItem={addItem}/>
      </div>
     
    </div>
  );
}

export default App;
