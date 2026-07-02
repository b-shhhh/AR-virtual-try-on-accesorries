import ProductCard from "../components/ProductCard";
import { useEffect, useMemo, useState } from "react";
import { getProducts } from "../firebase/products";

const categories = ["all", "earrings", "sunglasses", "necklace"];

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") {
      return products;
    }

    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory, products]);
  const productCountLabel =
    activeCategory === "all"
      ? `${products.length} products`
      : `${filteredProducts.length} ${activeCategory} products`;

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.3em] text-aura-accent">Shop</p>
        <h1 className="font-display text-4xl text-aura-primary">Accessory Catalog</h1>
        <p className="mt-4 max-w-3xl text-stone-600">
          Browse the academic product catalog by accessory type. This page is structured
          to support future Firestore integration, AR-supported item tagging, and
          purchase-confidence evaluation.
        </p>
        <p className="mt-4 inline-flex rounded-full bg-aura-secondary/20 px-4 py-2 text-sm font-semibold text-aura-primary">
          {productCountLabel}
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={[
                "rounded-full px-5 py-2 text-sm font-semibold capitalize transition",
                isActive
                  ? "bg-aura-primary text-white"
                  : "bg-white text-aura-primary border border-aura-secondary/45 hover:bg-aura-secondary/10"
              ].join(" ")}
            >
              {category}
            </button>
          );
        })}
      </div>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
