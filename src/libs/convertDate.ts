// example 09/09/1999
export const convertSlashDate = (date: string) => {
  const dateObject = new Date(date);

  const day = String(dateObject.getDate()).padStart(2, "0");
  const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = dateObject.getFullYear();

  return `${day}/${month}/${year}`;
};

// example 09 . 09 . 1999
export const convertDotDate = (date: string) => {
  const dateObject = new Date(date);

  const day = String(dateObject.getDate()).padStart(2, "0");
  const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = dateObject.getFullYear();

  return `${day} . ${month} . ${year}`;
};

// example FRIDAY 07 AUGUST 1945
export const convertDetailDate = (date: string) => {
  const dateObject = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long", // Full weekday name (e.g., Friday)
    year: "numeric", // Full year (e.g., 1945)
    month: "long", // Full month name (e.g., August)
    day: "2-digit", // Day of the month with two digits (e.g., 07)
  };

  const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(
    dateObject
  );

  return formattedDate.toUpperCase();
};
