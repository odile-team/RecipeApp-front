import { reloadApp } from 'detox-expo-helpers';
// import { SignUpText, LoginText } from '../src/containers/LoginScreen/config';

//TODO: tester les écrans pour vérifier si on est sur le bon, soit avec les textes, soit avec le useState
//TODO: Changer la structure de test et les placers dans les bons dossiers
describe('testLoginFlow', () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it('should have login/signup screen', async () => {
    await expect(element(by.id('LoginTestId'))).toBeVisible();
    // await expect(element(by.label(LoginText.title))).toBeVisible();
  });

  it('should change from login to signup', async () => {
    await expect(element(by.id('LoginTestId'))).toBeVisible();
    await new Promise((r) => setTimeout(r, 1000));
    await element(by.id('switchLoginScreen')).tap();
    // await expect(element(by.id('LoginTitle')))
    //   .toBeVisible()
    //   .toHaveText(SignUpText.title);
  });

  it('should press login button from login page', async () => {
    await expect(element(by.id('LoginTestId'))).toBeVisible();
    await element(by.id('validateButton')).tap();
    await new Promise((r) => setTimeout(r, 1000));
  });

  it('should press sign up button from signup page', async () => {
    await expect(element(by.id('LoginTestId'))).toBeVisible();
    await new Promise((r) => setTimeout(r, 1000));
    await element(by.id('switchLoginScreen')).tap();
    await new Promise((r) => setTimeout(r, 1000));
    await element(by.id('validateButton')).tap();
    await new Promise((r) => setTimeout(r, 1000));
  });
});
