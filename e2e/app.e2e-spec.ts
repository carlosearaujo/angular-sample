import { PacientePage } from './app.po';

describe('paciente App', () => {
  let page: PacientePage;

  beforeEach(() => {
    page = new PacientePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
