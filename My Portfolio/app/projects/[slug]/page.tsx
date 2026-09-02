import { ProjectContent } from './ProjectContent';

export function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const titles: Record<string, string> = {
    danske: 'DanoGPT — Anas Amir',
    nissan: 'Ventra & Luxoro — Anas Amir',
    loreal: 'GrowthOrbit by Aveline — Anas Amir',
    marketly: 'Marketly Portal — Anas Amir',
  };
  return {
    title: titles[slug] || 'Project — Anas Amir',
    description: `Case study for ${slug} by Anas Amir, Product Designer.`,
  };
}

export default function ProjectPage() {
  return <ProjectContent />;
}
