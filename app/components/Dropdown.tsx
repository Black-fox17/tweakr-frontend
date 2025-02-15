import React, { useState } from "react";

const YearDropdown = () => {
    const [selectedYear, setSelectedYear] = useState<number | "">("");

    // Generate years from 2015 to current year
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 2015 + 1 }, (_, index) => 2015 + index);

    return (
        <div className="flex flex-col gap-3">
            <label className="input-label">Paper Year</label>
            <select
                className="border p-2 input-element outline-none"
                value={selectedYear}
                onChange={(e) => setSelectedYear(Number(e.target.value))}
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
