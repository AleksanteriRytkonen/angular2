import { ArPage } from './app.po';

describe('ar App', function() {
  let page: ArPage;

  beforeEach(() => {
    page = new ArPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
