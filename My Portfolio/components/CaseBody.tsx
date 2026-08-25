'use client';

import Image from 'next/image';
import { assets } from '@/data/assets';

interface CaseBodyProps {
  p: { image: string };
  slug: string;
}

type Section = [string, string, string];

export function CaseBody({ p, slug }: CaseBodyProps) {
  const sections: Section[] =
    slug === 'danske'
      ? [
          ['Why GenAI in Banking (for Employees)', 'Boosts Productivity', 'GenAI can improve banking operations by up to 46% by 2030, especially in service, underwriting, and internal workflows.'],
          ['Identifying the Gaps - The Challenge', 'One unified assistant', 'Frontline employees faced delays and stress due to scattered systems, unclear policies, and high customer expectations.'],
          ['Understanding the users', 'Human needs first', 'Through interviews, shadowing, and user observations, we identified three core personas and their unique goals.'],
          ['Flow Model', 'Clarity from complexity', 'The flow model clarified frontline employees\' job-to-be-done tasks and highlighted pain points.'],
        ]
      : slug === 'nissan'
      ? [
          ['Business Goals', 'A smarter ownership layer', 'Build a digital platform that encourages interaction, reduces effort, and feels tailored for every driver.'],
          ['Identifying the Gaps - The Challenge', 'One ownership experience', 'Vehicle ownership is often fragmented. Users need one intuitive platform for finances, service and vehicle information.'],
          ['Understanding the users', 'Different journeys, shared needs', 'We focused on first-time buyers and existing owners, each with distinct expectations and support needs.'],
        ]
      : [
          ['Redesign Objective', 'Media Summary Dashboard', 'To track revenue, ad spend, ROAS, and contribution by channel.'],
          ['User Persona', 'Designed for insight', 'Managers need details and filters, while executives need summaries and clarity.'],
          ['Pain Points of Internal Users (Before)', 'No KPI hierarchy', 'All metrics placed upfront without hierarchy, making it hard to prioritize.'],
          ['Redesign Solution (After)', 'A clearer dashboard', 'Introduced clear KPI cards, charts and modular components that reveal the important story first.'],
        ];

  return (
    <section className="case-body">
      {sections.map((s, i) => (
        <article className={i % 2 ? 'case-dark' : 'case-light'} key={s[0]}>
          <div className="eyebrow">{s[0]}</div>
          <div>
            <h2>{s[1]}</h2>
            <p>{s[2]}</p>
          </div>
          <Image
            src={i % 2 ? p.image : (assets as Record<string, string>)[slug === 'danske' ? 'nissan' : slug === 'nissan' ? 'loreal' : 'marketly']}
            alt={s[1]}
            width={500}
            height={380}
            style={{ objectFit: 'cover', borderRadius: 8 }}
          />
        </article>
      ))}
    </section>
  );
}
