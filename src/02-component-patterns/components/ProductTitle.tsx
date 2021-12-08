import { CSSProperties, useContext } from 'react';
import { ProductContext } from '../context';
import styles from '../styles/styles.module.css';

export interface Props {
  title?: string;
  className?: string;
  style?: CSSProperties;
}
/**
 * Componente del título de la imagen
 * @param param0
 * @returns
 */
export const ProductTitle = ({ title, className, style }: Props) => {
  const { product } = useContext(ProductContext);
  return (
    <span style={style} className={`${styles.productDescription} ${className}`}>
      {title ? title : product.title}
    </span>
  );
};
