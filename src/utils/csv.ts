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

/**
 * Function to read a CSV file and return its content as JSON
 * @param {string} filePath - The path to the CSV file
 * @returns {Promise<Array<Record<string, any>>>} - A promise that resolves to an array of objects representing the CSV content
 */
export function readCsvFile(filePath: string): Promise<Array<Record<string, any>>> {
    return new Promise((resolve, reject) => {
        const fileContent = fs.readFileSync(filePath, 'utf8');

        Papa.parse<Record<string, any>>(fileContent, {
            header: true,
            complete: (result) => {
                if (result.errors.length) {
                    reject(result.errors);
                } else {
                    resolve(result.data);
                }
            },
            error: (error) => {
                reject(error);
            }
        });
    });
}
