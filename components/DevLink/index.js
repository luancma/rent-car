// web-component vanilla
class DevLink extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }

cssBlock = `
    .dev-reference {
        text-decoration: none;
        color: white;
        font-weight: 700;
    }
    .dev-reference:hover,
    .dev-reference:focus,
    .dev-reference:active,
    .dev-reference:visited {
        text-decoration: underline;
        color: white;
        font-weight: 700;
        text-shadow: var(--default-shadow);
        font-size: 18px;
    }
`;

htmlBlock = `
    <div class="col-12 d-flex justify-content-center">
        <p class="text-center">
            © - Todos os direitos reservados
            <br />
            Desenvolvido por
            <a target="_blank" class="dev-reference" href="
        https://www.linkedin.com/in/luancma/
        ">Luan CMA</a>
        </p>
    </div>
`;

  render() {
    this.shadowRoot.innerHTML = `${this.cssBlock} ${this.htmlBlock}`;
  }
}

customElements.define("dev-link", DevLink);

