document.addEventListener('DOMContentLoaded', () => {
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

    const projectList = document.getElementById('project-list');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}">View Project</a>
        `;
        projectList.appendChild(projectCard);
    });
});
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';
    import './styles.css';

        ReactDOM.render(<App />, document.getElementById('root'));