import React from 'react';

const ReactUsage = () => (
  <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen text-gray-100 py-12 px-4">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-300">React Usage</h1>
      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2 text-purple-200">How React is Used in This Application</h2>
        <p className="mb-4">
          This portfolio application is built using <span className="font-semibold text-blue-200">React</span>, a popular JavaScript library for building user interfaces. React enables the creation of reusable components, efficient state management, and a declarative approach to UI development.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold text-blue-200">Component-Based Structure:</span> Each page and UI section is implemented as a React component, making the code modular and maintainable.
          </li>
          <li>
            <span className="font-semibold text-blue-200">JSX Syntax:</span> The UI is described using JSX, which allows mixing HTML-like markup with JavaScript logic for dynamic rendering.
          </li>
          <li>
            <span className="font-semibold text-blue-200">Routing:</span> Navigation between pages (such as Home and React Usage) is handled by a React router, enabling a single-page application experience.
          </li>
          <li>
            <span className="font-semibold text-blue-200">Styling:</span> Tailwind CSS is used alongside React to style components with utility classes, ensuring a modern and responsive design.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-2 text-indigo-200">Example: Home Page Component</h2>
        <pre className="bg-gray-800 rounded p-4 text-sm overflow-x-auto mb-4">
{`import React from 'react';

const Home = () => (
  <div>
    {/* ...content... */}
  </div>
);

export default Home;`}
        </pre>
        <p>
          The <span className="font-mono text-blue-200">Home</span> component demonstrates how React is used to structure and render the main content of the portfolio.
        </p>
      </section>
      <section className="mt-10">
        <h2 className="text-xl font-bold mb-2 text-indigo-200">How to Use Docker and Push to Azure Container Registry</h2>
        <ol className="list-decimal list-inside space-y-2 mb-4">
          <li>
            <span className="font-semibold text-blue-200">Build the Docker image:</span>
            <pre className="bg-gray-800 rounded p-2 text-sm overflow-x-auto">docker build -t &lt;registry-name&gt;.azurecr.io/portfolio-app:latest .</pre>
          </li>
          <li>
            <span className="font-semibold text-blue-200">Login to Azure Container Registry:</span>
            <pre className="bg-gray-800 rounded p-2 text-sm overflow-x-auto">az acr login --name &lt;registry-name&gt;</pre>
          </li>
          <li>
            <span className="font-semibold text-blue-200">Push the image to ACR:</span>
            <pre className="bg-gray-800 rounded p-2 text-sm overflow-x-auto">docker push &lt;registry-name&gt;.azurecr.io/portfolio-app:latest</pre>
          </li>
          <li>
            <span className="font-semibold text-blue-200">Deploy the image from ACR to Azure Container Instances:</span>
            <pre className="bg-gray-800 rounded p-2 text-sm overflow-x-auto">az container create --resource-group &lt;resource-group&gt; --name portfolio-app --image &lt;registry-name&gt;.azurecr.io/portfolio-app:latest --ports 80 --dns-name-label &lt;unique-dns-name&gt; --os-type Linux --cpu 1 --memory 1.0</pre>
          </li>
        </ol>
        <p className="text-sm text-gray-400">Note: Replace <span className="font-mono">&lt;registry-name&gt;</span>, <span className="font-mono">&lt;resource-group&gt;</span>, and <span className="font-mono">&lt;unique-dns-name&gt;</span> with your actual Azure resources. Do not share your credentials or secrets in code or documentation.</p>
      </section>
    </div>
  </div>
);

export default ReactUsage;