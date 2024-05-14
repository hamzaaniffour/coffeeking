import { useRouter } from 'next/navigation';
import React from 'react'

const Redirection = () => {

    const router = useRouter();
    router.push('/not-found');

  return (
    <div></div>
  )
}

export default Redirection