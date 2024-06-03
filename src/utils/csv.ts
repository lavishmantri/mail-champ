import fs from 'fs';
import Papa from 'papaparse';


/**
 * Function to create a CSV file from any tabular input
 * @param {Array<Object>} data - Array of objects representing the tabular data
 * @param {string} filePath - The path where the CSV file will be created
 */
export function createCsvFile(data: Array<object>, filePath: string): void {
    // Convert JSON to CSV
    const csv = Papa.unparse(data, {
        header: true
    });

    // Write CSV to file
    fs.writeFileSync(filePath, csv);

    console.log(`CSV file created successfully at ${filePath}`);
}
