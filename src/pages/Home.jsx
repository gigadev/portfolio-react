import React from 'react';

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen text-gray-100">
      {/* Modern IT Portfolio Banner */}
      <div className="relative flex flex-col items-center justify-center py-16 mb-10 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-800 shadow-lg rounded-b-3xl">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          className="w-28 h-28 rounded-full border-4 border-white shadow-xl mb-4 bg-white p-2"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 text-white drop-shadow-lg">
          Scott Shepherd
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-blue-200 mb-2">
          Lead .NET Full Stack Developer
        </h2>
        <p className="text-md md:text-lg text-blue-100 max-w-xl text-center">
          Building scalable, modern solutions for logistics, brokerage, education, and certification sectors.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4 text-blue-300">Role Overview</h1>
        <section className="mb-8">
          <p>
            As a Lead .NET Full Stack Developer, I have consistently led technical teams in designing, developing, and deploying scalable, high-performance applications, primarily within logistics, brokerage, education, and certification sectors. My extensive expertise includes backend optimization, front-end development, and implementing comprehensive CI/CD pipelines.
          </p>
        </section>

        <h1 className="text-2xl font-bold mb-4 text-purple-300">Key Responsibilities</h1>
        <section className="mb-8">
          <ul className="list-disc list-inside space-y-2">
            <li>Leading development teams to architect and build full-stack .NET solutions.</li>
            <li>Optimizing database architectures and ensuring efficient backend performance using SQL Server.</li>
            <li>Implementing microservices and RESTful APIs to enhance system modularity and scalability.</li>
            <li>Translating complex business requirements into clear technical solutions.</li>
            <li>Establishing robust CI/CD processes using Azure DevOps, Jenkins, and TeamCity.</li>
            <li>Managing agile teams effectively through clear communication and mentorship.</li>
            <li>Integrating advanced functionality through plugins, SSO authentication, and third-party service integrations.</li>
          </ul>
        </section>

        <h1 className="text-2xl font-bold mb-4 text-indigo-300">Achievements</h1>
        <section className="mb-8">
          <ul className="list-disc list-inside space-y-2">
            <li>Successfully modernized legacy systems into secure, scalable applications using .NET MVC and Entity Framework.</li>
            <li>Engineered plugin-based systems supporting flexible exam creation and data ingestion processes.</li>
            <li>Developed a drone inspection management app leveraging Blazor technology and Google Maps integration.</li>
            <li>Delivered robust cross-platform solutions and custom .NET Core applications hosted on Azure.</li>
            <li>Implemented Single Sign-On (SSO) solutions for streamlined authentication.</li>
            <li>Streamlined agile processes, enhancing team efficiency and project delivery timelines.</li>
          </ul>
        </section>
      </div>

      {/* More Info Section */}
      <div className="max-w-3xl mx-auto px-4 mt-10">
        <h1 className="text-2xl font-bold mb-4 text-green-300">More Info</h1>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a
              href="https://www.linkedin.com/in/scottwshepherd/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              LinkedIn Profile
            </a>
          </li>
          <li>
            <a
              href="https://www.freelancer.com/u/gigadev?frm=gigadev&sb=t"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Freelancer Profile
            </a>
          </li>
          <li>
            <a
              href="https://www.upwork.com/freelancers/gigadev?viewMode=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Upwork Profile
            </a>
          </li>
        </ul>
      </div>
    <br></br>
    </div>
  );
};

export default Home;
