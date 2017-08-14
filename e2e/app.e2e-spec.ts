import { MovieDbAppPage } from './app.po';

describe('movie-db-app App', () => {
  let page: MovieDbAppPage;

  beforeEach(() => {
    page = new MovieDbAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
