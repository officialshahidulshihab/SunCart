export const getAllProducts = async () => {
  const res = await fetch("https://suncart-blue.vercel.app/data.json");
  const productsData = await res.json();
  return productsData;
};