export default function Skills() {
    return (
        <div className="min-h-screen bg-blue-100 p-6">
            {/* Page Title */}
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-2">Skills</h1>
                <p className="text-sm mb-6">
                    <ul>
                        <li>1 - Minimal experience</li>
                        <li>2 - Limited experience or not used in over a year.</li>
                        <li>3 - Good grasp and can create decent projects.</li>
                        <li>4 - Multiple uses, capable of solo project completion.</li>
                        <li>5 - Preferred techs used daily</li>
                    </ul>
                </p>
            </div>

            {/* Grid Layout for Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Web Category */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Web</h2>
                    <ul>
                        {renderTechRating("HTML", 5)}
                        {renderTechRating("CSS", 4)}
                        {renderTechRating("JavaScript", 5)}
                        {renderTechRating("TypeScript", 4)}
                        {renderTechRating("React", 5)}
                        {renderTechRating("NextJS", 5)}
                        {renderTechRating("Angular", 3)}
                        {renderTechRating("NodeJS", 4)}
                        {renderTechRating("Redux", 4)}
                        {renderTechRating("Vite", 4)}
                        {renderTechRating("Tailwind", 4)}
                    </ul>
                </div>

                {/* Cloud Category */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Cloud</h2>
                    <ul>
                        {renderTechRating("AWS", 4)}
                        {renderTechRating("Azure", 3)}
                        {renderTechRating("Vercel", 4)}
                    </ul>
                </div>

                {/* Database Category */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Database</h2>
                    <ul>
                        {renderTechRating("Oracle", 4)}
                        {renderTechRating("Sybase", 4)}
                        {renderTechRating("SQL Server", 4)}
                        {renderTechRating("MongoDB", 3)}
                    </ul>
                </div>

                {/* Other Category */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Other</h2>
                    <ul>
                        {renderTechRating("VSCode", 5)}
                        {renderTechRating("Jira", 5)}
                        {renderTechRating("Figma", 5)}
                        {renderTechRating("TypeScript", 4)}
                        {renderTechRating("React", 4)}
                        {renderTechRating("NextJS", 3)}
                        {renderTechRating("Angular", 3)}
                        {renderTechRating("NodeJS", 4)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

// Helper function to render tech and star ratings
function renderTechRating(tech: string, rating: number) {
    return (
        <li className="flex justify-between items-center py-2">
            <span>{tech}</span>
            <div className="flex">
                {[...Array(5)].map((_, i) => (
                    <svg
                        key={i}
                        className={`w-5 h-5 ${i < rating ? "text-blue-500" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                ))}
            </div>
        </li>
    );
}
