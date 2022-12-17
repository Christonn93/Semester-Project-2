export const sendError = async (req) => {
  let res = await req.json();
  let statusCode = res.statusCode;
  let message = res.errors[0].message;
  let main = document.querySelector('main');
  let errorContainer = document.createElement('div');

  if (statusCode === 400) {
    errorContainer.innerHTML = `<div class="d-flex flex-column gap-2">
          <p class="text-danger m-0">Sorry! ${message}</p> 
        </div>`;
    document.getElementById('placeBidForm').classList.add('shake', '');
  }
  main.append(errorContainer);
};
