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

      default:
        break;
    }
  };

  return <>{returnIconWithName({ name, size, color, weight, fill })}</>;
};

export default SvgIcon;
