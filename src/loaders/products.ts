import { json } from "react-router-dom";
import { routeProtection } from "./route-protection";

export type Product = { id: Number; title: string };

export async function productsLoader() {
  const redirectRoute = routeProtection();

  if (redirectRoute) {
    return redirectRoute;
  }

  let products = await getProducts();
  return json(products);
}

function getProducts() {
  return new Promise<Product[]>((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "product 1" },
        { id: 2, title: "product 2" },
        { id: 3, title: "product 3" },
      ]);
    }, 2000);
  });
}
