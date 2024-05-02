export const Instagram = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 14 14">
      <g
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M10.333 3.644a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5" />
        <path d="M.858 3.431A2.573 2.573 0 0 1 3.431.858h6.862a2.573 2.573 0 0 1 2.573 2.573v6.862a2.573 2.573 0 0 1-2.573 2.573H3.43a2.573 2.573 0 0 1-2.573-2.573V3.43Z" />
        <path d="M4.312 6.862a2.55 2.55 0 1 0 5.1 0a2.55 2.55 0 1 0-5.1 0" />
      </g>
    </svg>
  );
};
export const X = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path
        fill="white"
        d="M8 2H1l8.26 11.015L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886zm9 18L5 4h2l12 16z"
      />
    </svg>
  );
};
type CloseProps = {
  color?: string;
  size?: number;
  onClick?: () => void;
};

export const Close = ({
  color = "currentColor",
  size = 24,
  onClick,
}: CloseProps) => (
  <svg
    width={size}
    onClick={onClick}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.3002 5.71C17.9102 5.32 17.2802 5.32 16.8902 5.71L12.0002 10.59L7.11022 5.7C6.72022 5.31 6.09021 5.31 5.70021 5.7C5.31021 6.09 5.31021 6.72 5.70021 7.11L10.5902 12L5.70021 16.89C5.31021 17.28 5.31021 17.91 5.70021 18.3C6.09021 18.69 6.72022 18.69 7.11022 18.3L12.0002 13.41L16.8902 18.3C17.2802 18.69 17.9102 18.69 18.3002 18.3C18.6902 17.91 18.6902 17.28 18.3002 16.89L13.4102 12L18.3002 7.11C18.6802 6.73 18.6802 6.09 18.3002 5.71Z"
      fill={color}
    />
  </svg>
);
