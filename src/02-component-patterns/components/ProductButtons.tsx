import { CSSProperties, useCallback, useContext } from 'react';
import { ProductContext } from '../context';
import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  style?: CSSProperties;
}
/**
 * Componente de los botones del producto
 */
export const ProductButtons = ({ className, style }: Props) => {
  // TODO: maxCount
  const { counter, increaseBy, maxCount } = useContext(ProductContext);
  const isMaxReached = useCallback(
    () => !!maxCount && maxCount === counter,
    [counter, maxCount]
  );
  return (
    <div style={style} className={`${styles.buttonsContainer} ${className}`}>
      <button
        className={styles.buttonMinus}
        onClick={() => {
          increaseBy(-1);
        }}
      >
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        disabled={isMaxReached()}
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
        onClick={() => {
          increaseBy(1);
        }}
      >
        +
      </button>
    </div>
  );
};
