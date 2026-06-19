import { ArticleCard } from "@/types";
import Link from "next/link";

const PostCard = ({ title, author, createdAt, _id }: ArticleCard) => {
  return (
    <div className="flex bg-gray-50 rounded-2xl shadow p-4 w-1/2 hover:bg-gray-100 transition ease-in-out delay-75">
      <Link href={`/articles/${_id}`}>
        <h1 className="font-bold py-1">{title}</h1>
        <p>
          {author} | {createdAt}
        </p>
      </Link>
    </div>
  );
};

export default PostCard;
