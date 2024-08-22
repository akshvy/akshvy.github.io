import React from 'react';
import ProjectList from './ProjectList';

const App = () => {
    return (
        <div className="app">
            <header>
                <h1>My Projects</h1>
            </header>
            <main>
                <ProjectList />
            </main>
            <footer>
                <p>&copy; 2023 My Portfolio</p>
            </footer>
        </div>
    );
};

export default App;