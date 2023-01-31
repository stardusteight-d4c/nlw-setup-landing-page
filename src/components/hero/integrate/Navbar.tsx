import React from 'react'

interface Props {}

export const Navbar = (props: Props) => {
  return (
    <nav className="text-[#C4C4CC] mx-auto max-w-7xl px-14 py-4 flex items-center justify-between">
      <ul className="flex items-center gap-x-6">
        <li className="hover:text-[#54E694] transition-colors cursor-pointer py-1 pr-1">
          Sobre
        </li>
        <li className="hover:text-[#54E694] transition-colors cursor-pointer py-1 pr-1">
          Trilhas de conteúdo
        </li>
        <li className="hover:text-[#54E694] transition-colors cursor-pointer py-1 pr-1">
          Projetos
        </li>
        <li className="hover:text-[#54E694] transition-colors cursor-pointer py-1 pr-1">
          Educadores
        </li>
        <li className="hover:text-[#54E694] transition-colors cursor-pointer py-1 pr-1">
          Dúvidas
        </li>
      </ul>
      <button type="button" className="uppercase text-sm leading-5 hover:text-[#09090a] hover:bg-[#54E694] duration-300 ease-in-out transition-colors py-3 font-bold rounded-[5px] px-6 border border-[#54E694]">
        inscreva-se agora
      </button>
    </nav>
  )
}
