class Menu extends HTMLElement {
  constructor() {
    super();
}

connectedCallback() {
    fetch('/components/menu/menu.html')
        .then(response => response.text())
        .then(html => this.innerHTML =  html)
    }
    
}
customElements.define('menu-component', Menu);