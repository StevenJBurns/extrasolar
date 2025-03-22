import { IBookmark } from './Bookmark.entity';

export interface IBookmarkStore {
  list: Array<IBookmark>;
  add: () => void;
  remove: (id: string) => void;
  update: (id: string, values: []) => void;
}
