import Button from "./Button"
import '../styles/Blog.scss'


function Blog({title, description, image, date}) {
  return (
    <div className="blog-card">
    <img src={image} alt={title} />
    <div className="blog-card-content">
        <h2 className="blog-card-title">{title}</h2>
        <p className="blog-card-description">{description}</p>
        <p className="blog-card-date">{date}</p>
        <Button>Read More</Button>
    </div>
</div>
  )
}

export default Blog