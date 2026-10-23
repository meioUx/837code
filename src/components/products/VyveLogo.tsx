import './vyve-world.css';

export function VyveLogo({ size = 32 }: { size?: number }) {
  return (
    <img
      className="vyve-logo"
      src="/images/vyve-world-logo.png"
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
    />
  );
}
