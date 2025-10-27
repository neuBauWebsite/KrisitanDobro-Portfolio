// Fallback for PDF viewer compatibility
document.addEventListener('DOMContentLoaded', function() {
    const pdfViewer = document.querySelector('.pdf-viewer');
    const fallback = document.querySelector('.pdf-fallback');
    
    // Check if PDF viewer is supported
    if (pdfViewer) {
        pdfViewer.addEventListener('error', function() {
            console.log('PDF viewer error - showing fallback');
            fallback.style.display = 'block';
        });
        
        // Hide fallback initially if viewer loads successfully
        setTimeout(function() {
            if (pdfViewer.offsetHeight > 0) {
                fallback.style.display = 'none';
            }
        }, 1000);
    }
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

