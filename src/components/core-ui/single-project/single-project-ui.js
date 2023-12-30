import React from 'react';
import Fade from 'react-reveal/Fade';
import placeholder from '../../../assets/png/placeholder.png';
import './single-project.css';

function SingleProjectUI({ id, name, desc, tags, code, demo, image, theme, classes }) {
    // Define button styles for both Demo and Code buttons
    const buttonStyles = {
        backgroundColor: '#fff', // Set your desired background color
        width: 'auto',
        color: '#000', // Set your desired text color
        border: '2px solid #000', // Set your desired border
        borderRadius: '20px', // Set your desired border radius
        //padding: '10px 20px', // Set your desired padding
        fontSize: '1rem', // Set your desired font size
        textTransform: 'uppercase', // Optional: set text to uppercase
        textDecoration: 'none', // Remove underline from text
        display: 'inline-block', // Use inline-block for proper spacing
        cursor: 'pointer', // Change cursor to pointer on hover
        // Add other styles as needed
        margin: '400px 10px', // Add margin between buttons if desired
    };

    return (
        <Fade bottom>
            <div
                key={id}
                className='singleProject'
                style={{ backgroundColor: theme.quaternary }}
            >
                <div className='projectContent'>
                    <h2
                        id={name.replace(' ', '-').toLowerCase()}
                        style={{ color: theme.tertiary }}
                    >
                        {name}
                    </h2>
                    <img src={image ? image : placeholder} alt={name} />
                    <div className='project--showcaseBtn'>
                        {/* Demo button */}
                        <a
                            href={demo}
                            target='_blank'
                            rel='noreferrer'
                            className={classes.iconBtn}
                            style={{ textDecoration: 'none' }} // Remove underline from the link
                            aria-labelledby={`${name.replace(' ', '-').toLowerCase()}-demo`}
                        >
                            <button 
                                id={`${name.replace(' ', '-').toLowerCase()}-demo`}
                                aria-label='Demo'
                                style={buttonStyles}
                            >
                                Demo
                            </button>
                        </a>
                        {/* Code button */}
                        <a
                            href={code}
                            target='_blank'
                            rel='noreferrer'
                            className={classes.iconBtn}
                            style={{ textDecoration: 'none' }} // Remove underline from the link
                            aria-labelledby={`${name.replace(' ', '-').toLowerCase()}-code`}
                        >
                            <button 
                                id={`${name.replace(' ', '-').toLowerCase()}-code`}
                                aria-label='Code'
                                style={buttonStyles}
                            >
                                Code
                            </button>
                        </a>
                    </div>
                </div>
                <p
                    className='project--desc'
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary,
                    }}
                >
                    {desc}
                </p>
                <div
                    className='project--lang'
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary,
                    }}
                >
                    {tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                    ))}
                </div>
            </div>
        </Fade>
    );
}

export default SingleProjectUI;
