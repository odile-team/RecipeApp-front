export interface RecipeStepsProps {
  steps: RecipeStepType[];
  position: number;
}

export type RecipeStepType = {
  order: number;
  step: string;
};
