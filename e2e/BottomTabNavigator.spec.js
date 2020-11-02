import { reloadApp } from 'detox-expo-helpers';

describe('BottomTabNavigator e2e tests', () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it('should test bottom nav screen navigator', async () => {
    await new Promise((r) => setTimeout(r, 1000));
    await expect(element(by.id('SearchButton'))).toBeVisible();
    await element(by.id('SearchButton')).tap();
    await expect(element(by.id('GroceryButton'))).toBeVisible();
    await element(by.id('GroceryButton')).tap();
    await expect(element(by.id('ProfileButton'))).toBeVisible();
    await element(by.id('ProfileButton')).tap();
    await expect(element(by.id('RecipeButton'))).toBeVisible();
    await element(by.id('RecipeButton')).tap();
  });
});
