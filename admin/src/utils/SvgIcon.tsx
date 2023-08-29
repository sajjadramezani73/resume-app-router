import { FC } from 'react'

interface LoadSvgIconProps {
  name: string
  size?: number
  color?: string
  weight?: number
  fill?: string
}

const SvgIcon: FC<LoadSvgIconProps> = ({
  name,
  size = 24,
  color = '#6C6C6C',
  weight = 1.5,
  fill = 'none',
}) => {
  const returnIconWithName = ({
    name,
    size,
    color,
    weight,
    fill,
  }: LoadSvgIconProps) => {
    switch (name) {
      case 'loading':
        return (
          <svg
            className="animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={fill}
          >
            <circle
              style={{ opacity: '0.25' }}
              cx="12"
              cy="12"
              r="10"
              stroke={color}
              strokeWidth="4"
            ></circle>
            <path
              style={{ opacity: '0.75' }}
              fill={color}
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )

      case 'arrow-up':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 30L25 18L37 30"
              stroke={color}
              strokeWidth={weight}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )

      case 'arrow-down':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36 18L24 30L12 18"
              stroke={color}
              strokeWidth={weight}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )

      case 'arrow-right':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 12L31 24L19 36"
              stroke={color}
              strokeWidth={weight}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )

      case 'arrow-left':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31 36L19 24L31 12"
              stroke={color}
              strokeWidth={weight}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )

      case 'power':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5 8C13.8406 8.37652 13.2062 8.79103 12.6 9.24051C11.5625 10.0097 10.6074 10.8814 9.75 11.8402C6.79377 15.1463 5 19.4891 5 24.2455C5 34.6033 13.5066 43 24 43C34.4934 43 43 34.6033 43 24.2455C43 19.4891 41.2062 15.1463 38.25 11.8402C37.3926 10.8814 36.4375 10.0097 35.4 9.24051C34.7938 8.79103 34.1594 8.37652 33.5 8"
              stroke={color}
              strokeWidth={weight}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M24 4V24"
              stroke={color}
              strokeWidth={weight}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )

      case 'user':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.91003 22.0003C4.41692 22.0127 3.93881 21.8298 3.57996 21.4913C3.40178 21.324 3.25876 21.1229 3.15918 20.8997C3.0596 20.6765 3.00549 20.4357 3 20.1913V20.1913C3.04294 18.67 3.68677 17.2277 4.79065 16.1801C5.89453 15.1324 7.36857 14.5647 8.89001 14.6013H15.11C16.6316 14.5642 18.1058 15.1317 19.2098 16.1795C20.3138 17.2272 20.9576 18.6699 21 20.1913V20.1913C20.9947 20.4357 20.9407 20.6766 20.8411 20.8998C20.7415 21.123 20.5983 21.3241 20.42 21.4913C20.0611 21.8298 19.5832 22.0134 19.09 22.0023L4.91003 22.0003Z"
              stroke={color}
              strokeWidth={weight}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 10.9998C10.8277 11.0087 9.6941 10.5809 8.81995 9.79984C8.40993 9.43652 8.07968 8.99217 7.84998 8.49483C7.62913 7.99501 7.51017 7.45618 7.5 6.90984V6.08983C7.51027 5.54382 7.62923 5.00533 7.84998 4.50583C8.07957 4.00813 8.40982 3.56344 8.81995 3.19983C9.69881 2.42655 10.8294 2 12 2C13.1706 2 14.3012 2.42655 15.1801 3.19983C15.5902 3.56344 15.9204 4.00813 16.15 4.50583C16.3708 5.00533 16.4897 5.54382 16.5 6.08983V6.90984C16.4898 7.45618 16.3709 7.99501 16.15 8.49483C15.9203 8.99217 15.5901 9.43652 15.1801 9.79984C14.3059 10.5809 13.1723 11.0087 12 10.9998Z"
              stroke={color}
              strokeWidth={weight}
              strokeLinecap="square"
              strokeLinejoin="round"
            />
          </svg>
        )

      case 'edit':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.7312 2.26884C20.706 1.24372 19.044 1.24372 18.0189 2.26884L16.8617 3.426L20.574 7.13831L21.7312 5.98116C22.7563 4.95603 22.7563 3.29397 21.7312 2.26884Z"
              fill={color}
              strokeWidth={weight}
            />
            <path
              d="M19.5134 8.19897L15.801 4.48666L3.65021 16.6375C3.03342 17.2543 2.58003 18.015 2.33101 18.851L1.53123 21.5359C1.45261 21.7998 1.52496 22.0856 1.71969 22.2803C1.91442 22.4751 2.2002 22.5474 2.46413 22.4688L5.14902 21.669C5.98499 21.42 6.74574 20.9666 7.36253 20.3498L19.5134 8.19897Z"
              fill={color}
              strokeWidth={weight}
            />
          </svg>
        )

      case 'trash':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 6H22"
              stroke={color}
              strokeWidth={weight}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.8402 6.20996L18.8502 20.14C18.8184 20.6472 18.5933 21.1228 18.2212 21.4689C17.8491 21.815 17.3583 22.0051 16.8502 22H7.15021C6.64328 22.0011 6.15439 21.812 5.78021 21.47C5.40831 21.1232 5.18294 20.6474 5.15021 20.14L4.16016 6.20996"
              stroke={color}
              strokeWidth={weight}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 9.7002V18.7002"
              stroke={color}
              strokeWidth={weight}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 10.6699V17.6699"
              stroke={color}
              strokeWidth={weight}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 10.6699V17.6699"
              stroke={color}
              strokeWidth={weight}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 2H14C14.5292 2.00393 15.0356 2.21589 15.4099 2.59012C15.7841 2.96434 15.9961 3.47078 16 4V6H8V4C8.00393 3.47078 8.21592 2.96434 8.59015 2.59012C8.96437 2.21589 9.47078 2.00393 10 2V2Z"
              stroke={color}
              strokeWidth={weight}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )

      case 'eye':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.03555 12.3224C1.96647 12.1151 1.9664 11.8907 2.03536 11.6834C3.42373 7.50972 7.36079 4.5 12.0008 4.5C16.6387 4.5 20.5742 7.50692 21.9643 11.6776C22.0334 11.8849 22.0335 12.1093 21.9645 12.3166C20.5761 16.4903 16.6391 19.5 11.9991 19.5C7.3612 19.5 3.42564 16.4931 2.03555 12.3224Z"
              stroke={color}
              strokeWidth={weight}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
              stroke={color}
              strokeWidth={weight}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )

      default:
        break
    }
  }

  return <>{returnIconWithName({ name, size, color, weight, fill })}</>
}

export default SvgIcon
