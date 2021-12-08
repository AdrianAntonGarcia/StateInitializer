import ProductCard from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
      >
        <ProductCard.Image className="custom-image" />
        <ProductCard.Title className="text-bold" />
        <ProductCard.Buttons className="custom-buttons" />
      </ProductCard>
    </div>
  );
};
