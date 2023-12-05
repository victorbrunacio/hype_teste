"use client";
import { useState, useEffect } from 'react';
import { products } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import useUserContext from '@/context/useUserContext';

const ProductList = () => {

  //favoritos
  const { favorites } = useUserContext();

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const[isFavorite, setIsFavorite] = useState(true);

  const handleFavoriteClick = () => {
    setSearchResults(favorites);
    setIsFavorite(!isFavorite);
  }

  //input de busca
  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  //reseta o input de busca
  const handleResetSearch = () => {
    setSearchTerm('');
    setSearchResults(products);
    setIsFavorite(!isFavorite);
  }

  return (
    <section className="flex flex-col items-center justify-center h-[70rem] w-full mt-14
    max-md:h-full max-md:gap-[5rem]
    ">
      <h1 className="font-bold text-3xl mt-[9rem] mb-5 underline
     max-md:mt-[4rem] 
      ">Lista de Produtos</h1>
      <div className="flex flex-col w-full
      max-md:gap-[5rem] max-md:items-center">
        <div className="absolute left-[4rem] top-[10rem]
         max-md:static
        ">
          <label htmlFor="search" className='text-lg font-semibold'>Pesquisar Produto:</label>
          <input type="text" id="search" value={searchTerm} onChange={handleSearchChange} className='input input-bordered input-sm w-full max-w-[12rem]'/>
        </div>
        <div className=" absolute left-[4rem] top-[20rem]
        max-md:static
        "> 
          {isFavorite ? (
          <button className="font-extrabold text-lg btn btn-outline" onClick={handleFavoriteClick}>Favoritos</button>
        ): (
          <button className="font-extrabold text-lg btn btn-outline" onClick={handleResetSearch}>Todos</button>
        )}

        </div>
       
      </div>

      <div className="flex  flex-wrap items-center justify-center w-[80rem] h-full  gap-10  mb-[13rem]
      max-md:flex-col 
      ">
          
      {!searchResults.length? (
        <span>Nenhum produto encontrado</span>
      ): (
        searchResults.map(produto => (
          <div className="relative card glass 
          " key={produto.id} >
            <FavoriteButton idItem={produto.id} />
            <Link href={`/product/${produto.id}`} key={produto.id}>
              <div className="flex relative flex-col items-center justify-center w-[20rem] h-[20rem] card-body
                max-md:w-[18rem]   max-md:h-[18rem]   
              ">
                <Image src={produto.imgUrl} alt={`Imagem do Produto ${produto.id}`} width={150} height={150} />
                <h2 className="font-semibold text-lg ">{produto.name}</h2>
                <p className="overflow-auto w-[15rem] h-[5rem] break-words
                ">{produto.desc}</p>
                <p>Valor: R${produto.price}</p>
              </div>
            </Link>
          </div>
        ))
      )}
    

      </div>

    </section>
  );
};

export default ProductList;
