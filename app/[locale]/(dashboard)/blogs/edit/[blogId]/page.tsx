import React from 'react'
import EditBlogForm from '../../../../../components/shared/EditBlogForm'
import { getBlogByID } from '../../../../../api/api'

async function BlogEdit({params: {blogId}}: {params: {blogId: string}}) {
    const blog = await getBlogByID(Number(blogId))
  return (
    <EditBlogForm blog={blog} />
  )
}

export default BlogEdit