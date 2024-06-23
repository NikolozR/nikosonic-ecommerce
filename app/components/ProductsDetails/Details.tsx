import SideDetails from "./SideDetails"
import Gallery from "./Gallery"

function Details({product, user}: {product: Product, user: User}) {
  return (
    <div className="flex gap-[70px] w-full mt-[40px]">
        <Gallery thumbnailUrl={product.thumbnail_url} galleryUrls={product.gallery_urls} />
        <SideDetails product={product} user={user} />
    </div>
  )
}

export default Details