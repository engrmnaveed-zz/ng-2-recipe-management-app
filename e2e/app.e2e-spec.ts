import { RecipeManagementPage } from './app.po';

describe('recipe-management App', () => {
  let page: RecipeManagementPage;

  beforeEach(() => {
    page = new RecipeManagementPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
