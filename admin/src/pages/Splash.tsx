import SvgIcon from '@/utils/SvgIcon'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Splash = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/dashboard')
    }, 3000)
  }, [])

  return (
    <div className="h-full bg-primary flex flex-col items-center justify-center">
      <p className="text-sm text-white font-bold mb-2">در حال راه اندازی ...</p>
      <SvgIcon name="loading" color="#ffffff" />
    </div>
  )
}

export default Splash
