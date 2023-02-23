interface ICell {
  flipCellsAroundMe: Function;
  isLit: boolean;
}

interface IBoard {
  nrows: number;
  ncols: number;
  chanceLightStartsOn: number;
}

export type { ICell, IBoard };