import { IBookmark } from "domain/models/Bookmark/Bookmark.entity";

export class Bookmark implements IBookmark {
  #solarSystemId: string;

  constructor(args: IBookmark) {
    this.#solarSystemId = args.solarSystemId;
  }

  public get solarSystemId() {
    return this.#solarSystemId;
  }
}
