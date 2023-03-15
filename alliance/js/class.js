class ManufacturingItem {
    constructor(title, descr, src, alt, parentSelector) {
        this.title = title;
        this.descr = descr;
        this.src = src;
        this.alt = alt;
        this.parent = document.querySelector(parentSelector);
    }
    render() {
        const element = document.createElement('a');
        element.className = "manufacturing__item";
        element.setAttribute = ('href', '#');
        element.innerHTML = `
            <h3 class="manufacturing__item-title">${this.title}</h3>
            <p class="manufacturing__item-text">${this.descr}</p>
            <img src=${this.src} alt="${this.alt}" class="manufacturing__item-img" width="480" height="300">
        `;
        this.parent.append(element);
    }
};

new ManufacturingItem(
    "Автомобильная химия",
    "Безусловно, сплочённость команды профессионалов позволяет оценить значение форм воздействия.",
    "img/avto-him.png",
    "Автомобильная химия",
    ".manufacturing__wrapper",

).render()
