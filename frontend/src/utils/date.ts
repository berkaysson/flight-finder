import { format, parse } from "date-fns";

export const formatDateTime = (date: string) => {
  if (!date) return "";
  const parsedDate = parse(date, "yyyy-MM-dd'T'HH:mm", new Date());
  return format(parsedDate, "yyyy-MM-dd'T'HH:mm:ss");
};
