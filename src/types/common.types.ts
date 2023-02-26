export enum ResStatus {
  TRUE = 'True',
  FALSE = 'False',
}

export interface Res {
  Response: ResStatus;
}

export interface ErrorData extends Res {
  Response: ResStatus.FALSE;
  Error: string;
}
