import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { getProducts } from "../firebase/products";

export default function Catalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.3em] text-aura-accent">Shop</p>
        <h1 className="font-display text-4xl text-aura-primary">Accessory Catalog</h1>
      </div>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
