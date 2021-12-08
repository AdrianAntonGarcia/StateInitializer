import { ReactElement, CSSProperties } from 'react';
import { useProduct } from '../hooks/useProduct';
import { OnChangeArgs, Product } from '../interfaces';
import { ProductContext } from '../context';
import styles from '../styles/styles.module.css';

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
}

/**
 * Componente que devuelve la tarjeta de un producto
 * @param param0
 * @returns
 */
export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
}: Props) => {
  const { Provider } = ProductContext;
  const { counter, increaseBy } = useProduct({ onChange, product, value });
  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children}
      </div>
    </Provider>
  );
};
