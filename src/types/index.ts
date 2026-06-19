export type ArticleCard = {
  _id: string;
  title: string;
  author: string;
  createdAt: string;
};

export type ArticleData = ArticleCard & {
  content: string;
};
