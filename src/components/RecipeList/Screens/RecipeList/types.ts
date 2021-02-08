export type RecipeListProps = {
  navigation: any;
  data: RecipeProps[];
  sendRoute?: Function;
};

type RecipeProps = {
  title: string;
  desc: string;
  uri: string;
  isLiked: boolean;
};
