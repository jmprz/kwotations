let quotesData = []; // This will store our fetched quotes
let quoteCards = []; // This will store the dynamically created quote card elements
let currentQuoteIndex = -1; // Initialize with no quote displayed

// Get DOM elements
const quotesContainer = document.getElementById('quotes');
const startBtn = document.getElementById('start');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const copiedTextElement = document.getElementById("copied"); // Get this once

// Function to copy a quote by its index
function copyQuote(index) {
    if (quotesData[index]) {
        const quoteToCopy = `“${quotesData[index].quote}” — ${quotesData[index].author}`;
        navigator.clipboard.writeText(quoteToCopy)
            .then(() => {
                copiedTextElement.innerHTML = 'Copied Successfully! <i class="fa-solid fa-circle-check"></i>';
                const color = quotesData[index].color;
                // Remove all potential color classes before adding the new one
                copiedTextElement.classList.remove('text-green-600', 'text-red-600', 'text-orange-600', 'text-amber-600', 'text-lime-600', 'text-teal-600', 'text-blue-600', 'text-indigo-600', 'text-purple-600', 'text-pink-600');
                copiedTextElement.classList.add(`text-${color}-600`); // Add color based on quote
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
                copiedTextElement.innerHTML = 'Failed to copy! <i class="fa-solid fa-circle-xmark"></i>';
                copiedTextElement.classList.remove('text-green-600');
                copiedTextElement.classList.add('text-red-600');
            });
    }
}

// Function to clear the copied message
function copiedClick() {
    copiedTextElement.innerHTML = "";
    copiedTextElement.className = 'flex items-center text-lg sm:text-xl font-semibold'; // Reset classes
}

// Function to hide all quotes
function hideAllQuotes() {
    quoteCards.forEach(card => {
        card.style.display = 'none'; // Simply hide the card
        // No need to remove absolute positioning here, as cards won't be absolute anymore
    });
}

// Function to show a specific quote
function showQuote(index) {
    hideAllQuotes();
    if (quoteCards[index]) {
        quoteCards[index].style.display = 'flex'; // Show the selected card
        // No need to add absolute positioning here
    }
    currentQuoteIndex = index;
}

// Function to generate quote cards from JSON data
function generateQuoteCards(data) {
    quotesContainer.innerHTML = ''; // Clear loading message

    data.forEach((quote, index) => {
        const quoteCard = document.createElement('div');
        // IMPORTANT: Removed 'absolute', 'inset-0' from here
        quoteCard.classList.add(
            'quote-card', 'bg-white', 'shadow-xl', 'rounded-3xl', 'p-6', 'sm:p-8',
            'mx-auto', 'w-full', 'flex', 'flex-col', 'justify-between',
            'items-center', 'text-center', 'cursor-pointer', 'transform',
            'transition-all', 'duration-300', 'ease-in-out', 'hover:scale-105'
        );
        quoteCard.setAttribute('data-color', quote.color); // Store color for copied message

        // Add a min-height directly to the quote card to ensure it's not too small
        // This will allow it to grow beyond this height if the content is larger
        quoteCard.classList.add('min-h-[250px]'); // Or adjust to your preferred minimum

        quoteCard.innerHTML = `
            <div class="text-4xl sm:text-5xl font-bold text-${quote.color}-500 mb-2">•••</div>
            <p onclick="copyQuote(${index})" onmouseout="copiedClick()" class="text-2xl sm:text-3xl lg:text-4xl leading-relaxed font-medium">
                ❝${quote.quote}❞ <br>
                <span class="block mt-4 text-base sm:text-xl">— ${quote.author}</span>
            </p>
        `;
        quotesContainer.appendChild(quoteCard);
    });
    quoteCards = Array.from(quotesContainer.children); // Update quoteCards NodeList
    hideAllQuotes(); // Hide all after generation
}

// Fetch quotes from JSON and initialize the app
async function initializeApp() {
    try {
        const response = await fetch('quotes.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        quotesData = await response.json();
        generateQuoteCards(quotesData); // Generate HTML elements
        prevBtn.style.display = 'none'; // Ensure buttons are hidden initially
        nextBtn.style.display = 'none';
    } catch (error) {
        console.error('Could not load quotes:', error);
        quotesContainer.innerHTML = '<p class="text-center text-red-600 text-lg">Failed to load quotes. Please try again later.</p>';
        startBtn.style.display = 'none'; // Hide start button if quotes fail to load
    }
}

// Call the initialization function when the script loads
initializeApp();

// Event listener for the "Start" button
startBtn.addEventListener('click', function() {
    if (quotesData.length === 0) return; // Prevent starting if no quotes loaded

    const rnd = Math.floor(Math.random() * quotesData.length);
    showQuote(rnd);
    this.parentElement.style.display = 'none'; // Hide the start button container
    prevBtn.style.display = 'block';
    nextBtn.style.display = 'block';
});

// Event listener for the "Previous" button
prevBtn.addEventListener('click', function() {
    if (quotesData.length === 0) return;

    let newIndex = currentQuoteIndex - 1;
    if (newIndex < 0) {
        newIndex = quotesData.length - 1; // Loop to the last quote
    }
    showQuote(newIndex);
    copiedClick(); // Clear copied message
});

// Event listener for the "Next" button
nextBtn.addEventListener('click', function() {
    if (quotesData.length === 0) return;

    let newIndex = currentQuoteIndex + 1;
    if (newIndex >= quotesData.length) {
        newIndex = 0; // Loop to the first quote
    }
    showQuote(newIndex);
    copiedClick(); // Clear copied message
});
