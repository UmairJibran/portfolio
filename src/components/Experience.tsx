'use client';

import experiences from '@/data/experience.json';
import Tabs from 'antd/es/tabs';
import Collapse from 'antd/es/collapse';
import { Heart, Briefcase } from 'react-feather';
import ExperienceDetail from '@/components/ExperiencDetail';

export default function Experience() {
  const itemsRenderer = experiences.map(experience => {
    return {
      label: <h2 className="font-mono">{experience.company.toUpperCase()}</h2>,
      key: experience.company,
      children: <ExperienceDetail experience={experience} />,
      icon: experience.volunteer ? (
        <Heart size={12} />
      ) : (
        <Briefcase size={12} />
      ),
    };
  });
  return (
    <>
      <div id="experience" className="flex flex-col w-full h-screen">
        <h1 className="my-20 text-3xl">Experience</h1>
        <Collapse
          accordion
          className="block md:hidden"
          defaultActiveKey={experiences[0].company}
          items={itemsRenderer}
        />
        <Tabs
          className="hidden md:inline-flex"
          tabPosition="left"
          animated
          more={{
            icon: null,
          }}
          size="small"
          defaultActiveKey={experiences[0].company}
          indicator={{ size: 50, align: 'center' }}
          items={itemsRenderer}
        />
      </div>
    </>
  );
}
