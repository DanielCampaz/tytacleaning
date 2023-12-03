export const LogosTheme = (theme: 0 | 1) => {
  const lthe = ["tytaLogo.ico", "tytaLogo-white.ico"];

  return lthe[theme];
};

export const ConvertText = (text: string) => {
  return `${text.slice(0, 1).toUpperCase()}${text.slice(1, text.length)}`;
};

export const ConvertUrlId = (
  urlWhitOutID: string,
  urlWhitID?: string,
  id?: string | number
) => {
  if (id !== undefined && urlWhitID !== undefined) {
    return urlWhitID + id;
  } else {
    return urlWhitOutID;
  }
};
