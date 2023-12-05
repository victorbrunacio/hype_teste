import useCartContext from '@/context/useCartContext';
import React from 'react'
import toast from 'react-hot-toast';

const BuyButton = ({ product }) => {
  const { addProduct, cart, total } = useCartContext() ;

  const handleAddToCart = () => {
    addProduct(
      {
        ...product,
        quantity: 1
      }
    )
    console.log(cart)
    console.log(total)
    return toast.success("Adicionado ao carrinho!", {
      position:"bottom-center"
    })
  }
  return (
    <button className='btn btn-primary' onClick={handleAddToCart}>
      Add Cart
    </button>
  )
}

export default BuyButton