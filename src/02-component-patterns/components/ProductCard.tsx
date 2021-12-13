import { CSSProperties } from 'react';
import { useProduct } from '../hooks/useProduct';
import { InitialValues, OnChangeArgs, Product } from '../interfaces';
import { ProductContext } from '../context';
import styles from '../styles/styles.module.css';

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (mensaje: string) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
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
  initialValues,
}: Props) => {
  const { Provider } = ProductContext;
  const { counter, increaseBy } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });
  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children('Hola mundo')}
      </div>
    </Provider>
  );
};
