import {
  getReviews,
  getSingleProduct,
  getUser,
} from "../../../../api/api";
import OptimisticComponent from "../../../../components/ProductsDetails/OptimisticComponent";
import { QueryResultRow, sql } from "@vercel/postgres";

export async function generateStaticParams() {
  const result = await sql`
      SELECT product_id FROM products;
    `;
  const idsRes: { product_id: number }[] = result.rows.map((d: QueryResultRow) => d as {product_id: number});

  const ids: string[] = idsRes?.map((el) => el.product_id + '');

  return ids?.map((id) => ({
    productId: id,
  })) ?? [];
}

async function ProductDetailsPage({
  params: { productId },
}: {
  params: { productId: string };
}) {
  const userPromise = getUser();
  const productPromise = getSingleProduct(productId);
  const reviewsPromise = getReviews(productId);

  const [user, product, reviews] = await Promise.all([
    userPromise,
    productPromise,
    reviewsPromise,
  ]);
  return (
    <main>
      <div className="container">
        <OptimisticComponent user={user} reviews={reviews} product={product} />
      </div>
    </main>
  );
}

export default ProductDetailsPage;
