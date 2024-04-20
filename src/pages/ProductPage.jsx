import React, { useEffect } from 'react';
import Card from '../components/Card';
import { productList } from '../constants';

const ProductPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
      {productList.map((product) => (
        <section key={product.id}><Card product={product}/></section>
      ))}
    </>
  );
};

export default ProductPage;
