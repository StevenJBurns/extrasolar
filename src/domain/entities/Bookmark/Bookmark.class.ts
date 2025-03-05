import { IBookmark } from "@domain/Bookmark/Bookmark.entity";

export class Bookmark implements IBookmark {
  #solarSystemId: string;

  private constructor(args: IBookmark) {
    this.#solarSystemId = args.solarSystemId;
  }

  static create() {
    console.log('creating bookmark...');
  }

  public get solarSystemId() {
    return this.#solarSystemId;
  }
}
