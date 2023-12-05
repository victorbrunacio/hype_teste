"use client";
import React, { useState, useEffect } from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import toast from 'react-hot-toast';
import { products } from "@/data/data";
import { twMerge } from "tailwind-merge";
import useUserContext from '@/context/useUserContext';
const FavoriteButton = ({ idItem, stylesAdd = "text-[2rem]"}) => {
  const { account, favorites, setFavorites, removeFavorite } = useUserContext();
  const [isFavorite, setIsFavorite] = useState(false);

  const selectedProduct = () => {
    return products.find((product) => {
      const produto = product.id == idItem
      return produto
    })
  }
  useEffect(() => {
        setIsFavorite(favorites.some(product => product.id === idItem));
      }, [favorites]);
  const handleButtonClick = () => {
    const produto = selectedProduct();
    if (account.length) {
      //abaixo, muda o simbolo
      setIsFavorite((prevIsFavorite) => !prevIsFavorite);
      //abaixo, adiciona aos favoritos 
      if (!isFavorite) {
        setFavorites(produto);
        console.log(favorites)
        return toast.custom((t) => (
          <div
            className={`${t.visible ? 'animate-enter' : 'animate-leave'
              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={produto.imgUrl}
                    alt={produto.name}
                  />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {produto.name}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Adicionado aos favoritos!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Close
              </button>
            </div>
          </div>
        ))
      } else {
        //remove dos favoritos
        removeFavorite(produto.id);
        console.log(favorites)
        return toast.custom((t) => (
          <div
            className={`${t.visible ? 'animate-enter' : 'animate-leave'
              } max-w-md w-full bg-red-500 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={produto.imgUrl}
                    alt={produto.name}
                  />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {produto.name}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Removido dos favoritos.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Close
              </button>
            </div>
          </div>
        ))
      }
    } else {
      toast("Você precisa entrar na sua conta para adicionar aos favoritos",{
        position: 'top-right',
      })
    }

  };

  return (
    <button className={twMerge("absolute top-0 left-0 z-30  text-gray-500", stylesAdd)} onClick={handleButtonClick}>
      {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
    </button>
  );
};

export default FavoriteButton;

