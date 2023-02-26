export enum ResStatus {
  TRUE = 'True',
  FALSE = 'False',
}

interface Res {
  Response: ResStatus;
}

interface Rating {
  Source: string;
  Value: string;
}

export interface DetailedData {
  Response: ResStatus.TRUE;
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
}

interface ErrorData extends Res {
  Response: ResStatus.FALSE;
  Error: string;
}

export type ResDetailedData = DetailedData | ErrorData;
