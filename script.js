document.getElementById('generateButton').addEventListener('click', function() {
  const text = document.getElementById('textInput').value;
  const wordCloudDisplay = document.getElementById('wordCloudDisplay');

  if (text.trim() === '') {
      wordCloudDisplay.innerHTML = 'Please enter some text.';
      return;
  }

  // Process the input text
  const wordCounts = getWordCounts(text);
  displayWordCloud(wordCounts);
});

function getWordCounts(text) {
  const words = text.toLowerCase().match(/\w+/g) || [];
  const wordCounts = {};

  words.forEach(word => {
      if (wordCounts[word]) {
          wordCounts[word]++;
      } else {
          wordCounts[word] = 1;
      }
  });

  return wordCounts;
}

function displayWordCloud(wordCounts) {
  const wordCloudDisplay = document.getElementById('wordCloudDisplay');
  wordCloudDisplay.innerHTML = ''; // Clear previous word cloud

  const maxCount = Math.max(...Object.values(wordCounts));

  for (const [word, count] of Object.entries(wordCounts)) {
      const wordElement = document.createElement('span');
      const fontSize = (count / maxCount) * 2 + 0.5; // Adjust size scale as needed
      wordElement.style.fontSize = `${fontSize}em`;
      wordElement.style.margin = '5px';
      wordElement.textContent = word;

      wordCloudDisplay.appendChild(wordElement);
  }
}
