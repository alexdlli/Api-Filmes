export class Image {
  private _poster_path: string;
  private _image: string;

  constructor(poster_path: string) {
    this._poster_path = poster_path;
    this._image = `${
      process.env.NEXT_PUBLIC_IMAGE_BASE_URL as string
    }${poster_path}`;
  }

  get poster_path(): string {
    return this._poster_path;
  }

  get image(): string {
    return this._image;
  }
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  image: string;
  release_date: string;
}

export interface Movies {
  results: Movie[];
}
