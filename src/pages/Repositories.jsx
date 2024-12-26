import { BsDatabase } from "react-icons/bs";
import { FaSyncAlt, FaPlus, FaCircle, FaSearch } from "react-icons/fa";

const Repositories = () => {
    const repositories = [
        {
            name: "design-system",
            type: "Public",
            size: "7320 KB",
            updated: "1 day ago",
            language: "React",
        },
        {
            name: "codeant-ci-app",
            type: "Private",
            size: "5871 KB",
            updated: "2 days ago",
            language: "Javascript",
        },
        {
            name: "analytics-dashboard",
            type: "Private",
            size: "4521 KB",
            updated: "5 days ago",
            language: "Python",
        },
        {
            name: "mobile-app",
            type: "Public",
            size: "3096 KB",
            updated: "3 days ago",
            language: "Swift",
        },
        {
            name: "e-commerce-platform",
            type: "Private",
            size: "6210 KB",
            updated: "6 days ago",
            language: "Java",
        },
        {
            name: "blog-website",
            type: "Public",
            size: "1876 KB",
            updated: "4 days ago",
            language: "HTML/CSS",
        },
        {
            name: "social-network",
            type: "Private",
            size: "5432 KB",
            updated: "7 days ago",
            language: "PHP",
        },
        {
            name: "analytics-dashboard",
            type: "Private",
            size: "4521 KB",
            updated: "5 days ago",
            language: "Python",
        },
        {
            name: "mobile-app",
            type: "Public",
            size: "3096 KB",
            updated: "3 days ago",
            language: "Swift",
        },
        {
            name: "e-commerce-platform",
            type: "Private",
            size: "6210 KB",
            updated: "6 days ago",
            language: "Java",
        },
        {
            name: "blog-website",
            type: "Public",
            size: "1876 KB",
            updated: "4 days ago",
            language: "HTML/CSS",
        },
        {
            name: "social-network",
            type: "Private",
            size: "5432 KB",
            updated: "7 days ago",
            language: "PHP",
        },
    ];

    return (
        <>
            <div className="main">
                <div className="repository-outer">
                    <header className="header">
                        <div className="header-text">
                            <h2>Repositories</h2>
                            <p>33 total repositories</p>
                        </div>
                        <div className="actions">
                            <button className="refresh">
                                <FaSyncAlt /> Refresh All
                            </button>
                            <button className="add">
                                <FaPlus /> Add Repository
                            </button>
                        </div>
                    </header>
                    <div className="search-bar">
                        <FaSearch className="search-icon" />
                        <input type="text" placeholder="Search Repositories" />
                    </div>
                    <div className="repository-list">
                        {repositories.map((repo, index) => (
                            <div className="repository-card" key={index}>
                                <div className="repo-info">
                                    <h3>{repo.name}</h3>
                                    <span className="repo-type">
                                        {repo.type}
                                    </span>
                                </div>
                                <div className="repo-meta">
                                    <div className="repo-lang">
                                        {repo.language}
                                        <FaCircle
                                            size={"8px"}
                                            color="rgba(21, 112, 239, 1)"
                                        />
                                    </div>
                                    <div className="repo-size">
                                        <BsDatabase size={"13px"} />
                                        {repo.size}
                                    </div>
                                    <div className="repo-update">
                                        Updated {repo.updated}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Repositories;
