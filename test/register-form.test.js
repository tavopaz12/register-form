import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../register-form.js';

describe('RegisterForm', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture(html`<register-form></register-form>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture(html`<register-form></register-form>`);
    el.shadowRoot.querySelector('button').click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture(html`<register-form title="attribute title"></register-form>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`<register-form></register-form>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
