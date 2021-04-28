import React from 'react'
import './styles.scss'

export default function ProductCard({item}) {
   return (
     <>
       <div class="shop-card">
         <div class="title">{item.title}</div>
         <div class="desc">{item.description}</div>
         <div class="slider">
           <figure data-color="#E24938, #A30F22">
             {/* <img src="http://www.supah.it/dribbble/012/1.jpg" /> */}
             <img src={item.imageUrl} />
           </figure>
         </div>

         <div class="cta">
           <div class="price">{item.price}</div>
           <button class="btn">
             Add to cart<span class="bg"></span>
           </button>
         </div>
       </div>
       <div class="bg"></div>

       <a class="the-most" target="_blank"></a>
     </>
   );
}
