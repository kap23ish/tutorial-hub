const tutorialDatabase = {
    culturalArts: [
        {
            id: 'tea-ceremony',
            title: 'Mastering the Traditional Japanese Tea Ceremony',
            description: 'Learn the ancient art of Japanese tea ceremony (茶道) with precise techniques and cultural significance',
            steps: [
                {
                    title: "Preparation",
                    description: "Clean the tea room and arrange utensils",
                    time: "15 minutes",
                    details: [
                        "Sweep the tatami mats",
                        "Arrange the scroll and flowers",
                        "Prepare the charcoal for the brazier"
                    ]
                },
                {
                    title: "Utensil Arrangement",
                    description: "Set up the tea ceremony tools in the correct order",
                    time: "10 minutes",
                    details: [
                        "Place the tea bowl (chawan)",
                        "Arrange the tea scoop (chashaku)",
                        "Position the tea whisk (chasen)",
                        "Set up the tea caddy (natsume)"
                    ]
                },
                {
                    title: "Water Preparation",
                    description: "Heat water to the perfect temperature",
                    time: "5 minutes",
                    details: [
                        "Fill the kettle with fresh water",
                        "Heat to 70-80°C for thin tea",
                        "Heat to 85-90°C for thick tea"
                    ]
                },
                {
                    title: "Tea Preparation",
                    description: "Prepare the matcha tea with precise movements",
                    time: "10 minutes",
                    details: [
                        "Measure 2 scoops of matcha",
                        "Add 70ml of hot water",
                        "Whisk in 'W' motion until frothy"
                    ]
                },
                {
                    title: "Serving",
                    description: "Present the tea to guests with proper etiquette",
                    time: "15 minutes",
                    details: [
                        "Turn the bowl to face the guest",
                        "Place the bowl with both hands",
                        "Bow slightly when serving"
                    ]
                }
            ],
            tips: [
                "Practice each movement slowly and deliberately",
                "Maintain proper posture throughout the ceremony",
                "Focus on mindfulness and presence",
                "Remember the four principles: harmony, respect, purity, and tranquility"
            ],
            difficulty: "Advanced",
            duration: "1 hour",
            category: "Cultural Arts",
            subcategory: "Japanese Traditions",
            region: "Japan",
            likes: 0,
            materials: [
                {
                    name: "Tea Bowl (Chawan)",
                    description: "Traditional ceramic bowl for serving matcha",
                    importance: "Essential"
                },
                {
                    name: "Tea Whisk (Chasen)",
                    description: "Bamboo whisk for mixing matcha",
                    importance: "Essential"
                },
                {
                    name: "Tea Scoop (Chashaku)",
                    description: "Bamboo scoop for measuring matcha",
                    importance: "Essential"
                },
                {
                    name: "Tea Caddy (Natsume)",
                    description: "Container for storing matcha",
                    importance: "Essential"
                },
                {
                    name: "Traditional Kimono",
                    description: "Optional but recommended for authenticity",
                    importance: "Optional"
                }
            ],
            prerequisites: [
                "Basic understanding of Japanese culture",
                "Patience and attention to detail",
                "Quiet practice space"
            ],
            culturalNotes: "The tea ceremony embodies the principles of wabi-sabi and mindfulness",
            variations: [
                {
                    name: "Thin Tea (Usucha)",
                    description: "Lighter, more casual style",
                    difficulty: "Intermediate"
                },
                {
                    name: "Thick Tea (Koicha)",
                    description: "More formal, concentrated style",
                    difficulty: "Advanced"
                }
            ],
            commonMistakes: [
                "Rushing through movements",
                "Incorrect water temperature",
                "Improper whisking technique",
                "Incorrect posture"
            ],
            resources: [
                {
                    type: "Video",
                    title: "Traditional Tea Ceremony Demonstration",
                    url: "https://example.com/tea-ceremony"
                },
                {
                    type: "Book",
                    title: "The Book of Tea by Okakura Kakuzō",
                    description: "Classic text on tea ceremony philosophy"
                }
            ]
        }
    ],
    technology: [
        {
            id: 'python-game-dev',
            title: "Professional Python Game Development",
            description: "Create a polished 2D game using Python and Pygame with industry-standard practices",
            steps: [
                {
                    title: "Environment Setup",
                    description: "Configure development environment with best practices",
                    time: "30 minutes",
                    details: [
                        "Install Python 3.9+",
                        "Set up virtual environment",
                        "Install Pygame and dependencies",
                        "Configure IDE with linting"
                    ]
                },
                {
                    title: "Project Structure",
                    description: "Create a scalable project architecture",
                    time: "45 minutes",
                    details: [
                        "Set up MVC pattern",
                        "Create asset management system",
                        "Implement configuration system",
                        "Set up logging"
                    ]
                },
                {
                    title: "Core Systems",
                    description: "Implement essential game systems",
                    time: "2 hours",
                    details: [
                        "Create game loop",
                        "Implement state management",
                        "Set up event system",
                        "Add resource loading"
                    ]
                },
                {
                    title: "Game Mechanics",
                    description: "Develop core gameplay features",
                    time: "3 hours",
                    details: [
                        "Implement player movement",
                        "Add collision detection",
                        "Create scoring system",
                        "Add power-ups"
                    ]
                },
                {
                    title: "Polish & Optimization",
                    description: "Add final touches and optimize performance",
                    time: "2 hours",
                    details: [
                        "Add particle effects",
                        "Implement sound system",
                        "Optimize rendering",
                        "Add save system"
                    ]
                }
            ],
            tips: [
                "Use object-oriented programming principles",
                "Implement proper error handling",
                "Write unit tests for critical systems",
                "Profile performance regularly"
            ],
            difficulty: "Intermediate",
            duration: "8 hours",
            category: "Technology",
            subcategory: "Game Development",
            region: "Global",
            likes: 0,
            materials: [
                {
                    name: "Computer",
                    description: "Windows/Mac/Linux with 8GB RAM minimum",
                    importance: "Essential"
                },
                {
                    name: "Python 3.9+",
                    description: "Latest stable version",
                    importance: "Essential"
                },
                {
                    name: "Pygame",
                    description: "Latest version",
                    importance: "Essential"
                },
                {
                    name: "Code Editor",
                    description: "VS Code or PyCharm recommended",
                    importance: "Essential"
                },
                {
                    name: "Graphics Software",
                    description: "For creating game assets",
                    importance: "Optional"
                }
            ],
            prerequisites: [
                "Basic Python knowledge",
                "Understanding of OOP concepts",
                "Basic game development concepts"
            ],
            variations: [
                {
                    name: "Platformer",
                    description: "Side-scrolling platform game",
                    difficulty: "Intermediate"
                },
                {
                    name: "Top-down Shooter",
                    description: "2D shooting game",
                    difficulty: "Advanced"
                }
            ],
            commonMistakes: [
                "Poor project structure",
                "Inefficient game loop",
                "Memory leaks",
                "Insufficient error handling"
            ],
            resources: [
                {
                    type: "Documentation",
                    title: "Pygame Documentation",
                    url: "https://www.pygame.org/docs/"
                },
                {
                    type: "GitHub",
                    title: "Example Project Repository",
                    url: "https://github.com/example/game-template"
                }
            ]
        }
    ]
}; 