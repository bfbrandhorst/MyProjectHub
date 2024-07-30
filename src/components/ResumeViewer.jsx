import React from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

class ResumeViewer extends React.Component {
    async convertAndDownload() {
        const element = document.getElementById('resume-content');
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL('image/png');
        const doc = new jsPDF();
        doc.addImage(imgData, 'PNG', 0, 0);
        doc.save("your-resume.pdf");
    }

    render() { 
        const resumeContent = `
        <div style="font-family: Arial, sans-serif; width: 600px; margin: auto;">
            
            <p>Software Developer</p>
            <p>Email: bfBrandhorst@gmail.com</p>
            <p>Skills:</p>
            <ul>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>React</li>
            </ul>
            <p>Experience:</p>
            <ul>
                <li>Full Stack Software Development, University Texas Austin Bootcamp, Feb 2024 - Aug 2024</li>
                <li>VCA Veterinary Care, Jan 2013 - April 2022</li>
            </ul>
        </div>
    `;
        return (
            <div>
                <div id="resume-content" dangerouslySetInnerHTML={{ __html: resumeContent }}>
                    
                </div>
                <button onClick={() => this.convertAndDownload()}>Download Resume</button>
            </div>
        );
    }
}

export default ResumeViewer;