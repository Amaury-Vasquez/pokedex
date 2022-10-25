export const addCeros = (n: number) => {
  let str = n > 100 ? '' : n > 10 ? '0' : '00';
  return str + n.toString();
};

// Use it inside a try/catch statement
export async function fetchUrl(url: string) {
  const res = await fetch(url);
  const data = await res.json().then();
  return data;
}
