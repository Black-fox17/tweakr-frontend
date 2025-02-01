import React from "react";

const DraftList = ({ drafts }: { drafts: [] }) => {
    return (
        <div>
            {drafts.length === 0 ? (
                <p>No drafts uploaded yet.</p>
            ) : (
                <ul className="space-y-2">
                    {drafts.map((draft, index) => (
                        <li key={index} className="p-2 border rounded">
                            <span className="font-semibold">{draft.title}</span>
                            <div className="flex gap-2 mt-1">
                                <button className="text-blue-600">View</button>
                                <button className="text-green-600">Edit</button>
                                <button className="text-red-600">Download</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DraftList;
