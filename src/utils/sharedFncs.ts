export async function getData(url: string) {
  try {
    const res = await fetch(`${url}`);

    return res.json();
  } catch (error) {
    console.error(error);
  }
}

export function consoleOnRender(message: string, componentName: string) {
  console.log(message, componentName);
}
