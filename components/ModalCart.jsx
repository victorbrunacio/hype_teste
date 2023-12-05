import useCartContext from "@/context/useCartContext"
import useUserContext from "@/context/useUserContext"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { IoCloseCircleOutline } from "react-icons/io5";


const ModalCart = ({setModal}) => {
  const {account} = useUserContext()
  const router = useRouter()
  const handlerCheckout = () => {
    console.log(account)
    if(account.length) {
      return toast.success(`Checkout efetuado com sucesso. Obrigado pela compra ${account[0].username}! `, {
        position: 'bottom-center'
      }) 
    }
  }
  const handlerCrateAccount = () => {
    router.push('/register')
    setModal(false)
  }

  return (
    <div className="modal-box flex flex-col justify-between absolute top-14 right-8 h-[30rem] z-40 
    max-md:fixed max-md:top-0 max-md:z-50
    ">
      <h3 className="text-lg font-bold ml-[10rem] underline
      max-md:ml-[7rem]
      ">Produtos</h3>
      <SectionItemModal />
     {account.length ? (
        <button className='btn btn-primary' onClick={handlerCheckout}>Finalizar Compra.</button>
     ): (
        <button className='btn btn-primary' onClick={handlerCrateAccount }>Criar conta para prosseguir</button>
     )}
    </div>
  )
}

export default ModalCart

const SectionItemModal = () => {
  const { cart, removeProduct } = useCartContext()
  return (
    <>
    {cart.map((item, index) => (
      <div key={index} className="flex gap-5 shadow-lg w-full">
        <img src={item.imgUrl} alt={item.name} height={80} width={80} className="rounded-2xl"/>
        <div>
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <span>Valor: {item.price}</span>
        <p>Quantidade: {item.quantity}</p>
        </div>
        <button className="absolute right-5 text-red-600 text-[1.7rem]" onClick={() => removeProduct(item.id)}><IoCloseCircleOutline /></button>
      </div>
    ))}
    </>
  )
}
