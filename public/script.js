
document.addEventListener('DOMContentLoaded', () => {
    const csvUrl = '../test_cases.csv';
    const tableHeader = document.getElementById('table-header');
    const tableBody = document.getElementById('table-body');
    const pdfButton = document.getElementById('pdf-button');

    Papa.parse(csvUrl, {
        download: true,
        header: true,
        complete: function(results) {
            const headers = results.meta.fields;
            
            // Insert header
            headers.forEach(header => {
                const th = document.createElement('th');
                th.textContent = header.trim();
                tableHeader.appendChild(th);
            });

            // Insert rows
            results.data.forEach(row => {
                if (Object.values(row).some(value => value.trim() !== '')) {
                    const tr = document.createElement('tr');
                    headers.forEach(header => {
                        const td = document.createElement('td');
                        td.textContent = row[header].trim();
                        tr.appendChild(td);
                    });
                    tableBody.appendChild(tr);
                }
            });
        },
        error: function(error) {
            console.error('Error loading CSV:', error);
        }
    });

    pdfButton.addEventListener('click', generatePDF);
});

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Test Case Report', 14, 22);

    doc.autoTable({
        html: '#csv-table',
        startY: 30,
        styles: { fontSize: 8 },
        columnStyles: {
            0: { cellWidth: 30 },
            1: { cellWidth: 30 },
            2: { cellWidth: 30 },
            3: { cellWidth: 30 },
            4: { cellWidth: 30 },
            5: { cellWidth: 30 }
        },
        didDrawCell: (data) => {
            if (data.section === 'body') {
                const td = data.cell.raw;
                const text = td.textContent.trim();
                const split = doc.splitTextToSize(text, data.cell.width - 4);
                doc.text(split, data.cell.x + 2, data.cell.y + 4);
            }
        }
    });

    doc.save('test_case_report.pdf');
}