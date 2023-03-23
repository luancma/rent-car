// create a webcomponent structure
class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }

  cssBlock = ` 
  <style>
  footer {
      position: relative;
      height: 300px;
      background-color: #FAFAFA;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 2;
      color: white;
  }

  .footer-background {
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 100%);
      background-color: #D50000;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
  }

  .footer-content {
      max-width: var(--desktop-container-width);
      margin: auto;
      z-index: 4;
      color: white;
  }

  .social-icon--group {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin: 1rem 0;
  }

  .social-icon {
      color: white;
  }

  .wpp-wrapper {
      width: 56px;
      height: 56px;
      position: relative;
  }

  .wpp-wrapper img {
      position: absolute;
      width: 56px;
      height: 56px;
      ;
  }

  .email-buttom-wrapper {
      grid-area: email;
      margin-top: 3rem !important;
  }
</style>
    `;

  htmlBlock = `
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css"
  integrity="sha256-XoaMnoYC5TH6/+ihMEnospgm0J1PM/nioxbOUdnM8HY=" crossorigin="anonymous" />

  <footer>
  <div class="footer-background"></div>

  <div class="footer-content">
      <dev-link></dev-link>
      <div class="social-icon--group">
          <!-- facebook icon -->
          <a class="social-icon" href="https://www.facebook.com/luiz.fernando.5810" target="_blank"><i
                  class="fa fa-facebook-square fa-3x" aria-hidden="true"></i></a>
          <!-- instagram icon -->
          <a class="social-icon" href="https://www.instagram.com/luizfernando_oliveira/" target="_blank"><i
                  class="fa fa-instagram fa-3x" aria-hidden="true"></i></a>
          <!-- linkedin icon -->
          <a class="social-icon" href="https://www.linkedin.com/in/luiz-fernando-oliveira-oliveira-0b1b3b1b3/"
              target="_blank"><i class="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a>
      </div>
  </div>
</footer>
  `;

  render() {
    this.shadowRoot.innerHTML = `${this.cssBlock} ${this.htmlBlock}`;
  }
}

// register the webcomponent
customElements.define("app-footer", Footer);
