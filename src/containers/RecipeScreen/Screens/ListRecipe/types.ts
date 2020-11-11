export type ListRecipeProps = {
  navigation: any;
};

export type NavigatorProps = object;

export type TitlesType = 'Breakfast' | 'Lunch' | 'Snack' | 'Diner' | string;
export type TitlesTypesFromIndex = { [k in TitlesType]: string };
