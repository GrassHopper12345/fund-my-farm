  document.getElementById('checkoutButton').addEventListener('click', async function () {
      try {
          const response = await fetch('/create-checkout-session', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                },
            },
            );
            console.log('test1')

      if (response.ok) {
        const result = await response.json();

        window.location.href = result.url;
      } else {
        console.error('Failed to initiate checkout:', response.statusText);
      }
    } catch (error) {
      console.error('Error initiating checkout:', error);
    }
  });