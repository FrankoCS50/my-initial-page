document.addEventListener('DOMContentLoaded', function() {
  const nomeUtenteSpan = document.getElementById('nome-utente');
  const fraseCasualeSpan = document.getElementById('frase-casuale');

  // Funzione per ottenere il nome utente da localStorage o richiederlo
  function getNomeUtente() {
      let nome = localStorage.getItem('nomeUtente');
      if (!nome) {
          nome = prompt("Inserisci il tuo nome:");
          if (nome) {
              localStorage.setItem('nomeUtente', nome);
          } else {
              nome = "utente";
          }
      }
      return nome;
  }

  // Funzione per mostrare il messaggio di benvenuto
  function mostraBenvenuto(nome) {
      nomeUtenteSpan.textContent = nome;
  }

  // Funzione per mostrare una frase casuale
  function mostraFraseCasuale() {
      fetch('agostino_quotes.json')
          .then(response => {
              if (!response.ok) {
                  throw new Error(`Errore HTTP! Stato: ${response.status}`); // Gestione degli errori HTTP
              }
              return response.json();
          })
          .then(quotes => {
              if (!quotes || quotes.length === 0) {
                  throw new Error("File JSON vuoto o non valido."); // Gestione del caso di file vuoto
              }
              const fraseCasuale = quotes[Math.floor(Math.random() * quotes.length)];
              fraseCasualeSpan.textContent = `"${fraseCasuale.text}" - ${fraseCasuale.author}`;
          })
          .catch(error => {
              console.error("Errore nel caricamento delle citazioni:", error);
              fraseCasualeSpan.textContent = "Errore nel caricamento delle citazioni. Controlla la console per maggiori dettagli.";
          });
  }

  const nome = getNomeUtente();
  mostraBenvenuto(nome);
  mostraFraseCasuale();
});