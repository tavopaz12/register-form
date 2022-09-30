/* eslint-disable no-useless-constructor */
/* eslint-disable arrow-body-style */
import { html, LitElement } from 'lit';

export class RegisterForm extends LitElement {

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
    `;
  }
}
