import { useRouter } from 'next/router'
import link from 'next/link'

const Character = () => {
  const router = useRouter()
  const {name}  = router.query

  return (
    <h1>Character ID: {name}</h1>
  )
}

export default Character