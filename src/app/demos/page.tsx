'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Demos() {
    const router = useRouter()
    useEffect(() => {
        router.push('/')
        const timeout = setTimeout(() => {
            const element = document.getElementById('roxanatech-demos');
            element?.scrollIntoView({ behavior: "smooth" });
        }, 1000)
        return () => clearTimeout(timeout)
    }, [])
  return (
    <></>
  )
}
