import { format, parse } from "date-fns";

// date-fns kütüphanesi kullanılarak tarhiler API tüketimine uygun formata getirilmiştir.
export const formatDateTime = (date: string) => {
  if (!date) return "";
  const parsedDate = parse(date, "yyyy-MM-dd'T'HH:mm", new Date());
  return format(parsedDate, "yyyy-MM-dd'T'HH:mm:ss");
};
