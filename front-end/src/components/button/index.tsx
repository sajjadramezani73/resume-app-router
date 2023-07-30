'use client'

import LoadSvgIcon from '@/utils/LoadSvgIcon'

interface Props {
  title?: string
  onClick?: () => void
  loading?: boolean
  disabled?: boolean
  className?: string
  outline?: boolean
  type?: string
  link?: string
}

const Button = ({
  title,
  onClick,
  loading,
  disabled,
  className,
  outline = false,
  type,
  link,
}: Props) => {
  const handleClickButton = () => {
    if (type === 'link') {
      window.open(link, '_black')
    } else {
      onClick
    }
  }

  return (
    <button
      className={`w-full text-sm rounded-lg h-10 flex items-center justify-center
            ${
              outline
                ? 'border border-primary text-primary'
                : 'bg-primary text-white'
            }
            ${className}`}
      disabled={loading || disabled}
      onClick={handleClickButton}
    >
      {loading ? (
        <LoadSvgIcon name="loading" fill="#ffffff" size={20} color="#ffffff" />
      ) : (
        title
      )}
    </button>
  )
}

export default Button
