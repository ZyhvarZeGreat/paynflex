import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
type DownloadableData = {
  [key: string]: unknown;
};

export const handleDownload = <T extends DownloadableData[]>(
  data: T,
  headers: string[]
) => {
  // Logic to download the table data
  const csvContent =
    "data:text/csv;charset=utf-8," +
    headers.join(",") +
    "\n" + // Column headers
    data
      .map((item) => headers.map((header) => item[header]).join(","))
      .join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "data.csv");
  document.body.appendChild(link); // Required for FF
  link.click();
  document.body.removeChild(link); // Cleanup
};
