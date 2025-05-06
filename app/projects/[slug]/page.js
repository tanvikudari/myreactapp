'use client';

import { usePathname } from 'next/navigation'; // Client-side hook for navigation
import Link from 'next/link';

const projects = {
  'homegrown-india': {
    title: 'Redesigning HomeGrown India: Culture meets Design',
    description: 'This project explores the redesign of Homegrown India, blending culture and design.',
    url: 'https://readymag.website/u2871133172/4889086/4/', // External link to Readymag
  },
  '3d-projects': {
    title: '3D Projects',
    description: 'This project includes various 3D design explorations.',
    url: 'https://readymag.website/u2871133172/4889086/5/', // Example internal link (not external)
  },
};

export default function ProjectPage() {
  const pathname = usePathname(); // Get the current pathname (URL)

  // Extract the slug from the URL
  const slug = pathname.split('/').pop(); // Get the last part of the URL, which is the slug

  // Get the project data for the current slug
  const project = projects[slug];

  // If project is not found, show a 404 message
  if (!project) {
    return (
      <main className="p-4">
        <h1 className="yellow-text">Project Not Found</h1>
        <p className="white-text">The project you're looking for does not exist.</p>
      </main>
    );
  }

  return (
    <main className="p-4">
      <h1 className="yellow-text">{project.title}</h1>
      <p className="white-text">{project.description}</p>
      {/* External link */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="yellow-text"
      >
        View Project
      </a>
    </main>
  );
}
