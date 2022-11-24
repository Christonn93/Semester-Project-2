const form = document.querySelector('#newEntryForm');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const newData = Object.fromEntries(formData.entries());
    console.log(newData);
    const { title, description, tags = [], endsAt, media = [] } = newData;

    // send it to API
    createNewEntry(newData);
  });

  async function createNewEntry(inputData) {
    const token = JSON.parse(localStorage.getItem('Token'));

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(inputData),
    };

    try {
      const req = await fetch('https://api.noroff.dev/api/v1/auction/listings', options);
      if (req.ok) {
        return await req.json();
      }
    } catch {
      // Show user a message that they couldn't log in
    }
  }
}
