"use client"
import {useState} from "react"
import { BsCart3 } from "react-icons/bs";
import ModalCart from "./ModalCart";
import TotalProductsCart from "@/context/subContext/totalProductCart";

const CartButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
    <button className="btn btn-circle" onClick={() => setIsModalOpen(!isModalOpen)}>
      <BsCart3 />
      {TotalProductsCart}
    </button>
    {isModalOpen && <ModalCart setModal={setIsModalOpen} /> }
    </>
  )
}

export default CartButton

