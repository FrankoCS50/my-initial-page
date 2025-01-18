document.addEventListener('DOMContentLoaded', function () {
    const nomeUtenteSpan = document.getElementById('nome-utente');
    const fraseCasualeSpan = document.getElementById('frase-casuale');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const backgroundUpload = document.getElementById('background-upload');
    const shareQuoteButton = document.getElementById('share-quote-button');

    // Modal for User Name Input
    const modalHTML = `
        <div id="name-modal" class="modal">
            <div class="modal-content">
                <h2>Inserisci il tuo nome</h2>
                <input type="text" id="name-input" placeholder="Scrivi il tuo nome qui...">
                <button id="save-name-button">Salva</button>
            </div>
        </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    const modal = document.getElementById('name-modal');
    const saveNameButton = document.getElementById('save-name-button');
    const nameInput = document.getElementById('name-input');

    function openModal() {
        modal.style.display = 'flex';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    // Get or Set User Name
    function getNomeUtente() {
        let nome = localStorage.getItem('nomeUtente');
        if (!nome) {
            openModal();
        } else {
            mostraBenvenuto(nome);
        }
    }

    saveNameButton.addEventListener('click', () => {
        const nome = nameInput.value.trim();
        if (nome) {
            localStorage.setItem('nomeUtente', nome);
            mostraBenvenuto(nome);
            closeModal();
        }
    });

    // Display Welcome Message
    function mostraBenvenuto(nome) {
        nomeUtenteSpan.textContent = nome;
    }

    // Display a Random Quote
    function mostraFraseCasuale() {
        fetch('agostino_quotes.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Errore HTTP! Stato: ${response.status}`);
                }
                return response.json();
            })
            .then(quotes => {
                if (!quotes || quotes.length === 0) {
                    throw new Error('File JSON vuoto o non valido.');
                }
                const fraseCasuale = quotes[Math.floor(Math.random() * quotes.length)];
                fraseCasualeSpan.textContent = `"${fraseCasuale.text}" - ${fraseCasuale.author}`;
            })
            .catch(error => {
                console.error('Errore nel caricamento delle citazioni:', error);
                fraseCasualeSpan.textContent =
                    'Errore nel caricamento delle citazioni. Controlla la console per maggiori dettagli.';
            });
    }

    // Dark Mode Toggle
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });


    // Share Quote Button
    shareQuoteButton.addEventListener('click', () => {
        const quoteText = fraseCasualeSpan.textContent;
        if (navigator.share) {
            navigator
                .share({
                    title: 'Citazione del Giorno',
                    text: quoteText,
                })
                .then(() => console.log('Quote shared successfully!'))
                .catch((error) => console.error('Error sharing quote:', error));
        } else {
            alert('La condivisione non è supportata su questo dispositivo.');
        }
    });

    // Initialize Page
    getNomeUtente();
    mostraFraseCasuale();
});