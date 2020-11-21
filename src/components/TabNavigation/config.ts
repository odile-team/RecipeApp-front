export type Index = 'Recettes' | 'Chercher' | 'Liste' | 'Profile' | string;
type FromIndex = { [k in Index]: string };

export const icons: FromIndex = {
  Recettes: 'silverware-fork-knife',
  Chercher: 'magnify',
  Liste: 'format-list-bulleted',
  Profile: 'account',
};
