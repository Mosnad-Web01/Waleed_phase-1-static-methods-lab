/*
class Formatter {
  //add static methods here
}

*/


class Formatter {
  // Method to capitalize the first letter of a string
  static capitalize(string) {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Method to sanitize a string by removing unwanted characters
  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9' -]/g, '');
  }

  // Method to titleize a string, capitalizing certain words
  static titleize(string) {
    const lowerCaseWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    return string.split(' ').map((word, index) => {
      if (index === 0 || !lowerCaseWords.includes(word.toLowerCase())) {
        return this.capitalize(word);
      }
      return word.toLowerCase();
    }).join(' ');
  }
}

// Example usage and testing of static methods
console.log(Formatter.capitalize("hello")); // "Hello"
console.log(Formatter.sanitize("Hello, World! @2023")); // "Hello World 2023"
console.log(Formatter.titleize("the quick brown fox jumps over the lazy dog")); 
// "The Quick Brown Fox Jumps Over the Lazy Dog"