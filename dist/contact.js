// emailSender.js

function handleClick(event) {
    event.preventDefault(); // Prevent the default form submission

    console.log("Called")
  
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
  
    // Basic form validation
    if (!email || !subject || !message) {
      alert('Please fill out all fields');
      return;
    }
  
    // Construct the mailto URL
    const mailtoUrl = `mailto:harshithchowtapalli@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  
    // Open the user's default email client
    window.location.href = mailtoUrl;
  
    // Optionally, you can reset the form after sending
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
  
    // You might want to show a success message to the user
    alert('Email client opened. Please send your message from there.');
  }
  
  // Add event listener to the form
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleClick);
  });