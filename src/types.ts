// types.ts
interface IRequestParams {
  category: string;
  fields: Array<Field>;
}

type Field = keyof DataItem;

type FileAttachment = {
  url: string;
  mediaType: "image/jpeg" | "image/png";
};

type DataItem = {
  headline: string;
  content: string;
  publishedDate: string;
  link: string;
  author: string;
  attachment: FileAttachment;
};

type ApiResponse = {
  status: string;
  feedData: object;
  articles: DataItem[];
};

export { IRequestParams, ApiResponse, Field };
