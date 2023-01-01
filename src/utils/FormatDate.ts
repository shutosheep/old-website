const formatOptions : object = {
    year: "numeric",
    month: "long",
    day: "numeric",
}

export function formatDate(date: string): string {
    return new Date(date).toLocaleDateString("en-us", formatOptions);
}