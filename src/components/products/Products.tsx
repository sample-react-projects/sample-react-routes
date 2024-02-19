import { useLoaderData } from "react-router-dom";
import { Product } from "../../loaders/products";

const Products: React.FC<{}> = () => {
  const products = useLoaderData() as Product[];

  return (
    <>
      {products && (
        <ul>
          {products.map((product) => (
            <li key={product.id.toString()}>{product.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Products;
