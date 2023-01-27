const formatOptions : object = {
    year: "numeric",
    month: "long",
    day: "numeric",
}

export function formatDate(date: Date): string {
    return new Date(date).toLocaleDateString("en-us", formatOptions);
}