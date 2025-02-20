import { v4 } from "uuid";

export type TagType = {
  id: string;
  title: string;
  count: number;
  toEdit?:boolean;
};


