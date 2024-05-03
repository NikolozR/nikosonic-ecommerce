async function getBlog(id: string) {
  const res = await fetch("https://dummyjson.com/posts/" + id);
  const data = await res.json();
  return data;
}

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();
  const posts = data.posts;
  return posts.map((post: Blog) => ({
    id: JSON.stringify(post.id),
  }));
}

async function BlogPost({ params: {id} }: {params: {id: string}}) {
  const blog: Blog = await getBlog(id)

    return (
      <section className="flex-1 flex flex-col">
        <div className="container flex-1 mx-auto flex-col flex justify-center items-center">
          <div className="max-w-[70ch] flex flex-col justify-center bg-white rounded-xl shadow-md overflow-hidden">
            <div className="">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {blog?.tags.map((tag) => (
                    <span key={tag} className="mr-2">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                  {blog?.title}
                </p>
                <p className="mt-2 text-gray-500">{blog?.body}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        Posted by User {blog?.userId}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="h-6 w-6 fill-current text-gray-600 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.127 18.2c-.94 1.4-3.112 1.4-4.051 0L1.317 10.4C.44 9.1.903 7.4 2.32 7.4h15.36c1.417 0 1.88 1.7.903 3L11.127 18.2z"
                      />
                    </svg>
                    <span className="text-gray-600">{blog?.reactions}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default BlogPost;
