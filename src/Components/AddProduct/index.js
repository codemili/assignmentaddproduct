import React, {useState} from 'react';
import AddProductForm from '../AddProductForm';
import './styles.scss';

export default function AddProduct() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="container">
      <a href="#openModal-about" className="addBtn">Add Product</a>
      <div id="openModal-about" class="modalDialog">
        <div>
          <a href="#close" title="Close" class="close">
            X
          </a>
            <AddProductForm closeForm={() => window.location.href='#close'}/>
        </div>
      </div>
    </div>
  );
}
