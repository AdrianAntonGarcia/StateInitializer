import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductTitle, ProductImage, ProductButtons } from '.';
import { ProductCardHOCProps } from '../interfaces';

// export * from './ProductCard';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';
export { ProductButtons } from './ProductButtons';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
