
 // Use FaDownload icon for clarity

export const GifItem = ({ title, url, id }) => {

  // Function to download the GIF
  const handleDownload = async () => {
    try {
      const response = await fetch(url); // Fetch the GIF image
      const blob = await response.blob(); // Get the image data as a blob

      const downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(blob); // Create a temporary URL
      downloadLink.download = `${title}.gif`; // Set the download filename
      downloadLink.click(); // Simulate a click to trigger download

      // Cleanup the temporary URL after download completes or fails
      setTimeout(() => {
        window.URL.revokeObjectURL(downloadLink.href);
      }, 1000); // Delay for a reasonable timeout

    } catch (error) {
      console.error('Error downloading GIF:', error);
      // Handle download errors gracefully (e.g., display error message)
    }
  };

  return (
    <div className="card">
      {/* ... other card content ... */}
     
      <img src={url} alt={title} />
      <p>{title}</p>
      <button className="button-one" onClick={handleDownload}>
      <i class="bi bi-cloud-arrow-down-fill"></i>
      </button>
     
    </div>
  );
};