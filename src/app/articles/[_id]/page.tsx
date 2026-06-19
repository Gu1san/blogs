import api from "@/lib/axios";
import { ArticleData } from "@/types";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export default async function Article({
  params,
}: {
  params: Promise<{ _id: string }>;
}) {
  const { _id } = await params;
  const post: ArticleData = (await api.get(`/posts/${_id}`)).data;
  const { title, author, createdAt, content } = post;

  return (
    <article className="p-3">
      <h1 className="font-bold text-2xl mb-1">{title}</h1>
      <p className="mb-3">
        <span className="italic">{author}</span> | {createdAt}
      </p>
      <p>{content}</p>
    </article>
  );
}
