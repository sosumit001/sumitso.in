import React from "react";
import SomeT from "./@ui/some-text";

interface Experience {
    role: string;
    company: string;
    companyUrl: string;
    period: string;
    description: string;
}

const experiences: Experience[] = [
    {
        role: "Technical Content Writer",
        company: "Smallest AI",
        companyUrl: "https://smallest.ai/",
        period: "FEB 2026 - PRESENT",
        description: "Crafting technical content and tutorials to help developers build amazing voice AI applications.",
    },
    {
        role: "Developer Advocate",
        company: "VideoSDK",
        companyUrl: "https://videosdk.live",
        period: "NOV 2024 - JAN 2026",
        description: "Built and nurtured the developer community, created educational content, and helped developers integrate real-time communication features.",
    },
];

const Timeline = () => {
    return (
        <div className="mt-8 flex flex-col relative border-gray-200 ml-3">
            {/* timeline: absolulte */}
            <div className="absolute left-[-2px] top-[20px] w-[1px] h-[calc(100%-100px)] bg-gray-200"></div>
            {experiences.map((exp, index) => (
                <div key={index} className="mb-10 ml-6 relative">
                    <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-[#f5f5f5] border-[1px] border-gray-400"></div>

                    <h3 className="text-xl font-bold text-gray-900 mb-1 flex items-center gap-2">
                        {exp.role} at <SomeT href={exp.companyUrl} text={exp.company} />
                    </h3>
                    <span className="inline-block px-2 py-1 mb-2 text-xs font-semibold tracking-wide text-teal-800 bg-teal-100 rounded-md">
                        {exp.period}
                    </span>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        {exp.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
