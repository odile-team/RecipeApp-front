export interface IngredientsProps {
  ingredients: IngredientsType[];
  position: number;
}

export type IngredientsType = {
  quantity: number;
  unit: string;
  name: string;
};
