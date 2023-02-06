import React, { useState } from 'react'

interface Props {
  name: string
  img: string
  roleIcon: string
  role: string
  primaryColor: string
  secondaryColor: string
  bio: string
}

export const EducatorCard = ({
  name,
  img,
  roleIcon,
  role,
  primaryColor,
  secondaryColor,
  bio,
}: Props) => {
  return (
    <div
      style={{
        backgroundColor: primaryColor,
      }}
      className="cursor-default rounded col-span-1"
    >
      <header
        style={{
          backgroundColor: role === 'Trilha Ignite' ? '#047C3F' : '#996dff',
        }}
        className={`educatorCardHeaderBackground rounded-t text-center relative`}
      >
        <img src={img} alt={name} className="educator" />
        <img
          src={roleIcon}
          className="absolute -bottom-[24px] left-1/2 -translate-x-1/2"
        />
      </header>
      <div className="px-4 text-center pt-10 pb-6">
        <h3 className="text-2xl font-bold !leading-[140%] text-[#E1E1E6] mb-1">
          {name}
        </h3>
        <span
          style={{ color: secondaryColor }}
          className={`text-lg !leading-[150%]`}
        >
          {role}
        </span>
        <p className="mt-4 text-sm text-center text-[#E1E1E6]">{bio}</p>
      </div>
    </div>
  )
}
