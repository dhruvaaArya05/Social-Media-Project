import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {

  const { deletePost } = useContext(PostList);

  return <div className="card postCard" style={{ width: "18rem" }}>
    <div className="card-body">
      <h5 className="card-title">{post.title}
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => { deletePost(post.id) }}>
          <AiFillDelete></AiFillDelete>
        </span>
      </h5>
      <p className="card-text">{post.body}</p>
      {post.tags.map((tag) => <span key={tag} className="badge rounded-pill text-bg-primary hastag">{tag}</span>)}
      <div className="alert alert-success reactions" role="alert">
        This Post has been reacted by {post.reactions.likes} people.
      </div>
    </div>
  </div>
}

export default Post;