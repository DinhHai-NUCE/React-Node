import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewItem } from '../actions/add';

function AddItem() {
    const newItem = useSelector(state => state.item);
    const dispatch = useDispatch();

    const handleAddButton = (event) => {
        const { product_name, product_price, image } = newItem;
        axios.post('/add', { product_name, product_price, image }).then((response) => {
            const action = addNewItem(newItem)
            dispatch(action)
        }).catch((err) => {

        });
    }

    const getProductName = (event) => {
        newItem.product_name = event.target.value
    }
    const getProductPrice = (event) => {
        newItem.product_price = event.target.value
    }
    const getProductImage = (event) => {
        newItem.image = event.target.value
    }

    return (
        <div className="container">
            <div className="row">
                <form className="mx-auto col-md-8">
                    <div className="form-group">
                        <label htmlFor="product_name">Tên sản phẩm</label>
                        <input onChange={getProductName} type="text" name="product_name" id="product_name" className="form-control" placeholder="Nhập tên" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="product_price">Giá sản phẩm</label>
                        <input onChange={getProductPrice} type="text" name="product_price" id="product_price" className="form-control" placeholder="Nhập giá" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Ảnh</label>
                        <input onChange={getProductImage} type="text" name="image" id="image" className="form-control" placeholder="Nhập ảnh" aria-describedby="helpId" />
                    </div>
                    <button onClick={(event) => handleAddButton(event)} type="submit" className="btn btn-primary">Thêm mới</button>
                </form>
            </div>
        </div>
    )
}

export default AddItem
