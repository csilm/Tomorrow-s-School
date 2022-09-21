import React from 'react';
import { Button } from "reactstrap";
import jsPDF from 'jspdf';
import { useRef } from 'react';
export const Success = () => {

  const pdfRef = useRef(null);

  const pdfGenerate = () => {
    const content = pdfRef.current;

    const doc = new jsPDF();
    doc.html(content, {
      callback: function (doc) {
        doc.save('sample.pdf');
      }
    });
  };

  return (
    <div>
      <h2 ref={pdfRef}>Its not a bad or good luck. It's just work you do.</h2>
      <Button onClick={pdfGenerate}>Download</Button>
    </div>
  )
}

export default Success;