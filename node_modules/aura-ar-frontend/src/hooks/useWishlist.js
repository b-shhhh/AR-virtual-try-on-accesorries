import { useMemo, useState } from "react";

export default function useWishlist() {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (product) => {
    setWishlist((current) => {
      const exists = current.some((item) => item.id === product.id);
      return exists ? current.filter((item) => item.id !== product.id) : [...current, product];
    });
  };

  const wishlistCount = useMemo(() => wishlist.length, [wishlist]);

  return {
    wishlist,
    wishlistCount,
    toggleWishlist
  };
}
