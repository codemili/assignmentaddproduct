import React from 'react';
import {useSelector} from 'react-redux';
import AddProduct from '../../Components/AddProduct';
import ProductCard from '../../Components/ProductCard';
import './styles.scss';
export default function Home() {
  const data = useSelector((state) => state.shop);

  return (
    <>
      <div className="top-bar">
        <AddProduct />
      </div>
      <div class="row">
        {data.length
          ? data.map((item) => (
              <div class="column">
                <ProductCard item={item.item} />
              </div>
            ))
          : null}
      </div>
    </>
  );
}
