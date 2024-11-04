"use client";

import React from 'react'
import { useRouter } from 'next/navigation'

const StudentsInfo = () => {
    const router = useRouter();
    const stdId = [
        {
            id: 1,
            name: "John",
            age: 20,
            grade: 'A'
        },
        {
            id: 1,
            name: "Usama",
            age: 20,
            grade: 'A'
        },
    ]

  return (
    <div>
        {stdId.map(({id, name}, index) => {
            return (
                <li key={index} onClick={router.push(`students/${id}`)}>{name}</li>
            )
        })}
    </div>
  )
}

export default StudentsInfo
