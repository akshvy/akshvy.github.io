import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
    {
        title: 'Project One',
        description: 'Description for project one.',
        link: '#'
    },
    {
        title: 'Project Two',
        description: 'Description for project two.',
        link: '#'
    }
];

const ProjectList = () => {
    return (
        <div id="project-list" className="project-list">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    );
};

export default ProjectList;