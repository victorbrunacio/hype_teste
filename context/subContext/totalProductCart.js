import useCartContext from '@/context/useCartContext';

const TotalProductsCart = () => {
  const { cart } = useCartContext() ;

  const cartTotal = cart.reduce((acc, item) => {
    return acc + item.quantity
  }, 0)
  return (
    <span>
      {cartTotal}
    </span>
  )
}

export default TotalProductsCart