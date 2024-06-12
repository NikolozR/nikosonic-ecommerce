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
  console.log(idsRes)
  const ids = idsRes?.map((el) => el.product_id + '');
  return ids?.map((id) => ({
    productId: id,
  })) ?? [];
}

async function ProductDetailsPage({
  params: { productId },
}: {
  params: { productId: string };
}) {
  const product: Product = await getSingleProduct(productId);
  const reviews: Review[] = await getReviews(productId);
  const auth0user = await getAuth0User();
  const user: User = await getUserBySub(auth0user?.sub);
  console.log(product)
  return (
    <main>
      <div className="container">
        <Details product={product} />
        <Reviews
          reviews={reviews}
          productId={product.product_id}
          userId={user.id}
        />
      </div>
    </main>
  );
}

export default ProductDetailsPage;
