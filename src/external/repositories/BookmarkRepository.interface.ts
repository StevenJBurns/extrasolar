export interface BookmarkRepository {
  save(): void;
  fetch(): Array<string>;
};
