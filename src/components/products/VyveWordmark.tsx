import './vyve-wordmark.css';

export function VyveWordmark({ className = '' }: { className?: string }) {
  return (
    <div className={`vyve-wordmark ${className}`}>
      <img src="/images/vyve/wordmark.png" alt="VYVE" width={2172} height={724} />
      <span>WORLD</span>
    </div>
  );
}
