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

      default:
        break;
    }
  };

  return <>{returnIconWithName({ name, size, color, weight, fill })}</>;
};

export default SvgIcon;
