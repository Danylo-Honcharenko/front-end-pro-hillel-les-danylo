const date = new Date();

const yearOfBirth = prompt("Рік народження");
if (yearOfBirth === null) alert("Шкода, що Ви не захотіли ввести свою дату народження");
const cityOfResidence = prompt("Місто проживання");
if (cityOfResidence === null) alert("Шкода, що Ви не захотіли ввести своє місто");
const favoriteSport = prompt("Улюблений вид спорту");
if (favoriteSport === null) alert("Шкода, що Ви не захотіли ввести свій вид спорту");

const capitalAndCountry = new Map();
capitalAndCountry.set("Київ", "України");
capitalAndCountry.set("Вашингтон", "USA");
capitalAndCountry.set("Лондон", "Англії");

const sportAndChampion = new Map();
sportAndChampion.set("Футбол", "Ліонель Мессі");
sportAndChampion.set("Формула-1", "Макс Ферстаппен");
sportAndChampion.set("Бокс", "Олександр Усик");

const country = capitalAndCountry.get(cityOfResidence);
const champion = sportAndChampion.get(favoriteSport);

const message = `${yearOfBirth !== null ? `Ваш вік: ${date.getFullYear() - Number(yearOfBirth)}` : ""}
${cityOfResidence !== null ? country !== undefined ? `Ти живеш у столиці ${country}` : `Ти живеш у місті ${cityOfResidence}` : ""} 
${champion !== undefined ? `Круто! Хочеш стати ${champion}?` : ""}`;

if (message.match("[a-z0-9]+")) alert(message);