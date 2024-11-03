import React, { useState } from 'react';
import { Card } from 'semantic-ui-react';
const HogTile = ({ hog, hideHog }) => {
    const { name, specialty, weight, greased, "highest medal achieved": medal, image } = hog;
    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false); // Track visibility

    const toggleDescription = () => {
        setIsDescriptionVisible(prev => !prev); // Toggle description visibility
    };

    return (
        <Card className="ui card" onClick={toggleDescription} style={{ cursor: 'pointer' }}> {/* Click to toggle */}
            <Card.Content>
                <img src={image} alt={name} />
                <Card.Header>{name}</Card.Header>
                {isDescriptionVisible && ( // Conditionally render description
                    <div className='description'>
                        <p>Specialty: {specialty}</p>
                        <p>Weight: {weight}</p>
                        <p>Greased: {greased ? 'Yes' : 'No'}</p>
                        <p>Highest Medal Achieved: {medal}</p>
                        <button className='Hider' onClick={(e) => { e.stopPropagation(); hideHog(name); }}>Hide</button>
                    </div>
                )}
            </Card.Content>
        </Card>
    );
};

export default HogTile;
