import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../firebase/products";
import { getAccessoryById } from "../data/accessories";
import useCart from "../hooks/useCart";
import useAuth from "../hooks/useAuth";
import { addToWishlist } from "../firebase/database";

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [wishlistMessage, setWishlistMessage] = useState("");
  const [cartMessage, setCartMessage] = useState("");
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      const data = await getProductById(productId);
      setProduct(data);
      setLoading(false);
    }
    fetchProduct();
  }, [productId]);

  const tryOnAccessoryId = product?.accessoryId ?? product?.id;
  const tryOnAccessory = getAccessoryById(tryOnAccessoryId);
  const thumbnailUrl = product?.previewUrl ?? tryOnAccessory?.thumbnailUrl ?? product?.thumbnailUrl;

  async function handleAddToCart() {
    if (product) {
      addToCart(product);
      setCartMessage("Successfully added to cart!");
      setTimeout(() => setCartMessage(""), 3000);
    }
  }

  async function handleSaveToWishlist() {
    if (user?.uid && product) {
      try {
        await addToWishlist(user.uid, product.id);
        setWishlistMessage("Added to wishlist!");
        setTimeout(() => setWishlistMessage(""), 3000);
      } catch (e) {
        console.error("Failed to save to wishlist:", e);
      }
    }
  }

  if (loading) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-white p-8 text-center shadow-aura">
          <p className="text-stone-600">Loading product...</p>
        </div>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-white p-8 text-center shadow-aura">
          <p className="text-stone-600">Product not found.</p>
          <Link to="/shop" className="mt-4 inline-block text-aura-accent">
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 rounded-[2rem] bg-white p-8 shadow-aura md:grid-cols-2">
        {/* Product Image */}
        <div className="overflow-hidden rounded-3xl bg-aura-secondary/14">
          <img
            src={thumbnailUrl}
            alt={product.name}
            className="h-96 w-full object-contain p-8"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/assets/products/earrings.png";
            }}
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <p className="text-sm uppercase tracking-[0.2em] text-aura-accent">{product.category}</p>
          <h1 className="mt-2 font-display text-3xl text-aura-primary">{product.name}</h1>
          
          <div className="mt-4">
            <span className="text-3xl font-bold text-aura-charcoal">NPR {product.price}</span>
          </div>

          {product.description && (
            <p className="mt-4 text-stone-600 whitespace-pre-line">
              {product.description}
            </p>
          )}

          {cartMessage && (
            <div className="mt-3 rounded-2xl bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
              {cartMessage}
            </div>
          )}

          {wishlistMessage && (
            <div className="mt-3 rounded-2xl bg-aura-secondary/20 px-4 py-2 text-sm text-aura-primary">
              {wishlistMessage}
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={handleAddToCart}
              className="rounded-full bg-aura-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
            >
              Add to Cart
            </button>
            <button
              onClick={handleSaveToWishlist}
              className="rounded-full border border-aura-secondary/50 px-6 py-3 text-sm font-semibold text-aura-primary transition hover:bg-aura-secondary/10"
            >
              Save to Wishlist
            </button>
          </div>

          <div className="mt-6">
            <Link
              to={`/tryon?accessory=${encodeURIComponent(tryOnAccessoryId)}`}
              className="inline-block rounded-full bg-aura-accent px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
            >
              Try in AR
            </Link>
          </div>

          <Link to="/shop" className="mt-8 text-sm text-aura-accent hover:underline">
            ← Back to Shop
          </Link>
        </div>
      </div>
    </main>
  );
}