export type CategoriesProps = {
  categories: Category[];
  navigate: Function;
};

type Category = {
  title: string;
  uri: string;
};
