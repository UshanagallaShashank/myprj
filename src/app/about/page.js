import React from 'react'
import Link from 'next/link'
const about = () => {
  return (
    <div>
      About page
      <Link href="/">Home</Link>
      <Link href="/user">User</Link>
    </div>
  )
}

export default about
