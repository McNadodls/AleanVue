class SectionSale extends HTMLElement {
    static observedAttributes = ["prop"];
    constructor() {
        super();
    }
    
    connectedCallback() {
        fetch('/components/SectionSale/SectionSale.html')
            .then(response => response.text())
            .then(html => this.innerHTML = html)     
    }
}

customElements.define('section-sale-component', SectionSale);