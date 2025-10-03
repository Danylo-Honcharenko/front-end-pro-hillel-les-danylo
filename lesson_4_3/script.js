const date = new Date();

const yearOfBirth = prompt("Рік народження");
if (yearOfBirth === null) alert("Шкода, що Ви не захотіли ввести свою дату народження");
const cityOfResidence = prompt("Місто проживання");
if (cityOfResidence === null) alert("Шкода, що Ви не захотіли ввести своє місто");
const favoriteSport = prompt("Улюблений вид спорту");
if (favoriteSport === null) alert("Шкода, що Ви не захотіли ввести свій вид спорту");

const capitalAndCountry = [
    {capital: "Київ", country: "України"},
    {capital: "Вашингтон", country: "USA"},
    {capital: "Лондон", country: "Англії"}
];

const sportAndChampion = [
    {sport: "Футбол", champion: "Ліонель Мессі"},
    {sport: "Формула-1", champion: "Макс Ферстаппен"},
    {sport: "Бокс", champion: "Олександр Усик"}
];

const country = capitalAndCountry.find((capital) => capital.capital === cityOfResidence);
const champion = sportAndChampion.find((sport) => sport.sport === favoriteSport);

const message = `${yearOfBirth !== null ? `Ваш вік: ${date.getFullYear() - Number(yearOfBirth)}` : ""}
${cityOfResidence !== null ? country !== undefined ? `Ти живеш у столиці ${country.country}` : `Ти живеш у місті ${cityOfResidence}` : ""} 
${champion !== undefined ? `Круто! Хочеш стати ${champion.champion}?` : ""}`;

if (message.match("[a-z0-9]+")) alert(message);