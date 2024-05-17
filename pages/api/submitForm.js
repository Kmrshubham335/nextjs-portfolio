import ExcelJS from 'exceljs';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email } = req.body;

    try {
      const filePath = path.resolve(process.cwd(), 'public', 'contacts.xlsx');
      console.log('File path:', filePath);

      const fileExists = fs.existsSync(filePath);
      console.log('File exists:', fileExists);

      const workbook = new ExcelJS.Workbook();

      let worksheet;
      if (fileExists) {
        await workbook.xlsx.readFile(filePath);
        console.log('Workbook read from file');
        worksheet = workbook.getWorksheet('Contacts');
      } else {
        worksheet = workbook.addWorksheet('Contacts');
        worksheet.columns = [
          { header: 'First Name', key: 'firstName', width: 20 },
          { header: 'Last Name', key: 'lastName', width: 20 },
          { header: 'Email', key: 'email', width: 30 },
        ];
        console.log('Workbook created with Contacts worksheet');
      }

      // Log existing rows
      console.log('Existing rows before adding new one:');
      worksheet.eachRow((row, rowNumber) => {
        console.log(`Row ${rowNumber}: ${row.values}`);
      });

      // Add new row manually
      const newRow = worksheet.addRow();
      newRow.getCell(1).value = firstName;
      newRow.getCell(2).value = lastName;
      newRow.getCell(3).value = email;
      console.log('Row added to worksheet:', { firstName, lastName, email });

      // Log all rows after adding the new one
      console.log('All rows after adding the new one:');
      worksheet.eachRow((row, rowNumber) => {
        console.log(`Row ${rowNumber}: ${row.values}`);
      });

      await workbook.xlsx.writeFile(filePath);
      console.log('Workbook written to file');

      res.status(200).json({ message: 'Form data saved successfully' });
    } catch (error) {
      console.error('Error occurred while processing form data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
