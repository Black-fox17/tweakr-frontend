import React, { useState } from "react";

const YearDropdown = ({ value, onChange }: { value: number | ""; onChange: (year: number) => void }) => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 2015 + 1 }, (_, index) => 2015 + index);

    return (
        <div className="flex flex-col gap-3">
            <select
                className="border py-2 px-4 input-element outline-none"
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
            >
                <option value="">Select Year</option>
                {years.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default YearDropdown;
