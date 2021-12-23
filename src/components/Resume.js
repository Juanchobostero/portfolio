import React, { useState } from 'react'
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


export default function MyApp() {

    const pdf = 'cv.pdf';

    // eslint-disable-next-line
    const [numPages, setNumPages] = useState(14);
    // eslint-disable-next-line
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
  
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '0',
        overflow: 'hidden',
        margin: '0 0'
      }}>
        <Document
          file = { pdf }
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    );
  }
