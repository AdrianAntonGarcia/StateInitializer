import { useEffect, useRef, useState } from 'react';
import {
  OnChangeArgs,
  Product,
  InitialValues,
} from '../interfaces/product.interfaces';

interface UseProductProps {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  value = 0,
  product,
  initialValues,
}: UseProductProps) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);
  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {
    if (isControlled.current) {
      return onChange!({ count: value, product });
    }
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);
  return { counter, increaseBy };
};
