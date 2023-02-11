export enum SearchType {
  ALL = 'all',
  MOVIE = 'movie',
  SERIES = 'series',
  GAME = 'game',
}

enum FoundItemType {
  MOVIE = 'movie',
  SERIES = 'series',
  GAME = 'game',
}

export interface FoundItemShortData {
  imdbID: string;
  Title: string;
  Year: string;
  Type: FoundItemType;
  Poster: string;
}

export enum ResStatus {
  TRUE = 'True',
  FALSE = 'False',
}

interface Res {
  Response: ResStatus;
}

interface FoundData extends Res {
  Response: ResStatus.TRUE;
  Search: FoundItemShortData[];
  totalResults: number;
}

interface ErrorData extends Res {
  Response: ResStatus.FALSE;
  Error: string;
}

export type ResData = FoundData | ErrorData;
