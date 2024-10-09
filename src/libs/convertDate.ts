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