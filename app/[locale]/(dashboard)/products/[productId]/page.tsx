import {
  getProductIds,
  getReviews,
  getSingleProduct,
  getUserBySub,
} from "../../../../api/api";
import Details from "../../../../components/ProductsDetails/Details";
import Reviews from "../../../../components/ProductsDetails/Reviews";
import { getAuth0User } from "../../../../actions";

export async function generateStaticParams() {
  const idsRes: { product_id: number }[] = await getProductIds();

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
