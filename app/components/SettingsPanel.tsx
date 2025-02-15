import React from "react";

const SettingsPanel = (
    { citationStyle, setCitationStyle }
        : { citationStyle: string, setCitationStyle: React.Dispatch<React.SetStateAction<string>> }
) => {
    return (
        <div className="flex flex-col gap-3 py-8">
            <label className="text-sm font-semibold">Select Citation Style:</label>
            <select
                className="border p-2 rounded"
                value={citationStyle}
                onChange={(e: any) => setCitationStyle(e.target.value)}
            >
                <option value="APA">APA</option>
                <option value="MLA">MLA</option>
                <option value="Chicago">Chicago</option>
            </select>
        </div>
    );
};

export default SettingsPanel;
