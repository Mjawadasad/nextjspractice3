import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>page
        <Link href="courses/it" className='space-x-10 p-10'>IT</Link>
        <Link href="courses/cloud" className='space-x-7 p-7'>Cloud</Link>
    </div>
  )
}
