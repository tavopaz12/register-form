/* eslint-disable lit-a11y/anchor-is-valid */
/* eslint-disable no-useless-constructor */
/* eslint-disable arrow-body-style */
import { css, html, LitElement } from 'lit';

export class RegisterForm extends LitElement {
  static get properties() {
    return {
      isSucceed: {
        type: Boolean,
      },
    };
  }

  static get styles() {
    return css`
      .alert {
        font-weight: bold;
        width: 300px;
        padding: 3px;
        position: relative;
        border-radius: 5px;
      }
      .success-alert {
        background-color: #a8f0c6;
      }
    `;
  }

  constructor() {
    super();
    this.isSucceed = false;
  }

  render() {
    return html`
      ${this.isSucceed
        ? html`
            <div class="alert success-alert">
              <p>Usuario Registrado, exitosamente!</p>
            </div>
            <br>
          `
        : null}
      <form @submit=${this.onSubmit}>
        <label>
          <span>Ingresa tu nombre</span>
          <input type="text" data-testid="name" placeholder="Nombre" />
        </label>
        <pre></pre>
        <label>
          <span>Ingresa tus apellidos</span>
          <input type="text" data-testid="lastName" placeholder="Apellidos" />
        </label>
        <pre></pre>
        <label>
          <span>Ingresa tu correo electronico</span>
          <input
            type="email"
            data-testid="email"
            placeholder="example@hotmail.com"
          />
        </label>
        <pre></pre>
        <label>
          <span>Ingresa tu contraseña</span>
          <input
            type="password"
            data-testid="password"
            placeholder="Ingresa una contraseña segura"
          />
        </label>
        <pre></pre>
        <label>
          <span>Repite tu contraseña</span>
          <input
            type="password"
            data-testid="repeatPassword"
            placeholder="Repite tu contraseña"
          />
        </label>
        <pre></pre>
        <button data-testid="register">Registrarme</button>
      </form>
    `;
  }

  onSubmit(e) {
    e.preventDefault();
    this.isSucceed = true;
  }
}
