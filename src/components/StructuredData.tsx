import React from 'react';

const StructuredData: React.FC = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Daniel Calin Stanus",
        "jobTitle": "Desarrollador Full Stack",
        "description": "Desarrollador Full Stack especializado en .NET, PHP, React y Angular con experiencia en desarrollo web y aplicaciones empresariales",
        "url": "https://danielstanus.github.io",
        "image": "https://danielstanus.github.io/images/profile-min.jpg",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Madrid",
            "addressCountry": "ES"
        },
        "knowsAbout": [
            ".NET", "C#", "PHP", "React", "Angular", "TypeScript", "JavaScript",
            "SQL Server", "API REST", "Ionic", "Android", "Desarrollo Web",
            "Aplicaciones Empresariales", "Full Stack Development"
        ],
        "hasOccupation": {
            "@type": "Occupation",
            "name": "Desarrollador Full Stack",
            "occupationLocation": {
                "@type": "City",
                "name": "Madrid"
            },
            "skills": [
                ".NET Framework", "C#", "PHP", "React", "Angular", "TypeScript",
                "JavaScript", "SQL Server", "API Development", "Mobile Development",
                "Web Development", "Database Design"
            ]
        },
        "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Institución Educativa"
        },
        "sameAs": [
            "https://github.com/danielstanus",
            "https://linkedin.com/in/danielstanus"
        ]
    };

    const websiteStructuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Daniel Calin Stanus Portfolio",
        "description": "Portafolio profesional de Daniel Calin Stanus, Desarrollador Full Stack",
        "url": "https://danielstanus.github.io",
        "author": {
            "@type": "Person",
            "name": "Daniel Calin Stanus"
        },
        "inLanguage": "es-ES",
        "copyrightYear": "2024",
        "genre": "Portfolio"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteStructuredData),
                }}
            />
        </>
    );
};

export default StructuredData;