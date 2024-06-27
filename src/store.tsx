import {configureStore} from '@reduxjs/toolkit'
import cartreducer from './features/cart/cartSlice'
import modalreducer from './features/modal/modalSlice'
export const store = configureStore({
  reducer:{
    cart:cartreducer,
    modal:modalreducer
  }
})