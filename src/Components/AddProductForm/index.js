import './styles.scss';

import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addNewProductData } from '../../Redux/actions';

class AddProductForm extends Component {

   constructor(props) {
      super(props);
      this.state = {
         product: {
            title: '',
            price: '',
            description: '',
            imageUrl: ''
         },
         imageUrl: ''
      }
   }

   render() {
      return (
        <>
          <div className="container">
            <div class="card-form">
              <form class="signup">
                <div class="form-title">Add New Product!</div>
                <div class="form-body">
                  <div class="row">
                    <input
                      type="text"
                      onChange={(e) =>
                        this.setState({product: {
                          ...this.state.product,
                          title: e.target.value,
                        }})
                      }
                      placeholder="Product Name*"
                    />
                    <input
                      type="text"
                      onChange={(e) =>
                        this.setState({product: {
                          ...this.state.product,
                          price: e.target.value,
                        }})
                      }
                      placeholder="Product Price*"
                    />
                  </div>
                  <div class="row">
                    <input
                      type="text"
                      onChange={(e) =>
                        this.setState({product: {
                          ...this.state.product,
                          description: e.target.value,
                        }})
                      }
                      placeholder="Product Description*"
                    />
                  </div>
                  <div class="row">
                    <input
                      type="text"
                     onChange={(e) => {
                        console.log(e.target.value);
                        this.setState({product: {...this.state.product, imageUrl: e.target.value}})
                     }}
                      placeholder="Product Image Url*"
                    />
                  </div>
                </div>
                <div class="rule"></div>
                <div class="form-footer">
                  <a style={{color: 'white'}} onClick={() => {
                     this.props.addItem(this.state.product);
                     console.log(this.state.product);
                     this.props.closeForm();
                  }}>
                    Add!<span class="fa fa-thumbs-o-up"></span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </>
      );
   }
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addNewProductData(item)),
});

export default connect(null, mapDispatchToProps)(AddProductForm);
