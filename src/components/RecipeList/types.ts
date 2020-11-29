export type ListRecipeProps = {
  navigation: any;
};

export type NavigatorProps = {
  data: RecipeProps[];
  getRoute?: Function;
};

type RecipeProps = {
  title: string;
  desc: string;
  uri: string;
  isLiked: boolean;
};

export type TitlesType = 'Matin' | 'Midi' | 'Snack' | 'Soir' | string;
export type TitlesTypesFromIndex = { [k in TitlesType]: string };
