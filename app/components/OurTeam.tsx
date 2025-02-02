import Image from 'next/image';
import React from 'react';

const teamMembers = [
    {
        name: 'John Doe',
        position: 'CEO & Founder',
        imageSrc: '/assets/images/about image.png',
        imageAlt: 'John Doe'
    },
    {
        name: 'Jane Smith',
        position: 'Lead Developer',
        imageSrc: '/assets/images/about image.png',
        imageAlt: 'Jane Smith'
    },
    {
        name: 'Alice Brown',
        position: 'Project Manager',
        imageSrc: '/assets/images/about image.png',
        imageAlt: 'Alice Brown'
    },
];

const OurTeam = () => {
    return (
        <section className="flex flex-col items-start justify-center section-padding py-20">
            <h3 className="text-[25px] font-semibold mb-12">Our Team</h3>
            <div className="flex flex-wrap justify-evenly items-center w-full">
                {teamMembers.map((member, index) => (
                    <article
                        key={index}
                        className="flex flex-col items-start justify-center rounded-t-[10px] max-w-[332px] w-full"
                    >
                        <Image
                            src={member.imageSrc}
                            alt={member.imageAlt}
                            width={200}
                            height={200}
                            className="w-full h-[218px] object-cover rounded-t-[10px]"
                        />
                        <div className="text-justify flex flex-col gap-3 py-6">
                            <p className="text-gray-500 text-4">{member.position}</p>
                            <p className="font-semibold text-[16px]">{member.name}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default OurTeam;
