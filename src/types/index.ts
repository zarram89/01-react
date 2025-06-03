export type Machine = {
  percentage: number,
  operator: string,
  isFirst?: boolean,
};

export type ProgressCircleProps = {
  percentage: number,
  isFirst?: boolean,
};

export type RecordProps = {
  machine: string;
  operator: string;
  reason: string | null;
}