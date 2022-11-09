interface Products {
  price: number;
  name: string;
  quantity: number;
}

const printProductSummary = (product: Products): void => {
  console.log(`${product.name} - $${product.price}`);
};
