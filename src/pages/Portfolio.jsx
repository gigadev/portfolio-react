import React, { useState } from 'react';

const projects = [
  {
    title: 'Mortgage Calculator - PHP',
    image: '/images/MortgageCalculator_2025-06-06 17-22-18.png',
    link: 'https://mortgage-calculator.reinowned.com/index.php',
    iframe: true,
  },
  {
    title: 'Inspection Management - Blazor/Azure SQL',
    image: '/images/InspectionManagement-2025-06-06 17-20-19.png',
    link: 'https://gds-inspectionmanagement-hzgdbwexbjgefuek.westcentralus-01.azurewebsites.net/',
    iframe: false,
  },
  // Add your projects here
];

const Portfolio = () => {
  const [iframeUrl, setIframeUrl] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  const handleProjectClick = (e, link, allowIframe) => {
    e.preventDefault();
    if (allowIframe) {
      const choice = window.confirm(
        'Click OK to load the site in an iframe, or Cancel to redirect to the site.'
      );
      if (choice) {
        setIframeUrl(link);
      } else {
        window.open(link, '_blank', 'noopener,noreferrer');
      }
    } else {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const handleImageClick = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover cursor-pointer transition-transform duration-200 hover:scale-105"
              onClick={() => handleImageClick(project.image)}
              title="Click to enlarge"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <a
                href={project.link}
                onClick={e => handleProjectClick(e, project.link, project.iframe)}
                className="text-blue-500 hover:underline cursor-pointer"
                title={project.iframe ? undefined : "Redirect only"}
              >
                View Site
              </a>
            </div>
          </div>
        ))}
      </div>
      {iframeUrl && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-2">Site Preview</h2>
          <div className="w-full" style={{ minHeight: '600px' }}>
            <iframe
              src={iframeUrl}
              title="Site Preview"
              className="w-full h-[600px] border rounded"
            />
          </div>
        </div>
      )}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <img
            src={modalImage}
            alt="Enlarged project"
            className="max-w-full max-h-[90vh] rounded shadow-lg"
            onClick={e => e.stopPropagation()}
          />
          <button
            className="absolute top-4 right-8 text-white text-3xl font-bold"
            onClick={closeModal}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
