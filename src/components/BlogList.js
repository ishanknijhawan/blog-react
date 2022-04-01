import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <Link to={`/blogs/${blog.id}`}>
          <div className="blog-preview" key={blog.key}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
