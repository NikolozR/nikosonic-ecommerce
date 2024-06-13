import {
  getReviews,
  getSingleProduct,
  getUserBySub,
} from "../../../../api/api";
import Details from "../../../../components/ProductsDetails/Details";
import Reviews from "../../../../components/ProductsDetails/Reviews";
import { getAuth0User } from "../../../../actions";
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
  const auth0user = await getAuth0User();
  const userPromise = getUserBySub(auth0user?.sub);
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
        <Details product={product} />
        <Reviews
          reviews={reviews}
          productId={product.product_id}
          user={user}
        />
      </div>
    </main>
  );
}

export default ProductDetailsPage;
