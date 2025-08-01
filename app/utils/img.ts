const getTitleURL = (colid: string) => {
  return `https://github.com/YukariChiba/postcards/raw/refs/heads/master/${colid}/title.svg`;
};

const getImageURL = (
  colid: string,
  imgid: number,
  side: string,
  format: string = "jpg",
) => {
  return `https://github.com/YukariChiba/postcards/raw/refs/heads/master/${colid}/${String(imgid).padStart(2, "0")}-${side}.${format}`;
};

export { getImageURL, getTitleURL };
