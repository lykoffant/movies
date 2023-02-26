import { ErrorData, Res, ResStatus } from './common.types';

export enum SearchType {
  ALL = 'all',
  MOVIE = 'movie',
  SERIES = 'series',
  GAME = 'game',
}

type FoundItemType = Exclude<SearchType, SearchType.ALL>;

export interface FoundItemShortData {
  imdbID: string;
  Title: string;
  Year: string;
  Type: FoundItemType;
  Poster: string;
}

export interface FoundData extends Res {
  Response: ResStatus.TRUE;
  Search: FoundItemShortData[];
  totalResults: number;
}

export type ResData = FoundData | ErrorData;
