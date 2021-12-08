import ProductCard from '../components';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            value={
              shoppingCart[product.id] ? shoppingCart[product.id].count : 0
            }
            onChange={onProductCountChange}
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title className="text-bold" />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart ">
        {/* también se puede hacer con el .entries */}
        {Object.keys(shoppingCart).map((index) => (
          <ProductCard
            key={index}
            product={shoppingCart[index]}
            className="bg-dark text-white"
            style={{ width: '100px' }}
            onChange={onProductCountChange}
            value={shoppingCart[index].count}
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Buttons
              style={{ display: 'flex', justifyContent: 'center' }}
              className="custom-buttons"
            />
          </ProductCard>
        ))}
      </div>
      <div>
        <code>{JSON.stringify(shoppingCart, null, 5)}</code>
      </div>
    </div>
  );
};
