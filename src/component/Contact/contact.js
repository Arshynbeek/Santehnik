const addressData = [
  {
    city: "Алматы (Office)",
    address: "ул.Шевченко 165В, 7 этаж, 703 офис",
    number: "+7 771 731 28 48",
    email: "info@santehtat.kz",
  },
  {
    city: "Алматы",
    address: "ул.Немировича-Данченко 18А",
    number: "+7 701 300 54 02",
    email: "almaty@santehtat.kz",
  },
  {
    city: "Астана",
    address: "ул.Жана-Жол, дом 2, офис 1",
    number: "+7 701 300 54 14",
    email: "astana@santehtat.kz",
  },
  {
    city: "Орал",
    address: "ул.Молдагулова 26ПБ, 1 этаж",
    number: "+7 771 788 88 91",
    email: "oral@santehtat.kz",
  },
  {
    city: "Атырау",
    address: "трасса Атырау-Доссор 34",
    number: "+7 771 565 53 35",
    email: "atyrau@santehtat.kz",
  },
  {
    city: "Актау",
    address: "мкр 29, ул.Толкын 2, 17А",
    number: "+7 701 081 86 18",
    email: "aktau@santehtat.kz",
  },
  {
    city: "Кандыагаш",
    address: 'Рынок "Алан", 1 этаж',
    number: "+7 701 081 86 15",
    email: "aktobe@santehtat.kz",
  },
  {
    city: "Шымкент",
    address: '',
    number: "+7 701 300 54 10",
    email: "shymkent@santehtat.kz",
  },
  {
    city: "Актобе",
    address: 'пр-т 312 Стрелковой Дивизии 5Г, 1 этаж',
    number: "+7 701 300 53 78",
    email: "aktobe@santehtat.kz",
  },
];
const contact = document.querySelector(".shop");

for (const address of addressData) {
  contact.innerHTML += `
    <div class="card">
      <div class="content">
        <p class="info">
          <?xml version="1.0" ?>
          <svg height="24px" version="1.1" viewBox="0 0 20 19" width="24px" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title/>
            <desc/>
            <defs/>
            <g fill="var(--primary-color)" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
              <g fill="var(--primary-color)" id="Core" transform="translate(-506.000000, -255.000000)">
                <g id="home" transform="translate(506.000000, 255.500000)">
                  <path d="M8,17 L8,11 L12,11 L12,17 L17,17 L17,9 L20,9 L10,0 L0,9 L3,9 L3,17 L8,17 Z" id="Shape"/>
                </g>
              </g>
            </g>
          </svg>
          Город
        </p>
        <p>${address.city}</p>
      </div>
      <div class="content">
        <p class="info">
          <?xml version="1.0" ?>
          <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <rect fill="none" height="24" width="24"/>
            <path d="M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.2,83.4,134.6a8.3,8.3,0,0,0,9.2,0C136,236.2,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z" fill="var(--primary-color)"/>
          </svg>
          Адрес
        </p>
        <a href="https://2gis.kz/almaty/search/${address.address}">
          ${address.address}
        </a>
      </div>
      <div class="content">
        <p class="info">
          <?xml version="1.0" ?>
          <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h48v48h-48z" fill="none"/>
            <path d="M13.25 21.59c2.88 5.66 7.51 10.29 13.18 13.17l4.4-4.41c.55-.55 1.34-.71 2.03-.49 2.24.74 4.65 1.14 7.14 1.14 1.11 0 2 .89 2 2v7c0 1.11-.89 2-2 2-18.78 0-34-15.22-34-34 0-1.11.9-2 2-2h7c1.11 0 2 .89 2 2 0 2.49.4 4.9 1.14 7.14.22.69.06 1.48-.49 2.03l-4.4 4.42z" fill="var(--primary-color)"/>
          </svg>
          Контакты
        </p>
        <a href="tel:${address.number}">${address.number}</a>
        <a href="mailto:${address.email}">${address.email}</a>
      </div>
    </div>
  `;
}
