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
            
            <p>Job Title</p>
            <p>Email: example@example.com</p>
            <p>Skills:</p>
            <ul>
                <li>Skill 1</li>
                <li>Skill 2</li>
                <li>Skill 3</li>
            </ul>
            <p>Experience:</p>
            <ul>
                <li>Company A, Jan 2020 - Present</li>
                <li>Company B, Jan 2018 - Dec 2019</li>
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