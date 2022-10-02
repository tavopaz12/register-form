import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../register-form.js';

let elem;
let elemRoot;

beforeEach(async () => {
  elem = await fixture(html`<register-form></register-form>`);
  elemRoot = elem.shadowRoot;
});

describe('when a user wants to register', () => {
  it('Then the fields name, lastName, email, password, repeatPassword should be shown', () => {
    const name = elemRoot.querySelector('[data-testid="name"]');
    const lastName = elemRoot.querySelector('[data-testid="lastName"]');
    const email = elemRoot.querySelector('[data-testid="email"]');
    const password = elemRoot.querySelector('[data-testid="password"]');
    const repeatPassword = elemRoot.querySelector(
      '[data-testid="repeatPassword"]'
    );

    expect(name).to.not.equal(null);
    expect(lastName).to.not.equal(null);
    expect(email).to.not.equal(null);
    expect(password).to.not.equal(null);
    expect(repeatPassword).to.not.equal(null);
  });

  it('And fills the fields and submit the form, then the success message is shown', async() => {
    const register = elemRoot.querySelector('[data-testid="register"]');

    register.click();

    await elem.updateComplete;

    const success = elemRoot.querySelector('[data-testid="success"]');
    expect(success.textContent).to.not.empty;
  });
});
