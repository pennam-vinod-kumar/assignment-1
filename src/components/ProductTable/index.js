import React from 'react';
import './index.css'
const ProductTable = () => {
  const products = [
    { productName: <div><h1>Abstract 3D</h1><p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</p></div>, stack: '32', price: '$45.99', totalPrice: 20 },
    { productName: <div><h1>Sarphens illustration</h1><p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</p></div>, stack: '32', price: '$45.99', totalPrice: 20 },
  ]

  return (
     <div className='table-bg'>
      <div className='table-header'>
        <p>Product Name</p>
        <div className='table-header2'>
          <p className='stack'>Stack</p>
          <p className='price'>Price</p>
          <p>Total Sales</p>
        </div>
      </div>
      <hr/>
      <div>
        {products.map(each=>
          <div className='items'>
            {each.productName}
            <div className='table-header2'>
              <p className='stack2'>{each.stack}</p>
              <p className='price2'>{each.price}</p>
              <p>{each.totalPrice}</p>
            </div>
          </div>)}
      </div>
     </div>
    
  );
};

export default ProductTable;

