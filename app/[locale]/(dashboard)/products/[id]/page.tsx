
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

function ProductPage({ params }: { params: Params}) {
    


      return (
        <section className="flex-1 flex flex-col">
          <div className="container flex-1 mx-auto flex-col flex justify-center items-center">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                </span>
              </div>
              <div className="px-6 py-4">
                <p className="text-gray-700 text-base">
                </p>
                <p className="text-gray-700 text-base">
                </p>
              </div>
            </div>
          </div>
        </section>
      );

}

export default ProductPage;
