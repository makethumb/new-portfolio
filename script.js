document.addEventListener('DOMContentLoaded', () => {
      const data = {
        "personalInformation": {
          "name": "Sourabh Soni",
          "email": "Sourabhs701",
          "github": "Sourabhs701",
          "linkedin": "Sourabhs701",
          "portfolio": null
        },
        "education": [
          {
            "university": "Rajasthan Technical University",
            "degree": "Masters in Computer Application(MCA)",
            "location": "Kota, Rajasthan",
            "dates": "May 2023- June 2025",
            "cgpa": "8.34/10",
            "major": "Cloud Computing, AI/ML, Algorithms"
          },
          {
            "university": "University of Rajasthan",
            "degree": "Bachelors in Computer Application(BCA)",
            "location": "Jaipur, Rajasthan",
            "dates": "May 2019- June 2022",
            "cgpa": "7.09/10"
          }
        ],
        "workHistory": [
          {
            "title": "Software Developer Intern",
            "company": "Vedhin Technologies",
            "location": "Jaipur, Rajasthan",
            "dates": "Mar 2024- Sep 2024",
            "description": [
              "Architected and developed RESTful APIs supporting core business functionalities",
              "Improved responsive frontend designs using React.js and Material-UI",
              "Led database optimization initiatives using MongoDB",
              "Maintained comprehensive technical documentation and participated in code reviews"
            ]
          },
          {
            "title": "Python Developer Intern",
            "company": "NeuroNexus Innovations",
            "location": "Remote",
            "dates": "Dec 2023- Feb 2024",
            "description": [
              "Enhanced code quality with rigorous unit testing and debugging",
              "Developed user-friendly, accessible interfaces, boosting engagement",
              "Utilized version control (Git) for streamlined collaborative workflows"
            ]
          }
        ],
        "projects": [
          {
            "name": "MakeThumb.com",
            "technologies": [
              "Node.js",
              "React",
              "AWS",
              "Gemini AI",
              "MongoDB",
              "Express.js"
            ],
            "description": [
              "Reduced data parsing errors by 90% through implementing a robust PDF-to-JSON parser and AI tools like Gemini Flash 1.5",
              "Achieved 99.9% uptime, ensuring a reliable cloud-based infrastructure combining AWS S3 for storage and Render for hosting",
              "Successfully transformed over 1,000 resumes into portfolio websites with an AI-powered data extraction process, increasing efficiency by 70% compared to manual workflows"
            ]
          },
          {
            "name": "ChatWithThumb",
            "technologies": [
              "Socket.IO",
              "Node.js",
              "React"
            ],
            "description": [
              "Improved chat reliability and scalability by 30% with optimized WebSocket and backend design",
              "Designed and deployed a scalable real-time messaging platform using Socket.IO and Node.js, ensuring seamless bidirectional communication"
            ]
          },
          {
            "name": "GitHorizon",
            "technologies": [
              "vscode api",
              "JavaScript"
            ],
            "description": [
              "VS Code extension designed to bring Git commit visualization directly into your development environment",
              "100% Integration with VS Code's native interface for seamless usability",
              "Visualized over 1,000+ commits across various repositories during testing"
            ]
          }
        ],
        "achievements": [
          {
            "name": "HackerRank Python Certification",
            "details": "Achieved 420+ points, placing in the top 5% of candidates globally"
          },
          {
            "name": "Excel for Finance (CFI)",
            "details": "Applied financial modeling techniques, streamlining workflows and reducing errors in complex calculations by 30%"
          },
          {
            "name": "Analyzing and Visualizing using R Programming",
            "details": "7 Days Workshop going through Data Cleaning, Data Transformation, ETL process and Visualizing it using R"
          }
        ],
        "technicalSkills": {
          "languages": ["C++", "JavaScript", "Python"],
          "courses": ["Excel for Finance (CFI)", "Analyzing and Visualizing using R Programming"],
          "databases": ["MongoDB", "MySQL", "PostgreSQL"],
          "backend": ["Node.js", "Express"],
          "frontend": ["React.js"],
          "cloudDevops": ["AWS", "Docker", "Vercel", "Render"],
          "versionControl": ["GitHub", "Git"],
          "webTechnologies": ["MERN Stack", "WebSocket"]
        }
      };

      // Render Education
      const educationList = document.getElementById('education-list');
      data.education.forEach(edu => {
        const eduItem = document.createElement('div');
        eduItem.innerHTML = `
          <h3>${edu.degree}</h3>
          <p>${edu.university}, ${edu.location}</p>
          <p>Dates: ${edu.dates}</p>
          <p>CGPA: ${edu.cgpa}</p>
        `;
        educationList.appendChild(eduItem);
      });

      // Render Work Experience
      const workList = document.getElementById('work-list');
      data.workHistory.forEach(work => {
        const workItem = document.createElement('div');
        workItem.innerHTML = `
          <h3>${work.title} at ${work.company}</h3>
          <p>${work.location} | ${work.dates}</p>
          <ul>
            ${work.description.map(desc => `<li>${desc}</li>`).join('')}
          </ul>
        `;
        workList.appendChild(workItem);
      });

      // Render Projects
      const projectsList = document.getElementById('projects-list');
      data.projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.innerHTML = `
          <h3>${project.name}</h3>
          <p>Technologies: ${project.technologies.join(', ')}</p>
          <ul>
            ${project.description.map(desc => `<li>${desc}</li>`).join('')}
          </ul>
        `;
        projectsList.appendChild(projectItem);
      });

      // Render Achievements
      const achievementsList = document.getElementById('achievements-list');
      data.achievements.forEach(achievement => {
        const achievementItem = document.createElement('div');
        achievementItem.innerHTML = `
          <h3>${achievement.name}</h3>
          <p>${achievement.details}</p>
        `;
        achievementsList.appendChild(achievementItem);
      });

      // Render Technical Skills
      const skillsList = document.getElementById('skills-list');
      Object.entries(data.technicalSkills).forEach(([category, skills]) => {
        const skillCategory = document.createElement('div');
        skillCategory.innerHTML = `
          <h3>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          <div>
            ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
          </div>
        `;
        skillsList.appendChild(skillCategory);
      });

      // Initialize AOS
      AOS.init();
    });