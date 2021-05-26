import axios from "axios";

export default async function getPosts(setPosts) {
  const POSTS_EP = `${process.env.REACT_APP_BACKEND_URL}/posts`;
  const result = await axios.get(POSTS_EP);
  console.log(result);
  setPosts(result.data.data);
}
