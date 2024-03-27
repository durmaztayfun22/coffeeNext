import React from "react"; // Importing React library for JSX
import '../../styles/Modal.css'  // Importing CSS file for styling

// Functional component for a modal with props
export default function Modal({src, alt, onClose}) {
    return(
        <div className="modal"  onClick={(e) => e.stopPropagation()}> {/* Container for modal, clicking anywhere outside modal will close it */}
            <div className="modal-content" onClick={onClose}> {/* Modal content area */}
                <img src={src} alt={alt} className="img-fluid" onClick={(e) => e.stopPropagation()} /> {/* Image displayed in the modal */}
            </div>
        </div>
    
    )
}
