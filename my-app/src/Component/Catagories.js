import React, {useState} from 'react'
import category from './category'
//import ReactDOM from "react-dom";
function Catagories(){
      
        const [data,setData]= useState(category);
        const filterResult=(catItem)=>{
          const result=category.filter((curData)=>{
            return curData.category===catItem;
          });
          setData(result);
        }
  return (
    <>
        <h1 className='text-center text-info'> let's Shop</h1>
        <div className='container-fluid mx-2'></div>
        <div className='row mt-5 mx-2'>
         <div className='col-md-3'>

         </div>

          <button className='btn btn-primary wid-100 mb-4' onClick={()=> filterResult('men')}> Men</button>
          <button className='btn btn-primary wid-100 mb-4' onClick={()=> filterResult('women')}> Women</button>
          <button className='btn btn-primary wid-100 mb-4' onClick={()=> filterResult('Children')}> Children</button>
          <button className='btn btn-primary wid-100 mb-4' onClick={()=> filterResult('Black')}> Black</button>
          <button className='btn btn-primary wid-100 mb-4' onClick={()=> filterResult('white')}> white</button>
          <button className='btn btn-primary wid-100 mb-4' onClick={()=> setData(category)}> All  </button>

         <div className='col-md-9'>
              <div className='row'>
                   {data.map((values)=>{
                    const {id, title, price, image}=values;
                      return(
                        <>
                        <div className='col-md--4  mb-4 ' key={id} />

                        <div className='col-md--4  mb-4 '>
                        
                        <div class="card">
                         <img src={image} class="card-img-top" alt="..."/>
                         <div class="card-body">
                           <h5 class="card-title"> {title} </h5> 
                            <p> price {price}  </p>
                           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           <button class="btn btn-dark"> Buy now </button>
                         </div>
                         </div>
     
               
     
                        </div>

                        </>
                      )
                   }
                  
                   )}
                  

              </div>
          </div> 
        
        </div>
    </>
  )
}

export default Catagories;