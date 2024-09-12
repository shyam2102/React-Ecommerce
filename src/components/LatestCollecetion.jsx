import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/Shopcontext'
import Title from './Title';
import ProductItem from './Productitem';


const LatestCollecetion = () => {

    const { products } = useContext(ShopContext);
    const [LatestProducts,setLatestProducts] = useState([]);

    useEffect(()=>{
      setLatestProducts(products.slice(0,10));
    },[])
    
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gary-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatum qui soluta </p>
        </div>

    {/* Rendering Products */}
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
      {
        LatestProducts.map((item,index)=>(
          <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
        ))
      }
    </div>
    </div>
  )
}

export default LatestCollecetion
