class Menu extends HTMLElement {
    static observedAttributes = ["prop"];
    constructor() {
        super();
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        fetch('/components/Menu/Menu.html')
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                if (newValue == "header"){
                    const elementToRemove = doc.getElementsByClassName("menu__info_align_footer");
                    elementToRemove[0]?.remove();
                    this.innerHTML =  doc.body.innerHTML;
                }
                if (newValue == "footer") { 
                    const elementToRemove = [doc.getElementsByClassName("menu__info_align_header"), doc.getElementsByName("menuLinkSale")];
                    elementToRemove[0][0].remove();
                    elementToRemove[1][0].remove();
                    this.innerHTML =  doc.body.innerHTML;
                }
            })     
    }
}
// Логика создания этого кода)) была такая:
// Элементы можно переиспользовать. Template не подходит т.к. он занимает DOM когда не используется.
// Можно было бы вставлять верстку напрямую innerHTML = `<div></div>` но такой формат не удобен в редактировании. Поэтому был выбран вариант импорта
// Парсить отдельные элементы не очень хорошая идея, но по другому я не нашел как это сдеалать адекватно.

// Задумываюсь чтоб через кастомные элементы отрисовывать отдельные страницы(не используя схему по типу <a href="katalog.html")>, но не знаю насколько это хорошая идея.
customElements.define('menu-component', Menu);