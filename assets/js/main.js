/*
Lista Cognomi
Chiedere all'utente il cognome
Inserirlo in un array con altri cognomi:
‘Bianchi', ‘Rossi', ‘Duzioni', ‘Balsano', ‘Verdi'
Stampa la lista ordinata alfabeticamente
Scrivi anche la posizione "umana" della lista in cui
il nuovo utente si trova
*/

var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
//var cognomeUtente = prompt("inserisci il tuo cognome");

var btnInvia = document.getElementById('invia');

btnInvia.addEventListener("click", function() {

  var cognomeUtente = document.getElementById('cognome_utente').value;
  console.log(cognomeUtente);

  // Capitalizzazione del cognome
  var cognomeUtenteCapitalized = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1);
  console.log(cognomeUtenteCapitalized);

  var x = listaCognomi.length;
  listaCognomi[x] = cognomeUtenteCapitalized;
  listaCognomi.sort();
  console.log(listaCognomi);

  var j = 1;

  for (var i = 0; i < listaCognomi.length; i++) {


    var item = listaCognomi[i];
    var contenutoLista = document.getElementById('lista_cognomi').innerHTML;
    document.getElementById('lista_cognomi').innerHTML = contenutoLista + "<li>" + item + "</li>";

    if (listaCognomi[i] == cognomeUtenteCapitalized) {
      document.getElementById('posizione_cognome_utente').innerHTML = "Posizione utente nella lista " + j;
      console.log("Posizione utente nella lista " + j);
    }
    j++;
  }

});
