type SvgProps = {
  color?: string;
  size?: number;
  onClick?: () => void;
};

export const Instagram = ({
  color = "currentColor",
  size = 24,
  onClick,
}: SvgProps) => {
  return (
    <svg
      style={{ cursor: "pointer" }}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 14 14"
      onClick={onClick}>
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
export const X = ({ color = "currentColor", size = 24, onClick }: SvgProps) => {
  return (
    <svg
      style={{ cursor: "pointer" }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      onClick={onClick}>
      <path
        fill="white"
        d="M8 2H1l8.26 11.015L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886zm9 18L5 4h2l12 16z"
      />
    </svg>
  );
};

export const Close = ({
  color = "currentColor",
  size = 24,
  onClick,
}: SvgProps) => (
  <svg
    style={{ cursor: "pointer" }}
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

export const Edit = ({
  color = "currentColor",
  size = 24,
  onClick,
}: SvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      onClick={onClick}
      height={size}
      viewBox="0 0 32 32"
      style={{ cursor: "pointer" }}>
      <path
        fill={color}
        d="M2 26h28v2H2zM25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4zm-5-5L24 7.6l-3 3L17.4 7zM6 22v-3.6l10-10l3.6 3.6l-10 10z"
      />
    </svg>
  );
};
export const Clock = ({ color = "currentColor", size = 24 }: SvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24">
      <g
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2">
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0" />
        <path d="M12 7v5l3 3" />
      </g>
    </svg>
  );
};
export const Guests = ({ color = "currentColor", size = 24 }: SvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16">
      <path
        fill={color}
        d="M4 5.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0M5.5 3a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m5 3a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-10 6.5A1.5 1.5 0 0 1 3 9h5a1.5 1.5 0 0 1 1.5 1.5v.112a1 1 0 0 1-.01.137a2.85 2.85 0 0 1-.524 1.342C8.419 12.846 7.379 13.5 5.5 13.5s-2.918-.654-3.467-1.409a2.85 2.85 0 0 1-.523-1.342a2 2 0 0 1-.01-.137zm1 .09v.007l.004.049a1.85 1.85 0 0 0 .338.857c.326.448 1.036.997 2.658.997s2.332-.549 2.658-.997a1.85 1.85 0 0 0 .338-.857l.004-.05V10.5A.5.5 0 0 0 8 10H3a.5.5 0 0 0-.5.5zm9 1.91c-.588 0-1.07-.09-1.46-.238a4 4 0 0 0 .361-.932c.268.101.624.17 1.099.17c1.119 0 1.578-.382 1.78-.666a1.2 1.2 0 0 0 .218-.56l.002-.028a.25.25 0 0 0-.25-.246h-2.8A2.5 2.5 0 0 0 10 9h3.25c.69 0 1.25.56 1.25 1.25v.017a1 1 0 0 1-.008.109a2.2 2.2 0 0 1-.398 1.04c-.422.591-1.213 1.084-2.594 1.084"
      />
    </svg>
  );
};

export const Creator = ({ color = "currentColor", size = 24 }: SvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24">
      <path
        fill={color}
        d="M14.5 18q-1.05 0-1.775-.725T12 15.5t.725-1.775T14.5 13t1.775.725T17 15.5t-.725 1.775T14.5 18M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5z"
      />
    </svg>
  );
};

export const Description = ({
  color = "currentColor",
  size = 24,
}: SvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16">
      <path
        fill={color}
        d="M1.75 3a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5zM1 9.75A.75.75 0 0 1 1.75 9h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 9.75M1.75 12a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5z"
      />
    </svg>
  );
};
