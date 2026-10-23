import type { Product } from '../../data/products';
import { EquilibraScreen } from './EquilibraVisual';
import { VyveWorldVisual, VyveScreen } from './VyveWorldVisual';
import './products.css';

type ProductPreviewProps = {
  theme: Product['theme'];
  variant?: 'phone' | 'card';
};

export function ProductPreview({ theme, variant = 'phone' }: ProductPreviewProps) {
  if (theme === 'vyve') {
    return variant === 'card' ? <VyveWorldVisual compact /> : <VyveScreen />;
  }

  return <EquilibraScreen eager />;
}
