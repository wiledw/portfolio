import data from "../../data/index.json";
import "./project.css";

export default function MyPortfolio() {
  return (
    <section className="project section" id="projects">
        <h2 className="section__title">My Winning Hackathon Projects</h2>
        <span className="section__subtitle"></span>

      <div className="portfolio--section--container container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio--link">
                {item.linkDesc}
                {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="svg-position">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 20 19"
                        fill="none"
                    >
                        <path
                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                        stroke="currentColor"
                        stroke-width="2.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        />
                    </svg>
                    </a>
                )}
                </p>
                <div className="portfolio--tech-used">
                {item.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
