import Link from 'next/link';

const projects = [
  { slug: 'homegrown-india', title: 'Redesigning HomeGrown India: Culture meets Design' },
  { slug: '3d-projects', title: '3D Projects' },
];

export default function ProjectsPage() {
  return (
    <main className="p-4">
      <h1 className="yellow-text">Projects</h1>
      <ul>
        {projects.map((p) => (
          <li key={p.slug} style={{ fontSize: '1.5rem' }}> {/* Increased font size here */}
            <Link href={`/projects/${p.slug}`} className="white-text">
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
