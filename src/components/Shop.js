import '../styles/App.css';



import cat from '../images/cat.png';
import dog from '../images/dog.png';
import eagle from '../images/eagle.png';
import elephant from '../images/elephant.png';
import tiger from '../images/tiger.png';




const Shop=(props)=>{
  // cart


  //product parameters

  const productArray=[
    //
    {name:'Cat',price:100,image:cat,id:0},
    {name:'Dog',price:100,image:dog,id:1},
    {name:'Eagle',price:100,image:eagle,id:2},
    {name:'Elephant',price:100,image:elephant,id:3},
    {name:'Tiger',price:100,image:tiger,id:4},
  ]
 

  
  
  return (
        <div className="App-content">
            {productArray.map((product)=>
            <div className="product" key={product.id}>
                <img src={product.image} className="shop-image"/>
                <div className="sub-image">
                <div>{product.name}</div>
                <div>{product.price}</div>
                <button onClick={props.addCart}>Add to cart</button>
                </div>
            </div>
            )}
   
        </div>

  );
};
export default Shop;