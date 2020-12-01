const translateToAlienLanguage = string => string
    .toLowerCase()
    .split(` `)
    .map(letter =>
      letter
        .split(``)
        .reverse()
        .join(``)
        .replace(/([aeiou])/g, "$1$1")
    ).join` `;
