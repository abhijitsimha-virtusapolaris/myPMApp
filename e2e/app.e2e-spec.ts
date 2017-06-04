import { MyPMAppPage } from './app.po';

describe('my-pmapp App', function() {
  let page: MyPMAppPage;

  beforeEach(() => {
    page = new MyPMAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
