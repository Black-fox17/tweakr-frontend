import React from "react";

const ReferenceList = ({ references }: { references: string[] }) => {
    return (
        <div>
            {references.length === 0 ? (
                <p>No references stored yet.</p>
            ) : (
                <ul className="space-y-2">
                    {references.map((reference, index) => (
                        <li key={index} className="p-2 border rounded">
                            <span className="font-semibold">{reference}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ReferenceList;
