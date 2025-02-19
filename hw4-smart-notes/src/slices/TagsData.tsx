import { v4 } from "uuid";

export type TagType = {
  id: string;
  title: string;
  count: number;
};

export const initialTagsState: TagType[] = [
  { id: v4(), title: 'work', count: 0 },
  { id: v4(), title: 'shop', count: 0 },
  { id: v4(), title: 'health', count: 0 },
  { id: v4(), title: 'family', count: 0 },
  { id: v4(), title: 'friends', count: 0 },
];
