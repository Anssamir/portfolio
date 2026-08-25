import { ProjectContent } from './ProjectContent';

export function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const titles: Record<string, string> = {
    danske: 'DanoGPT — Himesh Mehta',
    nissan: 'Ventra & Luxoro — Himesh Mehta',
    loreal: 'GrowthOrbit by Aveline — Himesh Mehta',
    marketly: 'Marketly Portal — Himesh Mehta',
  };
  return {
    title: titles[slug] || 'Project — Himesh Mehta',
    description: `Case study for ${slug} by Himesh Mehta, Product Designer.`,
  };
}

export default function ProjectPage() {
  return <ProjectContent />;
}
