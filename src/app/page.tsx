import api from "@/lib/axios";
import PostCard from "./components/PostCard";
import { ArticleData } from "@/types";

export default async function Home() {
  const posts = (await api.get("/posts")).data;

  return (
    <div className="flex flex-col gap-2 items-center justify-center pt-3 font-sans dark:bg-black">
      {posts.map((post: ArticleData) => (
        <PostCard
          key={post._id}
          title={post.title}
          _id={post._id}
          author={post.author}
          createdAt={post.createdAt}
        />
      ))}
    </div>
  );
}
