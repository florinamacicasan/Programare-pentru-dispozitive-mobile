import React from 'react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Ready to create an app?</strong>
      <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};

const Welcome: React.FC<ContainerProps> = () => {
    return (
        <div className="container">
            <h1>Hello world !</h1>
            <strong>Ready to create an app?</strong>
        </div>
    );
};

export default Welcome;