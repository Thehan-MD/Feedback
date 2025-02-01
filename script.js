// Initialize vote counts in localStorage if not already set
if (!localStorage.getItem('votes')) {
  localStorage.setItem('votes', JSON.stringify({
    'Genius Guy': 0,
    'I Don\'t Know': 0,
    'Need To Be Improve': 0,
    'Mad Guy': 0
  }));
}

// Function to handle voting
function vote(option) {
  const votes = JSON.parse(localStorage.getItem('votes'));
  votes[option] += 1; // Increment the vote count
  localStorage.setItem('votes', JSON.stringify(votes)); // Save updated votes
  displayResults(); // Update the results display
}

// Function to display results
function displayResults() {
  const votes = JSON.parse(localStorage.getItem('votes'));
  const resultsList = document.getElementById('results');
  resultsList.innerHTML = ''; // Clear previous results

  for (const [option, count] of Object.entries(votes)) {
    const listItem = document.createElement('li');
    listItem.textContent = `${option}: ${count} votes`;
    resultsList.appendChild(listItem);
  }
}

// Display initial results on page load
displayResults();
