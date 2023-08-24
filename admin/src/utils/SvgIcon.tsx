import { FC } from "react";

interface LoadSvgIconProps {
  name: string;
  size?: number;
  color?: string;
  weight?: number;
  fill?: string;
}

const SvgIcon: FC<LoadSvgIconProps> = ({
  name,
  size = 24,
  color = "#6C6C6C",
  weight = 1.5,
  fill = "none",
}) => {
  const returnIconWithName = ({
    name,
    size,
    color,
    weight,
    fill,
  }: LoadSvgIconProps) => {
    switch (name) {
      case "loading":
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
              style={{ opacity: "0.25" }}
              cx="12"
              cy="12"
              r="10"
              stroke={color}
              strokeWidth="4"
            ></circle>
            <path
              style={{ opacity: "0.75" }}
              fill={color}
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        );

      case "arrow-up":
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
              stroke-width={weight}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );

      case "arrow-down":
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
              stroke-width={weight}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );

      case "arrow-right":
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
              stroke-width={weight}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );

      case "arrow-left":
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
              stroke-width={weight}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );

      case "power":
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
        );

      case "user":
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
        );

      default:
        break;
    }
  };

  return <>{returnIconWithName({ name, size, color, weight, fill })}</>;
};

export default SvgIcon;
