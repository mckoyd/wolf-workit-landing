interface ISellingPoint {
  sellingPointTitle: string;
  sellingPointDescription: string;
}

interface ISellingPointContainer extends ISellingPoint {
  index: number;
}

export { ISellingPointContainer, ISellingPoint };
