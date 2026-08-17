import { ProductService } from "../services/productService.js";
import { AppError } from "../middleware/errorHandler.js";

export async function getProducts(request, response) {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const query = url.searchParams.get("q");
  const category = url.searchParams.get("category");

  try {
    let products;

    if (category) {
      products = await ProductService.getProductsByCategory(category);
    } else if (query) {
      products = await ProductService.searchProducts(query);
    } else {
      products = await ProductService.getAllProducts();
    }

    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(
      JSON.stringify({
        success: true,
        count: products.length,
        data: products
      })
    );
  } catch (error) {
    throw new AppError(500, "Failed to fetch products");
  }
}

export async function getProductById(request, response, productId) {
  try {
    const product = await ProductService.getProductById(productId);

    if (!product) {
      throw new AppError(404, `Product with ID ${productId} not found`);
    }

    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ success: true, data: product }));
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw new AppError(500, "Failed to fetch product");
  }
}

export async function getProductStats(request, response) {
  try {
    const stats = await ProductService.getProductStats();

    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ success: true, data: stats }));
  } catch (error) {
    throw new AppError(500, "Failed to fetch product stats");
  }
}
