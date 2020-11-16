export type ListRecipeProps = {
  navigation: any;
};

export type NavigatorProps = object;

export type TitlesType = 'Matin' | 'Midi' | 'Snack' | 'Soir' | string;
export type TitlesTypesFromIndex = { [k in TitlesType]: string };
