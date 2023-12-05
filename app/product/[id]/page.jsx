"use client"
import { useParams } from "next/navigation"
import { products } from "@/data/data";
import Image from "next/image";
import BuyButton from "@/components/BuyButton";
import FavoriteButton from "@/components/FavoriteButton";


const page = () => {
    const { id } = useParams();
    const selectedProduct = (id) => {
        return products.find((product) => {
            return product.id == id
        })
    }
    const product = selectedProduct(id)

    return (
        <section className="flex items-center justify-center w-full h-full mb-[14rem]
        ">
            <div className="flex relative  items-center justify-center gap-10  mt-[10rem]
             max-md:flex-col
            ">
                <FavoriteButton idItem={product.id} stylesAdd="text-[5rem]" />
                <Image src={product.imgUrl} alt="imagem do produto" width={500} height={500} />
                <div className="flex flex-col gap-10">
                    <h2 className="text-3xl font-bold ">{product.name}</h2>
                    <p className="break-words w-[10rem] h-[10rem] overflow-auto
                   max-md:w-[15rem]">{product.desc}</p>
                    <p className="font-semibold  max-md:text-lg">Valor: R$ {product.price}</p>
                    <BuyButton product={product} />
                </div>
            </div>

        </section>
    )
}

export default page

