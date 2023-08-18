import React, { useState } from 'react'
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import { Link } from 'react-router-dom';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
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
        padding: '0',
        margin: '0 0',
        cursor: 'pointer',
        marginTop: '-1rem'
      }}>
        <Document
          file = { pdf }
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <div className="overflow-auto p-0 md:h-20 top-0 bg-gray-700 p-1 flex items-center">
            <Link
              to={pdf}
              download="MARTINEZJUANCRUZCV"
              target="_blank"
              rel="noreferrer"
            >
              <button class="text-sm bg-red-600 hover:bg-red-400 text-white py-2 px-4 rounded items-center">
                {/* <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg> */}
                <PictureAsPdfIcon />
                <span>Descargar</span>
              </button>
            </Link>
          </div>
            
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    );
  }
