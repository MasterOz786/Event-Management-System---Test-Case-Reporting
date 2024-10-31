document.addEventListener('DOMContentLoaded', () => {
    const useCasesFile = document.getElementById('use-cases-file');
    const testCasesFile = document.getElementById('test-cases-file');
    const useCasesContainer = document.getElementById('use-cases-container');
    const testCasesContainer = document.getElementById('test-cases-container');
    const pdfButton = document.getElementById('pdf-button');

    useCasesFile.addEventListener('change', (event) => {
        handleFileUpload(event, 'use-cases');
    });

    testCasesFile.addEventListener('change', (event) => {
        handleFileUpload(event, 'test-cases');
    });

    pdfButton.addEventListener('click', generatePDF);
});

function handleFileUpload(event, type) {
    const file = event.target.files[0];
    if (file) {
        Papa.parse(file, {
            complete: function(results) {
                displayCSV(results.data, type);
            }
        });
    }
}

function displayCSV(data, type) {
    const tableHeader = document.getElementById(`${type}-header`);
    const tableBody = document.getElementById(`${type}-body`);
    const container = document.getElementById(`${type}-container`);

    // Clear previous content
    tableHeader.innerHTML = '';
    tableBody.innerHTML = '';

    // Display header
    data[0].forEach(header => {
        const th = document.createElement('th');
        th.textContent = header.trim();
        tableHeader.appendChild(th);
    });

    // Display rows
    data.slice(1).forEach(row => {
        if (row.some(cell => cell.trim() !== '')) {
            const tr = document.createElement('tr');
            row.forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell.trim();
                tr.appendChild(td);
            });
            tableBody.appendChild(tr);
        }
    });

    // Show the container
    container.style.display = 'block';
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Test Case Report', 14, 22);

    let yOffset = 30;

    if (document.getElementById('use-cases-container').style.display !== 'none') {
        doc.setFontSize(14);
        doc.text('Use Cases', 14, yOffset);
        doc.autoTable({
            html: '#use-cases-table',
            startY: yOffset + 10,
            styles: { fontSize: 8 },
            columnStyles: { cellWidth: 'auto' },
        });
        yOffset = doc.lastAutoTable.finalY + 20;
    }

    if (document.getElementById('test-cases-container').style.display !== 'none') {
        doc.setFontSize(14);
        doc.text('Test Cases', 14, yOffset);
        doc.autoTable({
            html: '#test-cases-table',
            startY: yOffset + 10,
            styles: { fontSize: 8 },
            columnStyles: { cellWidth: 'auto' },
        });
    }

    doc.save('test_case_report.pdf');
}