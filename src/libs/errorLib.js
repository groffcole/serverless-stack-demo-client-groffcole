export function onError(error) {
  let message = error.toString();

  console.info(`error.name: ${error.name}`)

  // Auth errors
  if (error.name === "UsernameExistsException" && error.message) {
    message = `this username is unavailable: ${error.message}`;
  } else if (!(error instanceof Error) && error.message) {
    message = error.message;
  }

  alert(message);
}
