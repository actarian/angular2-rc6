import { A2rc6Page } from './app.po';

describe('a2rc6 App', function() {
  let page: A2rc6Page;

  beforeEach(() => {
    page = new A2rc6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
