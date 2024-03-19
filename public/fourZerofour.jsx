import React, { useEffect } from "react"; // Importing React library for JSX
import Swal from "sweetalert2";

// Functional component for a Not Found Page
function NotFoundPage() {
    useEffect(() => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    }, []); // Empty dependency array ensures the effect runs only once after initial render

    return <div>
        <p>Page Not Found</p>
    </div>;
}

export default NotFoundPage; // Exporting the NotFoundPage component
