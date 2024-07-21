import React from 'react'

const Loader = () => {
    const styles = {
        loaderContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
        },
        spinner: {
            border: '16px solid #f3f3f3', // Light grey
            borderTop: '16px solid #3498db', // Blue
            borderRight: '16px solid #e74c3c', // Red
            borderBottom: '16px solid #f1c40f', // Yellow
            borderLeft: '16px solid #2ecc71', // Green
            borderRadius: '50%',
            width: '120px',
            height: '120px',
            animation: 'spin 2s linear infinite',
        },
        // Keyframes for the spinner animation
        '@keyframes spin': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
        },
    };

    // Apply the keyframes using a style tag
    const keyframesStyle = `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;
    return (
        <div style={styles.loaderContainer}>
            <style>{keyframesStyle}</style>
            <div style={styles.spinner}></div>
        </div>
    )
}

export default Loader
