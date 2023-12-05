"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import useUserContext from '@/context/useUserContext';
import { IoRocketOutline } from "react-icons/io5";
import toast from 'react-hot-toast';
const Register = () => {
  const router = useRouter();
  const { setAccount, account } = useUserContext();

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
  });

  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Recupera os dados existentes do localStorage
    const existingData = JSON.parse(localStorage.getItem('formData')) || [];

    // Verifica se o usuário ou e-mail já estão cadastrados
    const userExists = existingData.some(
      (data) => data.username === form.username || data.email === form.email
    );

    if (userExists) {
      alert('Usuário ou e-mail já cadastrados. Por favor, escolha informações únicas.');
      return;
    }

    // Adiciona o novo registro ao array existente
    const newData = [...existingData, form];

    // Atualiza o localStorage com o novo array
    localStorage.setItem('formData', JSON.stringify(newData));

    // Atualiza o estado global (se necessário)
    setAccount(form);

    router.push('/');
  };

  //////////////////
  //LOGIN  
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleInputLoginChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.id]: event.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Recupera os dados existentes do localStorage
    const existingData = JSON.parse(localStorage.getItem('formData')) || [];

    // Verifica se o usuário e a senha correspondem a algum registro no localStorage
    const user = existingData.find(
      (data) => data.email === loginData.email && data.password === loginData.password
    );

    if (user) {
      // Usuário e senha corretos, redireciona para a página inicial
      setAccount(user);
      router.push('/');
    } else {
      // Usuário ou senha incorretos, exibe um alerta
      toast.error('Usuário ou senha incorretos. Por favor, tente novamente.', {
        position: 'bottom-center',
      });
    }
  };
  return (
    <section className='flex flex-col h-full w-full items-center justify-center gap-[2rem] mt-[5rem] mb-[4rem]'>
      <form onSubmit={handleSubmit} className='flex flex-col items-center gap-[3rem] w-[40rem] p-10 bg-base-300 shadow-sm rounded-lg
      max-md:w-[20rem]  max-md:mt-[2rem]
      '>
        <label htmlFor="username">
          Nome:
          <input required type="text" id="username"  onChange={handleInputChange} value={form.username}  className="input input-md input-bordered w-full max-w-xs"  />
        </label>
        <label htmlFor="email">
          Email:
          <input required type="email" id="email" onChange={handleInputChange} value={form.email} className="input input-md input-bordered w-full max-w-xs"/>
        </label>
        <label htmlFor="password">
          Senha:
          <input required type="password" id="password"  onChange={handleInputChange} value={form.password} className="input input-md input-bordered w-full max-w-xs" />
        </label>
        <label htmlFor="phone">
          Telefone:
          <input required type="tel" id="phone"onChange={handleInputChange} value={form.phone} className="input input-md input-bordered w-full max-w-xs"/>
        </label>
        <button type="submit" className='btn btn-wide btn-outline btn-black'>Criar conta</button>
      </form>

      <span className='font-semibold'>Já possui uma conta?</span>

      <form onSubmit={handleLogin} className='flex items-center justify-center gap-5
       max-md:flex-col
      '>
        <label htmlFor="accountName">Email:</label>
        <input required type="text" id="email" onChange={handleInputLoginChange} value={loginData.email}  className="input input-bordered input-sm w-full max-w-xs" />
        <label htmlFor="accountPassword">Senha:</label>
        <input required type="password" id="password" onChange={handleInputLoginChange} value={loginData.password}  className="input input-bordered input-sm w-full max-w-xs" />
        <button type='submit' className=' btn btn-ghost font-bold hover:text-lg transition-all duration-200
         max-md:bg-slate-600  max-md:text-white  max-md:mt-4
        '>Login <IoRocketOutline /></button>
      </form>
    </section>
  )
}

export default Register


