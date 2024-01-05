const fs = require("fs");

/**
 * Writes JSON data to a text file.
 *
 * @param {Object} jsonData - The JSON data to write.
 * @param {string} filePath - The path of the file where data will be written.
 */
export default function writeJsonToTxtFile(jsonData, filename) {
  // Convert JSON object to string
  const jsonString = JSON.stringify(jsonData, null, 2);
  const filePath = `app/data/${filename}.json`;

  // Write to file
  fs.writeFile(filePath, jsonString, "utf8", (err) => {
    if (err) {
      console.error("An error occurred:", err);
      return;
    }
    console.log(`Data written to file ${filePath}`);
  });
}
