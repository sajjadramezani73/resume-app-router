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

      case 'linkedin':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4063 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4063 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39063 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39063 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031V40.9031Z"
              fill={color}
            />
          </svg>
        )

      case 'github':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.5 0.75C6.14625 0.75 1 5.89625 1 12.25C1 17.3387 4.29187 21.6369 8.86312 23.1606C9.43812 23.2612 9.65375 22.9162 9.65375 22.6144C9.65375 22.3412 9.63938 21.4356 9.63938 20.4725C6.75 21.0044 6.0025 19.7681 5.7725 19.1212C5.64313 18.7906 5.0825 17.77 4.59375 17.4969C4.19125 17.2812 3.61625 16.7494 4.57938 16.735C5.485 16.7206 6.13188 17.5687 6.3475 17.9137C7.3825 19.6531 9.03563 19.1644 9.69688 18.8625C9.7975 18.115 10.0994 17.6119 10.43 17.3244C7.87125 17.0369 5.1975 16.045 5.1975 11.6462C5.1975 10.3956 5.64312 9.36062 6.37625 8.55562C6.26125 8.26812 5.85875 7.08937 6.49125 5.50812C6.49125 5.50812 7.45438 5.20625 9.65375 6.68687C10.5738 6.42812 11.5513 6.29875 12.5288 6.29875C13.5063 6.29875 14.4838 6.42812 15.4038 6.68687C17.6031 5.19187 18.5662 5.50812 18.5662 5.50812C19.1987 7.08937 18.7962 8.26812 18.6812 8.55562C19.4144 9.36062 19.86 10.3812 19.86 11.6462C19.86 16.0594 17.1719 17.0369 14.6131 17.3244C15.03 17.6837 15.3894 18.3737 15.3894 19.4519C15.3894 20.99 15.375 22.2262 15.375 22.6144C15.375 22.9162 15.5906 23.2756 16.1656 23.1606C20.7081 21.6369 24 17.3244 24 12.25C24 5.89625 18.8538 0.75 12.5 0.75Z"
              fill={color}
            />
          </svg>
        )

      case 'gitlab':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.94 13.11L20.89 9.89C20.89 9.86 20.88 9.83 20.87 9.8L18.76 3.32C18.65 3 18.33 2.75 17.96 2.75C17.6 2.75 17.28 3 17.17 3.33L15.17 9.5H8.84L6.83 3.33C6.72 3 6.4 2.75 6.04 2.75C5.67 2.75 5.35 3 5.24 3.33L3.13 9.82V9.83L2.06 13.11C1.9 13.61 2.07 14.15 2.5 14.45L11.72 21.16C11.89 21.28 12.11 21.28 12.28 21.15L21.5 14.45C21.93 14.15 22.1 13.61 21.94 13.11ZM8.15 10.45L10.72 18.36L4.55 10.45H8.15ZM13.28 18.37L15.75 10.78L15.85 10.45H19.46L13.87 17.61L13.28 18.37ZM17.97 3.94L19.78 9.5H16.16L17.97 3.94ZM14.86 10.45L13.07 15.96L12 19.24L9.14 10.45H14.86ZM6.03 3.94L7.84 9.5H4.23L6.03 3.94ZM3.05 13.69C2.96 13.62 2.92 13.5 2.96 13.4L3.75 10.97L9.57 18.42L3.05 13.69ZM20.95 13.69L14.44 18.42L14.46 18.39L20.25 10.97L21.04 13.4C21.08 13.5 21.04 13.62 20.95 13.69Z"
              fill={color}
            />
          </svg>
        )

      case 'skype':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.0953 38.4458C16.1217 38.4458 12.4786 34.3839 12.4786 31.4047C12.4775 30.6939 12.7692 30.0142 13.2851 29.5252C13.8009 29.0363 14.4953 28.7814 15.205 28.8205C18.6189 28.8205 17.7259 33.9414 24.0953 33.9414C27.3512 33.9414 29.2636 31.9816 29.2636 30.1403C29.2636 29.0339 28.6314 27.7695 26.4819 27.2637L19.3696 25.4699C13.6561 24.0158 12.6604 20.839 12.6604 17.8914C12.6604 11.7748 18.2554 9.56209 23.5817 9.56209C28.4891 9.56209 34.3212 12.2727 34.3212 15.9394C34.3212 17.5199 33.0015 18.3655 31.4684 18.3655C28.5524 18.3655 29.0423 14.272 23.1786 14.272C20.2626 14.272 18.7295 15.6391 18.7295 17.5515C18.7295 19.464 20.9975 20.112 22.989 20.5466L28.2363 21.732C33.9893 23.028 35.5224 26.4024 35.5224 29.6345C35.5224 34.6052 31.6738 38.4458 24.0874 38.4458H24.0953ZM46.1118 27.9276C46.3396 26.6228 46.4533 25.3008 46.4516 23.9763C46.4795 17.3233 43.5562 11.0002 38.4697 6.7117C33.3833 2.42314 26.6572 0.61047 20.1046 1.7623C18.0905 0.602705 15.8062 -0.00516098 13.4822 3.30082e-05C8.71195 0.0291736 4.31489 2.5858 1.92977 6.71709C-0.455362 10.8484 -0.470791 15.9347 1.88923 20.0804C0.572355 27.3162 2.87912 34.7385 8.06547 39.9532C13.2518 45.1679 20.6614 47.5151 27.9043 46.2377C29.9159 47.3963 32.1974 48.0042 34.5188 48C39.2866 47.9693 43.681 45.4137 46.0656 41.2849C48.4502 37.1561 48.4678 32.0727 46.1118 27.9276Z"
              fill={color}
            />
          </svg>
        )

      case 'instagram':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z"
              fill={color}
            />
            <path
              d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z"
              fill={color}
            />
            <path
              d="M39.6937 11.1844C39.6937 12.7782 38.4 14.0625 36.8156 14.0625C35.2219 14.0625 33.9375 12.7688 33.9375 11.1844C33.9375 9.59065 35.2313 8.30627 36.8156 8.30627C38.4 8.30627 39.6937 9.60003 39.6937 11.1844Z"
              fill={color}
            />
          </svg>
        )

      case 'pinterest':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.04 21.54C10 21.83 10.97 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.25 4.67 19.9 8.44 21.34C8.35 20.56 8.26 19.27 8.44 18.38L9.59 13.44C9.59 13.44 9.3 12.86 9.3 11.94C9.3 10.56 10.16 9.53 11.14 9.53C12 9.53 12.4 10.16 12.4 10.97C12.4 11.83 11.83 13.06 11.54 14.24C11.37 15.22 12.06 16.08 13.06 16.08C14.84 16.08 16.22 14.18 16.22 11.5C16.22 9.1 14.5 7.46 12.03 7.46C9.21 7.46 7.55 9.56 7.55 11.77C7.55 12.63 7.83 13.5 8.29 14.07C8.38 14.13 8.38 14.21 8.35 14.36L8.06 15.45C8.06 15.62 7.95 15.68 7.78 15.56C6.5 15 5.76 13.18 5.76 11.71C5.76 8.55 8 5.68 12.32 5.68C15.76 5.68 18.44 8.15 18.44 11.43C18.44 14.87 16.31 17.63 13.26 17.63C12.29 17.63 11.34 17.11 11 16.5L10.33 18.87C10.1 19.73 9.47 20.88 9.04 21.57V21.54Z"
              fill={color}
            />
          </svg>
        )

      case 'whatsapp':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z"
              fill={color}
            />
          </svg>
        )

      case 'gmail':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 18H18V9.25L12 13L6 9.25V18H4V6H5.2L12 10.25L18.8 6H20V18ZM20 4H4C2.89 4 2 4.89 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V6C22 4.89 21.1 4 20 4Z"
              fill={color}
            />
          </svg>
        )

      case 'telegram':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.55 4.04989L20.025 20.5499C19.7625 21.7124 19.0875 21.9749 18.1125 21.4499L12.825 17.5499L10.2375 20.0249C9.97497 20.2874 9.71247 20.5499 9.11247 20.5499L9.52497 15.1124L19.3875 6.14989C19.8 5.73739 19.275 5.58739 18.75 5.92489L6.48747 13.6499L1.19996 12.0374C0.0374617 11.6624 0.0374617 10.8749 1.46246 10.3499L22.0125 2.3624C23.025 2.0624 23.8875 2.5874 23.55 4.04989Z"
              fill={color}
            />
          </svg>
        )

      case 'discord':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.3303 4.22783C18.7767 3.50093 17.1156 2.97267 15.3789 2.67188C15.1656 3.05749 14.9165 3.57614 14.7446 3.98872C12.8985 3.71109 11.0693 3.71109 9.25718 3.98872C9.08539 3.57614 8.83054 3.05749 8.61536 2.67188C6.87683 2.97267 5.21374 3.50287 3.66019 4.23165C0.526643 8.96685 -0.322811 13.5844 0.101917 18.1365C2.18025 19.6885 4.19441 20.6313 6.17456 21.2483C6.66349 20.5754 7.09954 19.8601 7.47517 19.1063C6.75975 18.8344 6.07451 18.499 5.42708 18.1095C5.59882 17.9822 5.76686 17.8492 5.92916 17.7123C9.87821 19.5594 14.1689 19.5594 18.0707 17.7123C18.235 17.8492 18.4029 17.9822 18.5728 18.1095C17.9235 18.5008 17.2364 18.8363 16.521 19.1082C16.8966 19.8601 17.3308 20.5774 17.8216 21.2502C19.8036 20.6332 21.8197 19.6905 23.898 18.1365C24.3963 12.8595 23.0467 8.28435 20.3303 4.22783ZM8.01319 15.337C6.82774 15.337 5.85555 14.2303 5.85555 12.8826C5.85555 11.535 6.80696 10.4263 8.01319 10.4263C9.21941 10.4263 10.1916 11.533 10.1708 12.8826C10.1727 14.2303 9.21941 15.337 8.01319 15.337ZM15.9867 15.337C14.8013 15.337 13.8291 14.2303 13.8291 12.8826C13.8291 11.535 14.7805 10.4263 15.9867 10.4263C17.193 10.4263 18.1651 11.533 18.1444 12.8826C18.1444 14.2303 17.193 15.337 15.9867 15.337Z"
              fill={color}
            />
          </svg>
        )

      case 'dribbble':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9998 0.675049C5.7373 0.675049 0.674805 5.73755 0.674805 12C0.674805 18.2626 5.7373 23.3625 11.9998 23.3625C18.2623 23.3625 23.3623 18.2626 23.3623 12C23.3623 5.73755 18.2623 0.675049 11.9998 0.675049ZM21.6373 12.3375C19.4248 12.1875 17.0998 12.4125 14.8123 12.975C14.4748 12.075 14.1373 11.2125 13.7623 10.35C16.1248 9.56255 18.3373 8.40005 20.2498 7.01255C21.1498 8.47505 21.6373 10.2 21.6373 12.0375C21.6748 12.1125 21.6373 12.225 21.6373 12.3375ZM19.2373 5.62505C17.4373 6.97505 15.2998 8.06255 13.0123 8.77505C11.8123 6.37505 10.4623 4.35005 9.0373 2.77505C9.9748 2.47505 10.9498 2.32505 11.9998 2.32505C14.8873 2.36255 17.4748 3.63755 19.2373 5.62505ZM7.38731 3.52505C8.81231 4.95005 10.1623 6.90005 11.3623 9.26255C8.3998 9.97505 5.3623 10.0875 2.6248 9.60005C3.3373 6.97505 5.06231 4.80005 7.38731 3.52505ZM2.3623 11.25C3.5998 11.5125 4.8748 11.625 6.1498 11.625C8.0998 11.625 10.1248 11.3625 12.1123 10.8375C12.4873 11.6625 12.8623 12.525 13.1623 13.425C9.8623 14.475 6.9373 16.125 4.6123 18.2626C3.2248 16.5375 2.3623 14.3625 2.3623 12C2.3623 11.7375 2.3623 11.5125 2.3623 11.25ZM5.8123 19.425C7.9498 17.475 10.6873 15.9375 13.7248 15C13.8373 15.375 13.9498 15.75 14.0623 16.0875C14.5498 17.775 14.9248 19.4625 15.1873 21.0751C14.1748 21.4125 13.1248 21.6376 11.9998 21.6376C9.63731 21.675 7.4998 20.8125 5.8123 19.425ZM16.7998 20.3625C16.5373 18.825 16.1623 17.2125 15.7123 15.6C15.5998 15.225 15.4873 14.8875 15.3748 14.5125C17.3998 14.025 19.4998 13.8375 21.4498 13.95C20.8873 16.725 19.1248 19.0125 16.7998 20.3625Z"
              fill={color}
            />
          </svg>
        )

      case 'figma':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.9002 8.0625C18.0752 8.0625 19.8002 6.3375 19.8002 4.1625C19.8002 1.9875 18.0002 0.375 15.9002 0.375H8.1002C5.9252 0.375 4.2002 2.1 4.2002 4.275C4.2002 6.45 5.9252 8.175 8.1002 8.175C5.9252 8.175 4.2002 9.9 4.2002 12.075C4.2002 14.25 5.9252 15.975 8.1002 15.975C5.9252 15.975 4.2002 17.7 4.2002 19.875C4.2002 22.05 5.9627 23.625 8.1002 23.625C10.2377 23.625 12.0002 21.9 12.0002 19.725V8.175H15.9002V8.0625ZM15.9002 8.0625C13.7252 8.0625 12.0002 9.7875 12.0002 11.9625C12.0002 14.1375 13.7252 15.8625 15.9002 15.8625C18.0752 15.8625 19.8002 14.1375 19.8002 11.9625C19.6877 9.7875 18.0002 8.0625 15.9002 8.0625Z"
              fill={color}
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
