export default function HomePage() {
  return (
    <main className="main-container">
      <div className="content">
        <h1 className="yellow-text">Welcome to My Portfolio</h1>
        <p className="white-text">Explore my projects and get to know me.</p>

        {/* Embedded YouTube video */}
        <iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/HGqVSTZTzws" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen
></iframe>

      </div>
    </main>
  );
}
