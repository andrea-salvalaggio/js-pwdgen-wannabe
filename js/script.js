// Chiedi all'utente il suo nome
const userName = prompt("Inserisci il tuo nome");
console.log(userName);
document.getElementById("user-name").innerHTML = userName;

// Chiedi all'utente il suo cognome
const userSurname = prompt("Inserisci il tuo cognome");
console.log(userSurname);
document.getElementById("user-surname").innerHTML = userSurname;

// Chiedi all'utente il suo colore preferito
const userFavColor = prompt("Inserisci il tuo colore preferito");
console.log(userFavColor);
document.getElementById("user-favcolor").innerHTML = userFavColor;

// Password generata
const userPwd = userName + userSurname + userFavColor + 22;
console.log(userPwd);
document.getElementById("user-pwd").innerHTML = userPwd;