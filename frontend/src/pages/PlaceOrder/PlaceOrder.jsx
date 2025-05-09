import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className='place-order'>
      <div className="place-order-left">
        <p className="title">Thông tin giao hàng</p>
        <div className="multi-fields">
          <input type="text" placeholder='Họ' />
          <input type="text" placeholder='Tên' />
        </div>
        <input type="text" placeholder='Địa chỉ email' />
        <input type="text" placeholder='Đường phố' />
        <div className="multi-fields">
          <input type="text" placeholder='Thành phố' />
          <input type="text" placeholder='Bang' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Mã bưu điện' />
          <input type="text" placeholder='Quốc gia' />
        </div>
        <input type="text" placeholder='Số điện thoại' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Tổng giỏ hàng</h2>
          <div>
            <div className="cart-total-details">
              <p>Tạm tính</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Phí giao hàng</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 2000}đ</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Tổng cộng</b>
              <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2000}đ</b>
            </div>
          </div>
          <button>TIẾP TỤC THANH TOÁN</button>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
