// Practical tutorial data with real content
const initialTutorials = [
    {
        id: 1,
        title: "Mastering the Traditional Japanese Tea Ceremony",
        description: "Learn the ancient art of Japanese tea ceremony (茶道) with precise techniques and cultural significance",
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
    },
    {
        id: 2,
        title: "Simple Chocolate Chip Cookies",
        description: "Make delicious homemade cookies with this foolproof recipe",
        steps: [
            "Preheat oven to 375°F (190°C)",
            "Mix 2¾ cups flour, 1 tsp baking soda, ½ tsp salt in a bowl",
            "In another bowl, cream 1 cup butter, ¾ cup sugar, ¾ cup brown sugar",
            "Beat in 2 eggs and 2 tsp vanilla to the butter mixture",
            "Gradually blend dry mixture into the wet mixture",
            "Stir in 2 cups chocolate chips",
            "Drop rounded tablespoons onto ungreased baking sheets",
            "Bake for 10-12 minutes or until golden brown",
            "Let stand on baking sheet for 2 minutes",
            "Cool completely on wire racks"
        ],
        tips: "For chewier cookies, use melted butter and more brown sugar",
        difficulty: "Beginner",
        duration: "30 minutes",
        category: "Cooking",
        likes: 0,
        materials: [
            "2¾ cups flour",
            "1 tsp baking soda",
            "½ tsp salt",
            "1 cup butter",
            "¾ cup sugar",
            "¾ cup brown sugar",
            "2 eggs",
            "2 tsp vanilla",
            "2 cups chocolate chips"
        ]
    },
    {
        id: 3,
        title: "Basic Friendship Bracelet",
        description: "Create a colorful friendship bracelet using simple knot patterns",
        steps: [
            "Choose 3 different colored embroidery threads",
            "Cut each thread to 24 inches long",
            "Tie all threads together at one end, leaving 2 inches of slack",
            "Secure the knotted end to a flat surface",
            "Separate the threads and arrange in your desired order",
            "Take the leftmost thread and tie a forward knot over the second thread",
            "Continue this pattern across all threads",
            "Repeat the row pattern until desired length",
            "Tie off the end with a secure knot",
            "Trim excess thread, leaving 2 inches for tying"
        ],
        tips: "Keep consistent tension in your knots for a uniform look",
        difficulty: "Beginner",
        duration: "20 minutes",
        category: "Crafts",
        likes: 0,
        materials: ["Embroidery thread (3 colors)", "Scissors", "Tape or safety pin"]
    },
    {
        id: 4,
        title: "5-Minute Face Sketch",
        description: "Learn the basics of sketching a face with simple proportions",
        steps: [
            "Draw a circle for the basic head shape",
            "Add a vertical line down the center for symmetry",
            "Draw a horizontal line halfway down for the eyes",
            "Place the nose halfway between eyes and chin",
            "Draw the mouth halfway between nose and chin",
            "Add basic eye shapes on the eye line",
            "Sketch basic eyebrows above the eyes",
            "Add simple ear shapes between eye and nose lines",
            "Outline the jaw and chin",
            "Add basic hair shapes around the head"
        ],
        tips: "Focus on proportions rather than details when starting out",
        difficulty: "Beginner",
        duration: "5-10 minutes",
        category: "Art",
        likes: 0,
        materials: ["Paper", "Pencil", "Eraser"]
    },
    {
        id: 5,
        title: "Basic Guitar Chords",
        description: "Master the essential guitar chords for beginners",
        steps: [
            "Start with the E major chord - all strings open except 1st, 2nd, and 3rd frets on strings 3, 4, and 5",
            "Learn A major - place fingers on 2nd frets of strings 2, 3, and 4",
            "Practice D major - fingers on 2nd fret of string 3, 3rd fret of string 2, and 2nd fret of string 1",
            "Try G major - 3rd fret on string 6, 2nd fret on string 5, open string 4, open string 3, open string 2, 3rd fret on string 1",
            "Learn C major - 1st fret on string 2, 2nd fret on string 4, 3rd fret on string 5",
            "Practice transitioning between chords slowly",
            "Strum each chord to ensure all notes ring clearly",
            "Practice changing chords to a steady rhythm",
            "Try simple chord progressions (e.g., G-D-Em-C)",
            "Practice for 10 minutes daily"
        ],
        tips: "Press strings close to frets for cleaner sound. Use fingertips to avoid muting other strings.",
        difficulty: "Beginner",
        duration: "15-20 minutes daily",
        category: "Music",
        likes: 0,
        materials: ["Guitar", "Guitar pick (optional)", "Chair", "Patience"]
    },
    {
        id: 69,
        title: "French Macarons",
        description: "Master the art of making perfect French macarons with this detailed guide",
        steps: [
            "Sift almond flour and powdered sugar",
            "Whip egg whites to stiff peaks",
            "Fold in dry ingredients carefully",
            "Pipe uniform circles",
            "Let rest until dry",
            "Bake at precise temperature",
            "Fill with ganache"
        ],
        tips: "Use aged egg whites and precise measurements for best results",
        difficulty: "Advanced",
        duration: "2 hours",
        category: "Cooking",
        likes: 0,
        materials: ["Almond flour", "Powdered sugar", "Egg whites", "Granulated sugar", "Food coloring", "Piping bag"]
    },
    {
        id: 70,
        title: "Japanese Bonsai",
        description: "Traditional Japanese bonsai tree cultivation",
        steps: [
            "Select appropriate tree",
            "Learn pruning techniques",
            "Shape with wire",
            "Repot properly",
            "Maintain health",
            "Create aesthetic form"
        ],
        tips: "Patience is key - bonsai is a long-term art form",
        difficulty: "Advanced",
        duration: "Ongoing",
        category: "Gardening",
        likes: 0,
        materials: ["Bonsai tree", "Pruning tools", "Wire", "Bonsai soil", "Pot"]
    },
    {
        id: 71,
        title: "Italian Street Photography",
        description: "Capture the essence of Italian street life",
        steps: [
            "Study light conditions",
            "Learn composition rules",
            "Practice candid shots",
            "Edit for mood",
            "Create photo story"
        ],
        tips: "Be respectful of subjects and capture authentic moments",
        difficulty: "Intermediate",
        duration: "2 hours",
        category: "Photography",
        likes: 0,
        materials: ["Camera", "Wide lens", "Comfortable shoes", "Editing software"]
    },
    {
        id: 72,
        title: "Tibetan Sound Meditation",
        description: "Traditional Tibetan sound healing meditation",
        steps: [
            "Prepare space",
            "Learn breathing",
            "Use singing bowls",
            "Practice mantras",
            "Deepen meditation"
        ],
        tips: "Create a peaceful environment and practice regularly",
        difficulty: "Intermediate",
        duration: "30 minutes",
        category: "Meditation",
        likes: 0,
        materials: ["Singing bowls", "Meditation cushion", "Quiet space", "Timer"]
    },
    {
        id: 73,
        title: "Korean Celadon",
        description: "Traditional Korean celadon pottery techniques",
        steps: [
            "Prepare clay",
            "Throw on wheel",
            "Carve designs",
            "Apply glaze",
            "Fire in kiln"
        ],
        tips: "Master the unique celadon glaze application",
        difficulty: "Advanced",
        duration: "3 hours",
        category: "Pottery",
        likes: 0,
        materials: ["Clay", "Potter's wheel", "Carving tools", "Celadon glaze", "Kiln"]
    },
    {
        id: 74,
        title: "Chinese Seal Carving",
        description: "Traditional Chinese seal carving and calligraphy",
        steps: [
            "Design seal pattern",
            "Transfer to stone",
            "Carve characters",
            "Polish surface",
            "Test impression"
        ],
        tips: "Use proper tools and follow traditional character forms",
        difficulty: "Advanced",
        duration: "2 hours",
        category: "Calligraphy",
        likes: 0,
        materials: ["Seal stone", "Carving tools", "Ink pad", "Design paper"]
    },
    {
        id: 75,
        title: "Japanese Joinery",
        description: "Traditional Japanese wood joinery techniques",
        steps: [
            "Select appropriate wood",
            "Measure and mark",
            "Cut precise joints",
            "Fit pieces together",
            "Finish surfaces"
        ],
        tips: "Precision is key - measure twice, cut once",
        difficulty: "Advanced",
        duration: "4 hours",
        category: "Woodworking",
        likes: 0,
        materials: ["Hardwood", "Chisels", "Saws", "Measuring tools", "Clamps"]
    },
    {
        id: 76,
        title: "Peruvian Weaving",
        description: "Traditional Peruvian textile weaving techniques",
        steps: [
            "Set up loom",
            "Choose colors",
            "Learn basic patterns",
            "Weave sample",
            "Create design",
            "Finish edges"
        ],
        tips: "Use natural dyes and traditional patterns",
        difficulty: "Intermediate",
        duration: "3 hours",
        category: "Textiles",
        likes: 0,
        materials: ["Loom", "Wool yarn", "Natural dyes", "Pattern template"]
    },
    {
        id: 77,
        title: "Balinese Silver",
        description: "Traditional Balinese silver jewelry making",
        steps: [
            "Design piece",
            "Prepare silver",
            "Shape metal",
            "Add details",
            "Polish finish"
        ],
        tips: "Use traditional Balinese motifs and techniques",
        difficulty: "Advanced",
        duration: "4 hours",
        category: "Jewelry",
        likes: 0,
        materials: ["Silver sheet", "Jewelry tools", "Polishing compounds", "Design tools"]
    },
    {
        id: 78,
        title: "Moroccan Tile Design",
        description: "Traditional Moroccan zellige tile patterns",
        steps: [
            "Study patterns",
            "Create template",
            "Cut tiles",
            "Arrange design",
            "Set in place",
            "Grout and finish"
        ],
        tips: "Start with simple geometric patterns before attempting complex designs",
        difficulty: "Advanced",
        duration: "4 hours",
        category: "Crafts",
        likes: 0,
        materials: ["Ceramic tiles", "Tile cutter", "Adhesive", "Grout", "Pattern template"]
    },
    {
        id: 79,
        title: "Indian Henna Art",
        description: "Traditional Indian henna application techniques",
        steps: [
            "Prepare henna paste",
            "Practice basic patterns",
            "Learn flow techniques",
            "Create design",
            "Apply carefully",
            "Let dry properly"
        ],
        tips: "Use fresh, natural henna for best results and practice on paper first",
        difficulty: "Intermediate",
        duration: "2 hours",
        category: "Body Art",
        likes: 0,
        materials: ["Henna paste", "Application cone", "Design template", "Lemon juice"]
    },
    {
        id: 80,
        title: "Swedish Wood Carving",
        description: "Traditional Swedish wood carving techniques",
        steps: [
            "Select wood type",
            "Learn basic cuts",
            "Practice patterns",
            "Create design",
            "Finish piece"
        ],
        tips: "Keep tools sharp and work with the grain of the wood",
        difficulty: "Intermediate",
        duration: "3 hours",
        category: "Woodworking",
        likes: 0,
        materials: ["Softwood", "Carving tools", "Sharpening stone", "Pattern template"]
    },
    {
        id: 81,
        title: "Turkish Coffee",
        description: "Traditional Turkish coffee preparation",
        steps: [
            "Grind coffee fine",
            "Measure water",
            "Add sugar",
            "Heat properly",
            "Serve with foam"
        ],
        tips: "Use fresh, finely ground coffee and heat slowly for best results",
        difficulty: "Beginner",
        duration: "15 minutes",
        category: "Cooking",
        likes: 0,
        materials: ["Turkish coffee", "Cezve pot", "Coffee cups", "Sugar"]
    },
    {
        id: 82,
        title: "Mexican Paper Flowers",
        description: "Traditional Mexican paper flower making",
        steps: [
            "Cut paper shapes",
            "Create petals",
            "Assemble flower",
            "Add details",
            "Finish stem"
        ],
        tips: "Use tissue paper and layer colors for vibrant results",
        difficulty: "Beginner",
        duration: "1 hour",
        category: "Crafts",
        likes: 0,
        materials: ["Tissue paper", "Floral wire", "Scissors", "Glue"]
    },
    {
        id: 83,
        title: "Thai Fruit Carving",
        description: "Traditional Thai fruit carving techniques",
        steps: [
            "Select fruits",
            "Learn basic cuts",
            "Practice patterns",
            "Create design",
            "Preserve work"
        ],
        tips: "Use sharp tools and work quickly to prevent browning",
        difficulty: "Advanced",
        duration: "2 hours",
        category: "Cooking",
        likes: 0,
        materials: ["Fruits", "Carving tools", "Lemon juice", "Display tray"]
    },
    {
        id: 84,
        title: "Russian Nesting Dolls",
        description: "Traditional Russian matryoshka doll painting",
        steps: [
            "Prepare surface",
            "Design pattern",
            "Paint base colors",
            "Add details",
            "Varnish finish"
        ],
        tips: "Use traditional Russian folk patterns and bright colors",
        difficulty: "Intermediate",
        duration: "3 hours",
        category: "Crafts",
        likes: 0,
        materials: ["Wooden dolls", "Acrylic paints", "Brushes", "Varnish"]
    },
    {
        id: 85,
        title: "Egyptian Papyrus",
        description: "Traditional Egyptian papyrus making",
        steps: [
            "Prepare reeds",
            "Weave strips",
            "Press sheets",
            "Dry properly",
            "Polish surface"
        ],
        tips: "Use fresh reeds and press evenly for best results",
        difficulty: "Advanced",
        duration: "2 days",
        category: "Crafts",
        likes: 0,
        materials: ["Papyrus reeds", "Press", "Water", "Polishing stone"]
    },
    {
        id: 86,
        title: "Brazilian Capoeira",
        description: "Traditional Brazilian martial art and dance",
        steps: [
            "Learn basic moves",
            "Practice rhythm",
            "Master ginga",
            "Learn kicks",
            "Flow with music"
        ],
        tips: "Focus on fluidity and musicality in movements",
        difficulty: "Intermediate",
        duration: "1 hour",
        category: "Dance",
        likes: 0,
        materials: ["Comfortable clothes", "Space to move", "Berimbau music"]
    },
    {
        id: 87,
        title: "Greek Olive Oil",
        description: "Traditional Greek olive oil production",
        steps: [
            "Harvest olives",
            "Clean fruit",
            "Press properly",
            "Separate oil",
            "Store correctly"
        ],
        tips: "Use fresh olives and maintain proper temperature during pressing",
        difficulty: "Advanced",
        duration: "1 day",
        category: "Cooking",
        likes: 0,
        materials: ["Olives", "Press", "Storage containers", "Filter"]
    }
];

// Global tutorial database with worldwide categories
const tutorialDatabase = {
    cooking: [
        {
            id: 'cooking1',
            title: "Italian Pizza Making",
            description: "Authentic Neapolitan pizza making technique from Italy",
            steps: [
                "Prepare pizza dough with 00 flour",
                "Let dough rise for 24 hours",
                "Shape dough by hand stretching",
                "Add San Marzano tomatoes",
                "Top with fresh mozzarella",
                "Bake at highest oven temperature",
                "Finish with fresh basil"
            ],
            tips: "Use a pizza stone for best results. Temperature is key for perfect crust.",
            difficulty: "Intermediate",
            duration: "2 hours (plus 24h prep)",
            category: "Cooking",
            region: "Italy",
            likes: 0,
            materials: ["00 Flour", "Yeast", "San Marzano tomatoes", "Fresh mozzarella", "Basil", "Pizza stone"]
        },
        {
            id: 'cooking2',
            title: "Japanese Sushi Rolling",
            description: "Traditional sushi making techniques from Japan",
            steps: [
                "Prepare sushi rice",
                "Season rice with vinegar mix",
                "Layout nori sheet",
                "Spread rice evenly",
                "Add fish and vegetables",
                "Roll using bamboo mat",
                "Cut into pieces"
            ],
            tips: "Use short-grain Japanese rice. Keep hands wet while handling rice.",
            difficulty: "Intermediate",
            duration: "1 hour",
            category: "Cooking",
            region: "Japan",
            likes: 0,
            materials: ["Sushi rice", "Nori", "Fresh fish", "Bamboo mat", "Rice vinegar"]
        },
        {
            id: 'cooking3',
            title: "Thai Green Curry",
            description: "Master the art of authentic Thai curry making",
            steps: ["Prepare curry paste", "Cook coconut milk", "Add vegetables", "Season perfectly", "Serve with rice"],
            tips: "Use fresh Thai basil and kaffir lime leaves for authentic flavor",
            difficulty: "Intermediate",
            duration: "45 minutes",
            category: "Cooking",
            region: "Thailand",
            likes: 0,
            materials: ["Coconut milk", "Green curry paste", "Thai basil", "Vegetables", "Fish sauce"]
        },
        {
            id: 'cooking4',
            title: "French Croissants",
            description: "Create flaky, buttery croissants from scratch",
            steps: ["Make dough", "Laminate butter", "Shape croissants", "Proof dough", "Bake until golden"],
            tips: "Keep dough cold while working. Use European-style butter.",
            difficulty: "Advanced",
            duration: "3 hours",
            category: "Cooking",
            region: "France",
            likes: 0,
            materials: ["Flour", "European butter", "Yeast", "Milk", "Egg wash"]
        },
        {
            id: 'cooking5',
            title: "Korean Kimchi Making",
            description: "Traditional Korean kimchi fermentation techniques",
            steps: [
                "Prepare napa cabbage",
                "Make kimchi paste with gochugaru",
                "Layer cabbage with paste",
                "Ferment in airtight container",
                "Store properly"
            ],
            tips: "Use fresh ingredients and maintain proper temperature during fermentation",
            difficulty: "Intermediate",
            category: "Cooking",
            region: "Korea",
            likes: 0,
            materials: ["Napa cabbage", "Gochugaru", "Garlic", "Ginger", "Fish sauce", "Airtight container"]
        },
        {
            id: 'cooking6',
            title: "Indian Butter Chicken",
            description: "Classic North Indian curry with rich flavors",
            steps: [
                "Marinate chicken in yogurt and spices",
                "Prepare tomato-based gravy",
                "Cook chicken in tandoor or oven",
                "Combine with gravy",
                "Finish with cream and butter"
            ],
            tips: "Use fresh cream and butter for authentic taste",
            difficulty: "Intermediate",
            category: "Cooking",
            region: "India",
            likes: 0,
            materials: ["Chicken", "Yogurt", "Tomatoes", "Cream", "Butter", "Indian spices"]
        },
        {
            id: 'cooking7',
            title: "French Macarons",
            description: "Master the art of making perfect French macarons with this detailed guide",
            steps: [
                "Sift almond flour and powdered sugar",
                "Whip egg whites to stiff peaks",
                "Fold in dry ingredients carefully",
                "Pipe uniform circles",
                "Let rest until dry",
                "Bake at precise temperature",
                "Fill with ganache"
            ],
            tips: "Use aged egg whites and precise measurements for best results",
            difficulty: "Advanced",
            category: "Cooking",
            region: "France",
            likes: 0,
            materials: ["Almond flour", "Powdered sugar", "Egg whites", "Granulated sugar", "Food coloring", "Piping bag"]
        },
        {
            id: 'cooking8',
            title: "Thai Mango Sticky Rice",
            description: "Authentic Thai dessert with sweet mango and coconut rice",
            steps: [
                "Soak sticky rice overnight",
                "Steam rice with coconut milk",
                "Prepare sweet coconut sauce",
                "Cut ripe mango",
                "Assemble and serve"
            ],
            tips: "Use Thai sticky rice and ripe mango for authentic flavor",
            difficulty: "Intermediate",
            category: "Cooking",
            region: "Thailand",
            likes: 0,
            materials: ["Sticky rice", "Coconut milk", "Palm sugar", "Ripe mango", "Pandan leaves"]
        },
        {
            id: 'cooking9',
            title: "Japanese Ramen",
            description: "Authentic Japanese ramen with rich broth and perfect noodles",
            steps: [
                "Prepare pork bones for broth",
                "Make tare seasoning",
                "Cook chashu pork",
                "Prepare ramen noodles",
                "Assemble with toppings",
                "Add final seasonings"
            ],
            tips: "Use high-quality pork bones and simmer for at least 12 hours",
            difficulty: "Advanced",
            category: "Cooking",
            region: "Japan",
            likes: 0,
            materials: ["Pork bones", "Soy sauce", "Mirin", "Ramen noodles", "Chashu pork", "Green onions", "Soft-boiled eggs"]
        },
        {
            id: 'cooking10',
            title: "Spanish Paella",
            description: "Traditional Spanish rice dish with seafood and saffron",
            steps: [
                "Prepare sofrito base",
                "Toast rice with saffron",
                "Add seafood and broth",
                "Cook until rice is tender",
                "Let rest before serving"
            ],
            tips: "Use bomba rice and don't stir after adding broth",
            difficulty: "Intermediate",
            category: "Cooking",
            region: "Spain",
            likes: 0,
            materials: ["Bomba rice", "Saffron", "Seafood mix", "Chicken", "Bell peppers", "Tomatoes", "Garlic"]
        }
    ],
    crafts: [
        {
            id: 'crafts1',
            title: "Indian Mandala Art",
            description: "Create beautiful traditional Mandala patterns",
            steps: [
                "Draw center point",
                "Create circular guidelines",
                "Draw basic pattern",
                "Add geometric shapes",
                "Include detailed patterns",
                "Add colors systematically",
                "Finish with fine details"
            ],
            tips: "Work from center outward. Use proper color combinations for harmony.",
            difficulty: "Intermediate",
            duration: "2 hours",
            category: "Crafts",
            region: "India",
            likes: 0,
            materials: ["Drawing paper", "Compass", "Ruler", "Fine-tip pens", "Coloring materials"]
        },
        {
            id: 'crafts2',
            title: "Mexican Piñata Making",
            description: "Create a traditional Mexican piñata from scratch",
            steps: [
                "Create balloon base",
                "Apply paper mache layers",
                "Let dry completely",
                "Add decorative paper",
                "Create fringe layers",
                "Add hanging string",
                "Fill with treats"
            ],
            tips: "Use multiple paper mache layers for strength. Bright colors work best.",
            difficulty: "Beginner",
            duration: "3 hours",
            category: "Crafts",
            region: "Mexico",
            likes: 0,
            materials: ["Balloon", "Newspaper", "Crepe paper", "Glue", "String"]
        },
        {
            id: 'crafts3',
            title: "Moroccan Mosaic",
            description: "Create beautiful Moroccan-style mosaic patterns",
            steps: ["Design pattern", "Cut tiles", "Arrange pieces", "Apply grout", "Polish surface"],
            tips: "Use traditional geometric patterns for authenticity",
            difficulty: "Intermediate",
            duration: "3 hours",
            category: "Crafts",
            region: "Morocco",
            likes: 0,
            materials: ["Tiles", "Grout", "Cutting tools", "Design template"]
        },
        {
            id: 'crafts4',
            title: "Japanese Kintsugi",
            description: "Traditional Japanese art of repairing pottery with gold",
            steps: [
                "Prepare broken pieces",
                "Mix urushi lacquer",
                "Join pieces carefully",
                "Apply gold powder",
                "Polish and finish"
            ],
            tips: "Work in well-ventilated area and use proper safety equipment",
            difficulty: "Advanced",
            category: "Crafts",
            region: "Japan",
            likes: 0,
            materials: ["Broken pottery", "Urushi lacquer", "Gold powder", "Safety equipment"]
        },
        {
            id: 'crafts5',
            title: "Swedish Dala Horse",
            description: "Traditional Swedish wooden horse carving and painting",
            steps: [
                "Select quality wood",
                "Carve basic horse shape",
                "Refine details",
                "Sand smooth",
                "Paint traditional patterns",
                "Apply protective finish"
            ],
            tips: "Use traditional Swedish colors and patterns for authenticity",
            difficulty: "Advanced",
            category: "Crafts",
            region: "Sweden",
            likes: 0,
            materials: ["Wood block", "Carving tools", "Sandpaper", "Acrylic paints", "Varnish"]
        },
        {
            id: 'crafts6',
            title: "Moroccan Mosaic",
            description: "Traditional Moroccan zellige tile work",
            steps: [
                "Design geometric pattern",
                "Cut ceramic tiles",
                "Arrange pieces",
                "Apply grout",
                "Polish surface"
            ],
            tips: "Use traditional geometric patterns for authenticity",
            difficulty: "Advanced",
            category: "Crafts",
            region: "Morocco",
            likes: 0,
            materials: ["Ceramic tiles", "Tile cutter", "Grout", "Pattern template", "Polish"]
        },
        {
            id: 'crafts7',
            title: "Moroccan Tile Design",
            description: "Traditional Moroccan zellige tile patterns",
            steps: [
                "Study patterns",
                "Create template",
                "Cut tiles",
                "Arrange design",
                "Set in place",
                "Grout and finish"
            ],
            tips: "Start with simple geometric patterns before attempting complex designs",
            difficulty: "Advanced",
            category: "Crafts",
            region: "Morocco",
            likes: 0,
            materials: ["Ceramic tiles", "Tile cutter", "Adhesive", "Grout", "Pattern template"]
        },
        {
            id: 'crafts8',
            title: "Indian Henna Art",
            description: "Traditional Indian henna application techniques",
            steps: [
                "Prepare henna paste",
                "Practice basic patterns",
                "Learn flow techniques",
                "Create design",
                "Apply carefully",
                "Let dry properly"
            ],
            tips: "Use fresh, natural henna for best results and practice on paper first",
            difficulty: "Intermediate",
            category: "Body Art",
            region: "India",
            likes: 0,
            materials: ["Henna paste", "Application cone", "Design template", "Lemon juice"]
        },
        {
            id: 'crafts9',
            title: "Swedish Wood Carving",
            description: "Traditional Swedish wood carving techniques",
            steps: [
                "Select wood type",
                "Learn basic cuts",
                "Practice patterns",
                "Create design",
                "Finish piece"
            ],
            tips: "Keep tools sharp and work with the grain of the wood",
            difficulty: "Intermediate",
            category: "Woodworking",
            region: "Sweden",
            likes: 0,
            materials: ["Softwood", "Carving tools", "Sharpening stone", "Pattern template"]
        },
        {
            id: 'crafts10',
            title: "Turkish Coffee",
            description: "Traditional Turkish coffee preparation",
            steps: [
                "Grind coffee fine",
                "Measure water",
                "Add sugar",
                "Heat properly",
                "Serve with foam"
            ],
            tips: "Use fresh, finely ground coffee and heat slowly for best results",
            difficulty: "Beginner",
            category: "Cooking",
            region: "Turkey",
            likes: 0,
            materials: ["Turkish coffee", "Cezve pot", "Coffee cups", "Sugar"]
        },
        {
            id: 'crafts11',
            title: "Mexican Paper Flowers",
            description: "Traditional Mexican paper flower making",
            steps: [
                "Cut paper shapes",
                "Create petals",
                "Assemble flower",
                "Add details",
                "Finish stem"
            ],
            tips: "Use tissue paper and layer colors for vibrant results",
            difficulty: "Beginner",
            category: "Crafts",
            region: "Mexico",
            likes: 0,
            materials: ["Tissue paper", "Floral wire", "Scissors", "Glue"]
        },
        {
            id: 'crafts12',
            title: "Thai Fruit Carving",
            description: "Traditional Thai fruit carving techniques",
            steps: [
                "Select fruits",
                "Learn basic cuts",
                "Practice patterns",
                "Create design",
                "Preserve work"
            ],
            tips: "Use sharp tools and work quickly to prevent browning",
            difficulty: "Advanced",
            category: "Cooking",
            region: "Thailand",
            likes: 0,
            materials: ["Fruits", "Carving tools", "Lemon juice", "Display tray"]
        },
        {
            id: 'crafts13',
            title: "Russian Nesting Dolls",
            description: "Traditional Russian matryoshka doll painting",
            steps: [
                "Prepare surface",
                "Design pattern",
                "Paint base colors",
                "Add details",
                "Varnish finish"
            ],
            tips: "Use traditional Russian folk patterns and bright colors",
            difficulty: "Intermediate",
            category: "Crafts",
            region: "Russia",
            likes: 0,
            materials: ["Wooden dolls", "Acrylic paints", "Brushes", "Varnish"]
        },
        {
            id: 'crafts14',
            title: "Egyptian Papyrus",
            description: "Traditional Egyptian papyrus making",
            steps: [
                "Prepare reeds",
                "Weave strips",
                "Press sheets",
                "Dry properly",
                "Polish surface"
            ],
            tips: "Use fresh reeds and press evenly for best results",
            difficulty: "Advanced",
            category: "Crafts",
            region: "Egypt",
            likes: 0,
            materials: ["Papyrus reeds", "Press", "Water", "Polishing stone"]
        },
        {
            id: 'crafts15',
            title: "Brazilian Capoeira",
            description: "Traditional Brazilian martial art and dance",
            steps: [
                "Learn basic moves",
                "Practice rhythm",
                "Master ginga",
                "Learn kicks",
                "Flow with music"
            ],
            tips: "Focus on fluidity and musicality in movements",
            difficulty: "Intermediate",
            category: "Dance",
            region: "Brazil",
            likes: 0,
            materials: ["Comfortable clothes", "Space to move", "Berimbau music"]
        },
        {
            id: 'crafts16',
            title: "Greek Olive Oil",
            description: "Traditional Greek olive oil production",
            steps: [
                "Harvest olives",
                "Clean fruit",
                "Press properly",
                "Separate oil",
                "Store correctly"
            ],
            tips: "Use fresh olives and maintain proper temperature during pressing",
            difficulty: "Advanced",
            category: "Cooking",
            region: "Greece",
            likes: 0,
            materials: ["Olives", "Press", "Storage containers", "Filter"]
        }
    ],
    technology: [
        {
            id: 'tech1',
            title: "Build a Website",
            description: "Create a responsive website using modern technologies",
            steps: [
                "Setup HTML structure",
                "Style with CSS",
                "Add JavaScript functionality",
                "Make responsive design",
                "Optimize performance",
                "Test across browsers",
                "Deploy website"
            ],
            tips: "Use semantic HTML. Test on multiple devices.",
            difficulty: "Intermediate",
            duration: "4 hours",
            category: "Technology",
            region: "Global",
            likes: 0,
            materials: ["Computer", "Code editor", "Web browser", "Internet connection"]
        },
        {
            id: 'tech2',
            title: "Python Game Development",
            description: "Create a simple 2D game using Python and Pygame",
            steps: [
                "Setup Python environment",
                "Install Pygame",
                "Create game window",
                "Add player character",
                "Implement controls",
                "Add game logic",
                "Create scoring system"
            ],
            tips: "Start simple and add features gradually. Test frequently.",
            difficulty: "Beginner",
            duration: "3 hours",
            category: "Technology",
            region: "Global",
            likes: 0,
            materials: ["Computer", "Python", "Pygame", "Code editor"]
        },
        {
            id: 'tech3',
            title: "Mobile App Development",
            description: "Create your first mobile app using React Native",
            steps: ["Setup environment", "Create UI", "Add functionality", "Test on devices", "Deploy"],
            tips: "Test on both iOS and Android for compatibility",
            difficulty: "Intermediate",
            duration: "5 hours",
            category: "Technology",
            region: "Global",
            likes: 0,
            materials: ["Computer", "Node.js", "React Native", "Mobile device"]
        },
        {
            id: 'tech4',
            title: "AI Image Generation",
            description: "Create stunning AI-generated artwork using modern tools",
            steps: [
                "Choose AI platform",
                "Write effective prompts",
                "Adjust parameters",
                "Generate variations",
                "Refine and enhance"
            ],
            tips: "Be specific in your prompts and experiment with different styles",
            difficulty: "Intermediate",
            category: "Technology",
            region: "Global",
            likes: 0,
            materials: ["Computer", "AI platform access", "Creative prompts"]
        },
        {
            id: 'tech5',
            title: "3D Printing Basics",
            description: "Learn to create and print 3D models from scratch",
            steps: [
                "Choose 3D modeling software",
                "Design basic model",
                "Add details and features",
                "Prepare for printing",
                "Set up printer",
                "Monitor print process",
                "Post-process finished print"
            ],
            tips: "Start with simple designs and gradually increase complexity",
            difficulty: "Intermediate",
            category: "Technology",
            region: "Global",
            likes: 0,
            materials: ["3D printer", "Filament", "Modeling software", "Calipers", "Finishing tools"]
        },
        {
            id: 'tech6',
            title: "AI Image Generation",
            description: "Create stunning AI-generated artwork using modern tools",
            steps: [
                "Choose AI platform",
                "Write effective prompts",
                "Adjust parameters",
                "Generate variations",
                "Refine and enhance"
            ],
            tips: "Be specific in your prompts and experiment with different styles",
            difficulty: "Intermediate",
            category: "Technology",
            region: "Global",
            likes: 0,
            materials: ["Computer", "AI platform access", "Creative prompts"]
        }
    ],
    art: [
        {
            id: 'art1',
            title: "Chinese Calligraphy",
            description: "Learn the art of traditional Chinese brush writing",
            steps: [
                "Prepare ink and brush",
                "Learn brush holding",
                "Practice basic strokes",
                "Write simple characters",
                "Master stroke order",
                "Create compositions",
                "Add seal signature"
            ],
            tips: "Maintain proper brush angle. Practice strokes repeatedly.",
            difficulty: "Advanced",
            duration: "2 hours",
            category: "Art",
            region: "China",
            likes: 0,
            materials: ["Calligraphy brush", "Ink", "Rice paper", "Ink stone"]
        },
        {
            id: 'art2',
            title: "African Mask Painting",
            description: "Create traditional African-inspired masks",
            steps: [
                "Sketch mask design",
                "Transfer to wood/canvas",
                "Add base colors",
                "Create patterns",
                "Add details",
                "Apply finishing",
                "Add hanging element"
            ],
            tips: "Research traditional patterns. Use bold colors.",
            difficulty: "Intermediate",
            duration: "3 hours",
            category: "Art",
            region: "Africa",
            likes: 0,
            materials: ["Canvas/Wood", "Acrylic paints", "Brushes", "Reference images"]
        },
        {
            id: 'art3',
            title: "Persian Miniature Painting",
            description: "Learn the delicate art of Persian miniature",
            steps: ["Prepare materials", "Sketch design", "Apply gold leaf", "Paint details", "Final touches"],
            tips: "Use very fine brushes for intricate details",
            difficulty: "Advanced",
            duration: "4 hours",
            category: "Art",
            region: "Iran",
            likes: 0,
            materials: ["Fine brushes", "Gold leaf", "Special paper", "Natural pigments"]
        },
        {
            id: 'art4',
            title: "Brazilian Street Art",
            description: "Vibrant street art techniques from Brazil",
            steps: [
                "Sketch design",
                "Prepare wall surface",
                "Apply base colors",
                "Add details",
                "Final touches"
            ],
            tips: "Use high-quality spray paint and work in layers",
            difficulty: "Advanced",
            category: "Art",
            region: "Brazil",
            likes: 0,
            materials: ["Spray paint", "Sketch paper", "Protective gear", "Ladder"]
        },
        {
            id: 'art5',
            title: "Russian Icon Painting",
            description: "Traditional Russian Orthodox icon painting techniques",
            steps: [
                "Prepare wooden panel",
                "Apply gesso ground",
                "Transfer design",
                "Apply gold leaf",
                "Layer egg tempera",
                "Add final details"
            ],
            tips: "Use traditional materials and follow historical techniques",
            difficulty: "Advanced",
            category: "Art",
            region: "Russia",
            likes: 0,
            materials: ["Wood panel", "Gesso", "Gold leaf", "Egg tempera", "Fine brushes"]
        },
        {
            id: 'art6',
            title: "Brazilian Street Art",
            description: "Vibrant street art techniques from Brazil",
            steps: [
                "Sketch design",
                "Prepare wall surface",
                "Apply base colors",
                "Add details",
                "Final touches"
            ],
            tips: "Use high-quality spray paint and work in layers",
            difficulty: "Advanced",
            category: "Art",
            region: "Brazil",
            likes: 0,
            materials: ["Spray paint", "Sketch paper", "Protective gear", "Ladder"]
        },
        {
            id: 'art7',
            title: "Moroccan Tile Design",
            description: "Traditional Moroccan zellige tile patterns",
            steps: [
                "Study patterns",
                "Create template",
                "Cut tiles",
                "Arrange design",
                "Set in place",
                "Grout and finish"
            ],
            tips: "Start with simple geometric patterns before attempting complex designs",
            difficulty: "Advanced",
            category: "Crafts",
            region: "Morocco",
            likes: 0,
            materials: ["Ceramic tiles", "Tile cutter", "Adhesive", "Grout", "Pattern template"]
        },
        {
            id: 'art8',
            title: "Indian Henna Art",
            description: "Traditional Indian henna application techniques",
            steps: [
                "Prepare henna paste",
                "Practice basic patterns",
                "Learn flow techniques",
                "Create design",
                "Apply carefully",
                "Let dry properly"
            ],
            tips: "Use fresh, natural henna for best results and practice on paper first",
            difficulty: "Intermediate",
            category: "Body Art",
            region: "India",
            likes: 0,
            materials: ["Henna paste", "Application cone", "Design template", "Lemon juice"]
        },
        {
            id: 'art9',
            title: "Swedish Wood Carving",
            description: "Traditional Swedish wood carving techniques",
            steps: [
                "Select wood type",
                "Learn basic cuts",
                "Practice patterns",
                "Create design",
                "Finish piece"
            ],
            tips: "Keep tools sharp and work with the grain of the wood",
            difficulty: "Intermediate",
            category: "Woodworking",
            region: "Sweden",
            likes: 0,
            materials: ["Softwood", "Carving tools", "Sharpening stone", "Pattern template"]
        },
        {
            id: 'art10',
            title: "Turkish Coffee",
            description: "Traditional Turkish coffee preparation",
            steps: [
                "Grind coffee fine",
                "Measure water",
                "Add sugar",
                "Heat properly",
                "Serve with foam"
            ],
            tips: "Use fresh, finely ground coffee and heat slowly for best results",
            difficulty: "Beginner",
            category: "Cooking",
            region: "Turkey",
            likes: 0,
            materials: ["Turkish coffee", "Cezve pot", "Coffee cups", "Sugar"]
        },
        {
            id: 'art11',
            title: "Mexican Paper Flowers",
            description: "Traditional Mexican paper flower making",
            steps: [
                "Cut paper shapes",
                "Create petals",
                "Assemble flower",
                "Add details",
                "Finish stem"
            ],
            tips: "Use tissue paper and layer colors for vibrant results",
            difficulty: "Beginner",
            category: "Crafts",
            region: "Mexico",
            likes: 0,
            materials: ["Tissue paper", "Floral wire", "Scissors", "Glue"]
        },
        {
            id: 'art12',
            title: "Thai Fruit Carving",
            description: "Traditional Thai fruit carving techniques",
            steps: [
                "Select fruits",
                "Learn basic cuts",
                "Practice patterns",
                "Create design",
                "Preserve work"
            ],
            tips: "Use sharp tools and work quickly to prevent browning",
            difficulty: "Advanced",
            category: "Cooking",
            region: "Thailand",
            likes: 0,
            materials: ["Fruits", "Carving tools", "Lemon juice", "Display tray"]
        },
        {
            id: 'art13',
            title: "Russian Nesting Dolls",
            description: "Traditional Russian matryoshka doll painting",
            steps: [
                "Prepare surface",
                "Design pattern",
                "Paint base colors",
                "Add details",
                "Varnish finish"
            ],
            tips: "Use traditional Russian folk patterns and bright colors",
            difficulty: "Intermediate",
            category: "Crafts",
            region: "Russia",
            likes: 0,
            materials: ["Wooden dolls", "Acrylic paints", "Brushes", "Varnish"]
        },
        {
            id: 'art14',
            title: "Egyptian Papyrus",
            description: "Traditional Egyptian papyrus making",
            steps: [
                "Prepare reeds",
                "Weave strips",
                "Press sheets",
                "Dry properly",
                "Polish surface"
            ],
            tips: "Use fresh reeds and press evenly for best results",
            difficulty: "Advanced",
            category: "Crafts",
            region: "Egypt",
            likes: 0,
            materials: ["Papyrus reeds", "Press", "Water", "Polishing stone"]
        },
        {
            id: 'art15',
            title: "Brazilian Capoeira",
            description: "Traditional Brazilian martial art and dance",
            steps: [
                "Learn basic moves",
                "Practice rhythm",
                "Master ginga",
                "Learn kicks",
                "Flow with music"
            ],
            tips: "Focus on fluidity and musicality in movements",
            difficulty: "Intermediate",
            category: "Dance",
            region: "Brazil",
            likes: 0,
            materials: ["Comfortable clothes", "Space to move", "Berimbau music"]
        },
        {
            id: 'art16',
            title: "Greek Olive Oil",
            description: "Traditional Greek olive oil production",
            steps: [
                "Harvest olives",
                "Clean fruit",
                "Press properly",
                "Separate oil",
                "Store correctly"
            ],
            tips: "Use fresh olives and maintain proper temperature during pressing",
            difficulty: "Advanced",
            category: "Cooking",
            region: "Greece",
            likes: 0,
            materials: ["Olives", "Press", "Storage containers", "Filter"]
        }
    ],
    music: [
        {
            id: 'music1',
            title: "Brazilian Samba Rhythm",
            description: "Learn basic samba percussion patterns",
            steps: [
                "Understand basic rhythm",
                "Practice clapping pattern",
                "Learn surdo beats",
                "Add tamborim pattern",
                "Include caixa rhythm",
                "Combine all elements",
                "Practice with music"
            ],
            tips: "Start slow and build speed. Focus on steady timing.",
            difficulty: "Intermediate",
            duration: "1 hour",
            category: "Music",
            region: "Brazil",
            likes: 0,
            materials: ["Percussion instruments", "Metronome", "Practice space"]
        },
        {
            id: 'music2',
            title: "Scottish Bagpipe Basics",
            description: "Introduction to playing the Scottish bagpipes",
            steps: [
                "Understand pipe parts",
                "Practice breathing technique",
                "Learn finger positions",
                "Master basic scale",
                "Practice grace notes",
                "Learn simple tunes",
                "Maintain instrument"
            ],
            tips: "Start with practice chanter. Build lung strength gradually.",
            difficulty: "Advanced",
            duration: "2 hours",
            category: "Music",
            region: "Scotland",
            likes: 0,
            materials: ["Practice chanter", "Bagpipes", "Music sheets"]
        },
        {
            id: 'music3',
            title: "Arabic Oud Basics",
            description: "Learn to play the Arabic oud instrument",
            steps: ["Holding technique", "Basic notes", "Simple melodies", "Rhythm patterns", "Traditional song"],
            tips: "Practice with a metronome for precise timing",
            difficulty: "Intermediate",
            duration: "1.5 hours",
            category: "Music",
            region: "Middle East",
            likes: 0,
            materials: ["Oud instrument", "Picks", "Tuner", "Music sheets"]
        },
        {
            id: 'music4',
            title: "African Drumming",
            description: "Traditional African drum patterns and techniques",
            steps: [
                "Learn basic hand positions",
                "Practice basic rhythms",
                "Add variations",
                "Combine patterns",
                "Play with others"
            ],
            tips: "Focus on maintaining steady rhythm and proper hand technique",
            difficulty: "Intermediate",
            category: "Music",
            region: "Africa",
            likes: 0,
            materials: ["Djembe drum", "Practice space", "Metronome"]
        },
        {
            id: 'music5',
            title: "Indian Sitar Basics",
            description: "Introduction to playing the traditional Indian sitar",
            steps: [
                "Learn proper sitting position",
                "Understand string tuning",
                "Practice basic strokes",
                "Learn simple ragas",
                "Add ornamentation",
                "Practice with tabla"
            ],
            tips: "Focus on proper hand positioning and microtonal accuracy",
            difficulty: "Advanced",
            category: "Music",
            region: "India",
            likes: 0,
            materials: ["Sitar", "Mizrab", "Tuner", "Practice space"]
        },
        {
            id: 'music6',
            title: "African Drumming",
            description: "Traditional African drum patterns and techniques",
            steps: [
                "Learn basic hand positions",
                "Practice basic rhythms",
                "Add variations",
                "Combine patterns",
                "Play with others"
            ],
            tips: "Focus on maintaining steady rhythm and proper hand technique",
            difficulty: "Intermediate",
            category: "Music",
            region: "Africa",
            likes: 0,
            materials: ["Djembe drum", "Practice space", "Metronome"]
        },
        {
            id: 'music7',
            title: "Brazilian Capoeira",
            description: "Traditional Brazilian martial art and dance",
            steps: [
                "Learn basic moves",
                "Practice rhythm",
                "Master ginga",
                "Learn kicks",
                "Flow with music"
            ],
            tips: "Focus on fluidity and musicality in movements",
            difficulty: "Intermediate",
            category: "Dance",
            region: "Brazil",
            likes: 0,
            materials: ["Comfortable clothes", "Space to move", "Berimbau music"]
        },
        {
            id: 'music8',
            title: "Greek Olive Oil",
            description: "Traditional Greek olive oil production",
            steps: [
                "Harvest olives",
                "Clean fruit",
                "Press properly",
                "Separate oil",
                "Store correctly"
            ],
            tips: "Use fresh olives and maintain proper temperature during pressing",
            difficulty: "Advanced",
            category: "Cooking",
            region: "Greece",
            likes: 0,
            materials: ["Olives", "Press", "Storage containers", "Filter"]
        }
    ],
    dance: [
        {
            id: 'dance1',
            title: "Salsa Basic Steps",
            description: "Learn fundamental salsa dance moves",
            steps: ["Basic step", "Side steps", "Turn patterns", "Partner work", "Rhythm training"],
            tips: "Focus on keeping rhythm and weight transfer smooth",
            difficulty: "Beginner",
            duration: "30 minutes",
            category: "Dance",
            region: "Cuba",
            likes: 0,
            materials: ["Dance shoes", "Music", "Dance space", "Partner (optional)"]
        },
        {
            id: 'dance2',
            title: "Bollywood Dance",
            description: "Learn popular Bollywood dance moves",
            steps: ["Hand gestures", "Hip movements", "Footwork", "Expression training", "Choreography"],
            tips: "Express emotions through facial expressions while dancing",
            difficulty: "Intermediate",
            duration: "45 minutes",
            category: "Dance",
            region: "India",
            likes: 0,
            materials: ["Comfortable clothes", "Music", "Mirror", "Dance space"]
        },
        {
            id: 'dance3',
            title: "Brazilian Capoeira",
            description: "Learn the basics of this Brazilian martial art dance",
            steps: [
                "Basic ginga movement",
                "Learn kicks",
                "Practice dodges",
                "Combine movements",
                "Add music and rhythm"
            ],
            tips: "Focus on fluid movements and maintaining rhythm",
            difficulty: "Intermediate",
            category: "Dance",
            region: "Brazil",
            likes: 0,
            materials: ["Comfortable clothes", "Space to practice", "Capoeira music"]
        },
        {
            id: 'dance4',
            title: "Flamenco Basics",
            description: "Traditional Spanish flamenco dance techniques",
            steps: [
                "Learn basic posture",
                "Practice footwork patterns",
                "Add arm movements",
                "Learn palmas rhythm",
                "Combine with music",
                "Add emotional expression"
            ],
            tips: "Focus on strong footwork and emotional connection",
            difficulty: "Intermediate",
            category: "Dance",
            region: "Spain",
            likes: 0,
            materials: ["Flamenco shoes", "Practice space", "Flamenco music", "Mirror"]
        },
        {
            id: 'dance5',
            title: "Brazilian Capoeira",
            description: "Learn the basics of this Brazilian martial art dance",
            steps: [
                "Basic ginga movement",
                "Learn kicks",
                "Practice dodges",
                "Combine movements",
                "Add music and rhythm"
            ],
            tips: "Focus on fluid movements and maintaining rhythm",
            difficulty: "Intermediate",
            category: "Dance",
            region: "Brazil",
            likes: 0,
            materials: ["Comfortable clothes", "Space to practice", "Capoeira music"]
        },
        {
            id: 'dance6',
            title: "Moroccan Dance",
            description: "Traditional Moroccan dance with intricate hand movements",
            steps: [
                "Practice basic steps",
                "Add arm movements",
                "Learn rhythmic patterns",
                "Combine with music",
                "Add expressive movements"
            ],
            tips: "Focus on maintaining a smooth and fluid rhythm",
            difficulty: "Intermediate",
            category: "Dance",
            region: "Morocco",
            likes: 0,
            materials: ["Traditional Moroccan dress", "Music", "Dance space"]
        },
        {
            id: 'dance7',
            title: "Greek Folk Dance",
            description: "Traditional Greek dance with graceful movements",
            steps: [
                "Practice basic steps",
                "Add arm movements",
                "Learn rhythmic patterns",
                "Combine with music",
                "Add expressive movements"
            ],
            tips: "Focus on maintaining a smooth and fluid rhythm",
            difficulty: "Intermediate",
            category: "Dance",
            region: "Greece",
            likes: 0,
            materials: ["Traditional Greek outfit", "Music", "Dance space"]
        },
        {
            id: 'dance8',
            title: "Turkish Belly Dance",
            description: "Traditional Turkish dance with graceful movements",
            steps: [
                "Practice basic steps",
                "Add arm movements",
                "Learn rhythmic patterns",
                "Combine with music",
                "Add expressive movements"
            ],
            tips: "Focus on maintaining a smooth and fluid rhythm",
            difficulty: "Intermediate",
            category: "Dance",
            region: "Turkey",
            likes: 0,
            materials: ["Traditional Turkish outfit", "Music", "Dance space"]
        },
        {
            id: 'dance9',
            title: "Brazilian Capoeira",
            description: "Traditional Brazilian martial art and dance",
            steps: [
                "Learn basic moves",
                "Practice rhythm",
                "Master ginga",
                "Learn kicks",
                "Flow with music"
            ],
            tips: "Focus on fluidity and musicality in movements",
            difficulty: "Intermediate",
            category: "Dance",
            region: "Brazil",
            likes: 0,
            materials: ["Comfortable clothes", "Space to move", "Berimbau music"]
        },
        {
            id: 'dance10',
            title: "Greek Olive Oil",
            description: "Traditional Greek olive oil production",
            steps: [
                "Harvest olives",
                "Clean fruit",
                "Press properly",
                "Separate oil",
                "Store correctly"
            ],
            tips: "Use fresh olives and maintain proper temperature during pressing",
            difficulty: "Advanced",
            category: "Cooking",
            region: "Greece",
            likes: 0,
            materials: ["Olives", "Press", "Storage containers", "Filter"]
        }
    ],
    fitness: [
        {
            id: 'fitness1',
            title: "Yoga for Beginners",
            description: "Start your yoga journey with basic poses",
            steps: ["Breathing exercises", "Sun salutation", "Basic poses", "Cool down", "Meditation"],
            tips: "Focus on breath and proper alignment",
            difficulty: "Beginner",
            duration: "20 minutes",
            category: "Fitness",
            region: "India",
            likes: 0,
            materials: ["Yoga mat", "Comfortable clothes", "Water bottle"]
        },
        {
            id: 'fitness2',
            title: "HIIT Workout",
            description: "High-intensity interval training for maximum results",
            steps: ["Warm-up", "Circuit 1", "Circuit 2", "Circuit 3", "Cool down"],
            tips: "Maintain proper form even when tired",
            difficulty: "Advanced",
            duration: "30 minutes",
            category: "Fitness",
            region: "Global",
            likes: 0,
            materials: ["Exercise mat", "Timer", "Water bottle"]
        },
        {
            id: 'fitness3',
            title: "Tai Chi Basics",
            description: "Traditional Chinese martial art for health and wellness",
            steps: [
                "Learn basic stance",
                "Practice breathing",
                "Master basic movements",
                "Combine forms",
                "Add meditation"
            ],
            tips: "Focus on slow, controlled movements and proper breathing",
            difficulty: "Beginner",
            category: "Fitness",
            region: "China",
            likes: 0,
            materials: ["Comfortable clothes", "Flat surface", "Open space"]
        },
        {
            id: 'fitness4',
            title: "Brazilian Jiu-Jitsu",
            description: "Fundamentals of Brazilian Jiu-Jitsu for beginners",
            steps: [
                "Learn basic positions",
                "Practice escapes",
                "Master submissions",
                "Learn takedowns",
                "Practice rolling",
                "Develop strategy"
            ],
            tips: "Focus on technique over strength, practice regularly",
            difficulty: "Intermediate",
            category: "Fitness",
            region: "Brazil",
            likes: 0,
            materials: ["Gi", "Mouthguard", "Mat space", "Training partner"]
        },
        {
            id: 'fitness5',
            title: "Tai Chi Basics",
            description: "Traditional Chinese martial art for health and wellness",
            steps: [
                "Learn basic stance",
                "Practice breathing",
                "Master basic movements",
                "Combine forms",
                "Add meditation"
            ],
            tips: "Focus on slow, controlled movements and proper breathing",
            difficulty: "Beginner",
            category: "Fitness",
            region: "China",
            likes: 0,
            materials: ["Comfortable clothes", "Flat surface", "Open space"]
        },
        {
            id: 'fitness6',
            title: "Brazilian Zumba",
            description: "High-energy dance fitness workout",
            steps: [
                "Warm-up",
                "Learn basic steps",
                "Practice choreography",
                "Add variations",
                "Combine with cardio"
            ],
            tips: "Dance to your favorite music and burn calories",
            difficulty: "Intermediate",
            category: "Fitness",
            region: "Global",
            likes: 0,
            materials: ["Music", "Zumba music", "Space to move"]
        },
        {
            id: 'fitness7',
            title: "Pilates for Beginners",
            description: "Learn the basics of Pilates for core strength and flexibility",
            steps: [
                "Warm-up",
                "Practice basic exercises",
                "Focus on alignment",
                "Add variations",
                "Practice with props"
            ],
            tips: "Focus on slow, controlled movements for optimal results",
            difficulty: "Beginner",
            category: "Fitness",
            region: "Global",
            likes: 0,
            materials: ["Yoga mat", "Pilates props"]
        },
        {
            id: 'fitness8',
            title: "Kickboxing Basics",
            description: "Learn the basics of kickboxing for self-defense and fitness",
            steps: [
                "Warm-up",
                "Learn basic punches and kicks",
                "Practice combinations",
                "Add bag work",
                "Practice with a partner"
            ],
            tips: "Focus on proper technique and timing",
            difficulty: "Beginner",
            category: "Fitness",
            region: "Global",
            likes: 0,
            materials: ["Gloves", "Focus pads", "Practice bag", "Timer"]
        },
        {
            id: 'fitness9',
            title: "Brazilian Zumba",
            description: "High-energy dance fitness workout",
            steps: [
                "Warm-up",
                "Learn basic steps",
                "Practice choreography",
                "Add variations",
                "Combine with cardio"
            ],
            tips: "Dance to your favorite music and burn calories",
            difficulty: "Intermediate",
            category: "Fitness",
            region: "Global",
            likes: 0,
            materials: ["Music", "Zumba music", "Space to move"]
        },
        {
            id: 'fitness10',
            title: "Pilates for Beginners",
            description: "Learn the basics of Pilates for core strength and flexibility",
            steps: [
                "Warm-up",
                "Practice basic exercises",
                "Focus on alignment",
                "Add variations",
                "Practice with props"
            ],
            tips: "Focus on slow, controlled movements for optimal results",
            difficulty: "Beginner",
            category: "Fitness",
            region: "Global",
            likes: 0,
            materials: ["Yoga mat", "Pilates props"]
        },
        {
            id: 'fitness11',
            title: "Kickboxing Basics",
            description: "Learn the basics of kickboxing for self-defense and fitness",
            steps: [
                "Warm-up",
                "Learn basic punches and kicks",
                "Practice combinations",
                "Add bag work",
                "Practice with a partner"
            ],
            tips: "Focus on proper technique and timing",
            difficulty: "Beginner",
            category: "Fitness",
            region: "Global",
            likes: 0,
            materials: ["Gloves", "Focus pads", "Practice bag", "Timer"]
        }
    ],
    language: [
        {
            id: 'lang1',
            title: "Basic Japanese",
            description: "Learn essential Japanese phrases and writing",
            steps: ["Hiragana basics", "Common phrases", "Numbers", "Greetings", "Basic conversation"],
            tips: "Practice writing characters daily",
            difficulty: "Beginner",
            duration: "1 hour",
            category: "Language",
            region: "Japan",
            likes: 0,
            materials: ["Notebook", "Pen", "Flashcards", "Audio resources"]
        },
        {
            id: 'lang2',
            title: "Spanish for Travelers",
            description: "Essential Spanish phrases for travelers",
            steps: [
                "Learn greetings",
                "Basic questions",
                "Directions",
                "Food ordering",
                "Emergency phrases"
            ],
            tips: "Practice pronunciation and focus on common phrases",
            difficulty: "Beginner",
            category: "Language",
            region: "Spain",
            likes: 0,
            materials: ["Notebook", "Audio resources", "Practice partner"]
        },
        {
            id: 'lang3',
            title: "Arabic Calligraphy",
            description: "Learn the art of Arabic script writing",
            steps: [
                "Learn basic strokes",
                "Practice letter forms",
                "Combine letters",
                "Add flourishes",
                "Create compositions"
            ],
            tips: "Use proper tools and maintain consistent pressure",
            difficulty: "Advanced",
            category: "Language",
            region: "Middle East",
            likes: 0,
            materials: ["Calligraphy pen", "Ink", "Paper", "Ruler"]
        },
        {
            id: 'lang4',
            title: "Spanish for Travelers",
            description: "Essential Spanish phrases for travelers",
            steps: [
                "Learn greetings",
                "Basic questions",
                "Directions",
                "Food ordering",
                "Emergency phrases"
            ],
            tips: "Practice pronunciation and focus on common phrases",
            difficulty: "Beginner",
            category: "Language",
            region: "Spain",
            likes: 0,
            materials: ["Notebook", "Audio resources", "Practice partner"]
        },
        {
            id: 'lang5',
            title: "Mandarin Chinese",
            description: "Learn the basics of Mandarin Chinese",
            steps: [
                "Learn pinyin",
                "Practice basic characters",
                "Listen to tones",
                "Practice common phrases",
                "Read simple texts"
            ],
            tips: "Focus on tone pronunciation and learn common characters",
            difficulty: "Beginner",
            category: "Language",
            region: "China",
            likes: 0,
            materials: ["Mandarin course", "Flashcards", "Chinese phrasebook"]
        },
        {
            id: 'lang6',
            title: "French for Beginners",
            description: "Learn basic French phrases and vocabulary",
            steps: [
                "Practice greetings",
                "Learn common phrases",
                "Practice pronunciation",
                "Read simple texts",
                "Practice with a tutor"
            ],
            tips: "Focus on common phrases and pronunciation",
            difficulty: "Beginner",
            category: "Language",
            region: "France",
            likes: 0,
            materials: ["French course", "Flashcards", "French phrasebook"]
        },
        {
            id: 'lang7',
            title: "German for Beginners",
            description: "Learn basic German phrases and vocabulary",
            steps: [
                "Practice greetings",
                "Learn common phrases",
                "Practice pronunciation",
                "Read simple texts",
                "Practice with a tutor"
            ],
            tips: "Focus on common phrases and pronunciation",
            difficulty: "Beginner",
            category: "Language",
            region: "Germany",
            likes: 0,
            materials: ["German course", "Flashcards", "German phrasebook"]
        },
        {
            id: 'lang8',
            title: "Japanese for Beginners",
            description: "Learn basic Japanese phrases and writing",
            steps: ["Hiragana basics", "Common phrases", "Numbers", "Greetings", "Basic conversation"],
            tips: "Practice writing characters daily",
            difficulty: "Beginner",
            category: "Language",
            region: "Japan",
            likes: 0,
            materials: ["Notebook", "Pen", "Flashcards", "Audio resources"]
        },
        {
            id: 'lang9',
            title: "Spanish for Beginners",
            description: "Learn basic Spanish phrases and vocabulary",
            steps: [
                "Practice greetings",
                "Learn common phrases",
                "Practice pronunciation",
                "Read simple texts",
                "Practice with a tutor"
            ],
            tips: "Focus on common phrases and pronunciation",
            difficulty: "Beginner",
            category: "Language",
            region: "Spain",
            likes: 0,
            materials: ["Spanish course", "Flashcards", "Spanish phrasebook"]
        },
        {
            id: 'lang10',
            title: "Mandarin Chinese",
            description: "Learn the basics of Mandarin Chinese",
            steps: [
                "Learn pinyin",
                "Practice basic characters",
                "Listen to tones",
                "Practice common phrases",
                "Read simple texts"
            ],
            tips: "Focus on tone pronunciation and learn common characters",
            difficulty: "Beginner",
            category: "Language",
            region: "China",
            likes: 0,
            materials: ["Mandarin course", "Flashcards", "Chinese phrasebook"]
        },
        {
            id: 'lang11',
            title: "French for Beginners",
            description: "Learn basic French phrases and vocabulary",
            steps: [
                "Practice greetings",
                "Learn common phrases",
                "Practice pronunciation",
                "Read simple texts",
                "Practice with a tutor"
            ],
            tips: "Focus on common phrases and pronunciation",
            difficulty: "Beginner",
            category: "Language",
            region: "France",
            likes: 0,
            materials: ["French course", "Flashcards", "French phrasebook"]
        },
        {
            id: 'lang12',
            title: "German for Beginners",
            description: "Learn basic German phrases and vocabulary",
            steps: [
                "Practice greetings",
                "Learn common phrases",
                "Practice pronunciation",
                "Read simple texts",
                "Practice with a tutor"
            ],
            tips: "Focus on common phrases and pronunciation",
            difficulty: "Beginner",
            category: "Language",
            region: "Germany",
            likes: 0,
            materials: ["German course", "Flashcards", "German phrasebook"]
        },
        {
            id: 'lang13',
            title: "Japanese for Beginners",
            description: "Learn basic Japanese phrases and writing",
            steps: ["Hiragana basics", "Common phrases", "Numbers", "Greetings", "Basic conversation"],
            tips: "Practice writing characters daily",
            difficulty: "Beginner",
            category: "Language",
            region: "Japan",
            likes: 0,
            materials: ["Notebook", "Pen", "Flashcards", "Audio resources"]
        },
        {
            id: 'lang14',
            title: "Spanish for Beginners",
            description: "Learn basic Spanish phrases and vocabulary",
            steps: [
                "Practice greetings",
                "Learn common phrases",
                "Practice pronunciation",
                "Read simple texts",
                "Practice with a tutor"
            ],
            tips: "Focus on common phrases and pronunciation",
            difficulty: "Beginner",
            category: "Language",
            region: "Spain",
            likes: 0,
            materials: ["Spanish course", "Flashcards", "Spanish phrasebook"]
        },
        {
            id: 'lang15',
            title: "Mandarin Chinese",
            description: "Learn the basics of Mandarin Chinese",
            steps: [
                "Learn pinyin",
                "Practice basic characters",
                "Listen to tones",
                "Practice common phrases",
                "Read simple texts"
            ],
            tips: "Focus on tone pronunciation and learn common characters",
            difficulty: "Beginner",
            category: "Language",
            region: "China",
            likes: 0,
            materials: ["Mandarin course", "Flashcards", "Chinese phrasebook"]
        },
        {
            id: 'lang16',
            title: "French for Beginners",
            description: "Learn basic French phrases and vocabulary",
            steps: [
                "Practice greetings",
                "Learn common phrases",
                "Practice pronunciation",
                "Read simple texts",
                "Practice with a tutor"
            ],
            tips: "Focus on common phrases and pronunciation",
            difficulty: "Beginner",
            category: "Language",
            region: "France",
            likes: 0,
            materials: ["French course", "Flashcards", "French phrasebook"]
        },
        {
            id: 'lang17',
            title: "German for Beginners",
            description: "Learn basic German phrases and vocabulary",
            steps: [
                "Practice greetings",
                "Learn common phrases",
                "Practice pronunciation",
                "Read simple texts",
                "Practice with a tutor"
            ],
            tips: "Focus on common phrases and pronunciation",
            difficulty: "Beginner",
            category: "Language",
            region: "Germany",
            likes: 0,
            materials: ["German course", "Flashcards", "German phrasebook"]
        },
        {
            id: 'lang18',
            title: "Japanese for Beginners",
            description: "Learn basic Japanese phrases and writing",
            steps: ["Hiragana basics", "Common phrases", "Numbers", "Greetings", "Basic conversation"],
            tips: "Practice writing characters daily",
            difficulty: "Beginner",
            category: "Language",
            region: "Japan",
            likes: 0,
            materials: ["Notebook", "Pen", "Flashcards", "Audio resources"]
        },
        {
            id: 'lang19',
            title: "Spanish for Beginners",
            description: "Learn basic Spanish phrases and vocabulary",
            steps: [
                "Practice greetings",
                "Learn common phrases",
                "Practice pronunciation",
                "Read simple texts",
                "Practice with a tutor"
            ],
            tips: "Focus on common phrases and pronunciation",
            difficulty: "Beginner",
            category: "Language",
            region: "Spain",
            likes: 0,
            materials: ["Spanish course", "Flashcards", "Spanish phrasebook"]
        },
        {
            id: 'lang20',
            title: "Mandarin Chinese",
            description: "Learn the basics of Mandarin Chinese",
            steps: [
                "Learn pinyin",
                "Practice basic characters",
                "Listen to tones",
                "Practice common phrases",
                "Read simple texts"
            ],
            tips: "Focus on tone pronunciation and learn common characters",
            difficulty: "Beginner",
            category: "Language",
            region: "China",
            likes: 0,
            materials: ["Mandarin course", "Flashcards", "Chinese phrasebook"]
        },
        {
            id: 'lang21',
            title: "French for Beginners",
            description: "Learn basic French phrases and vocabulary",
            steps: [
                "Practice greetings",
                "Learn common phrases",
                "Practice pronunciation",
                "Read simple texts",
                "Practice with a tutor"
            ],
            tips: "Focus on common phrases and pronunciation",
            difficulty: "Beginner",
            category: "Language",
            region: "France",
            likes: 0,
            materials: ["French course", "Flashcards", "French phrasebook"]
        },
        {
            id: 'lang22',
            title: "German for Beginners",
            description: "Learn basic German phrases and vocabulary",
            steps: [
                "Practice greetings",
                "Learn common phrases",
                "Practice pronunciation",
                "Read simple texts",
                "Practice with a tutor"
            ],
            tips: "Focus on common phrases and pronunciation",
            difficulty: "Beginner",
            category: "Language",
            region: "Germany",
            likes: 0,
            materials: ["German course", "Flashcards", "German phrasebook"]
        },
        {
            id: 'lang23',
            title: "Japanese for Beginners",
            description: "Learn basic Japanese phrases and writing",
            steps: ["Hiragana basics", "Common phrases", "Numbers", "Greetings", "Basic conversation"],
            tips: "Practice writing characters daily",
            difficulty: "Beginner",
            category: "Language",
            region: "Japan",
            likes: 0,
            materials: ["Notebook", "Pen", "Flashcards", "Audio resources"]
        },
        {
            id: 'lang24',
            title: "Spanish for Beginners",
            description: "Learn basic Spanish phrases and vocabulary",
            steps: [
                "Practice greetings",
                "Learn common phrases",
                "Practice pronunciation",
                "Read simple texts",
                "Practice with a tutor"
            ],
            tips: "Focus on common phrases and pronunciation",
            difficulty: "Beginner",
            category: "Language",
            region: "Spain",
            likes: 0,
            materials: ["Spanish course", "Flashcards", "Spanish phrasebook"]
        },
        {
            id: 'lang25',
            title: "Mandarin Chinese",
            description: "Learn the basics of Mandarin Chinese",
            steps: [
                "Learn pinyin",
                "Practice basic characters",
                "Listen to tones",
                "Practice common phrases",
                "Read simple texts"
            ],
            tips: "Focus on tone pronunciation and learn common characters",
            difficulty: "Beginner",
            category: "Language",
            region: "China",
            likes: 0,
            materials: ["Mandarin course", "Flashcards", "Chinese phrasebook"]
        },
        {
            id: 'lang26',
            title: "French for Beginners",
            description: "Learn basic French phrases and vocabulary",
            steps: [
                "Practice greetings",
                "Learn common phrases",
                "Practice pronunciation",
                "Read simple texts",
                "Practice with a tutor"
            ],
            tips: "Focus on common phrases and pronunciation",
            difficulty: "Beginner",
            category: "Language",
            region: "France",
            likes: 0,
            materials: ["French course", "Flashcards", "French phrasebook"]
        },
        {
            id: 'lang27',
            title: "German for Beginners",
            description: "Learn basic German phrases and vocabulary",
            steps: [
                "Practice greetings",
                "Learn common phrases",
                "Practice pronunciation",
                "Read simple texts",
                "Practice with a tutor"
            ],
            tips: "Focus on common phrases and pronunciation",
            difficulty: "Beginner",
            category: "Language",
            region: "Germany",
            likes: 0,
            materials: ["German course", "Flashcards", "German phrasebook"]
        },
        {
            id: 'lang28',
            title: "Japanese for Beginners",
            description: "Learn basic Japanese phrases and writing",
            steps: ["Hiragana basics", "Common phrases", "Numbers", "Greetings", "Basic conversation"],
            tips: "Practice writing characters daily",
            difficulty: "Beginner",
            category: "Language",
            region: "Japan",
            likes: 0,
            materials: ["Notebook", "Pen", "Flashcards", "Audio resources"]
        },
        {
            id: 'lang29',
            title: "Spanish for Beginners",
            description: "Learn basic Spanish phrases and vocabulary",
            steps: [
                "Practice greetings",
                "Learn common phrases",
                "Practice pronunciation",
                "Read simple texts",
                "Practice with a tutor"
            ],
            tips: "Focus on common phrases and pronunciation",
            difficulty: "Beginner",
            category: "Language",
            region: "Spain",
            likes: 0,
            materials: ["Spanish course", "Flashcards", "Spanish phrasebook"]
        },
        {
            id: 'lang30',
            title: "Mandarin Chinese",
            description: "Learn the basics of Mandarin Chinese",
            steps: [
                "Learn pinyin",
                "Practice basic characters",
                "Listen to tones",
                "Practice common phrases",
                "Read simple texts"
            ],
            tips: "Focus on tone pronunciation and learn common characters",
            difficulty: "Beginner",
            category: "Language",
            region: "China",
            likes: 0,
            materials: ["Mandarin course", "Flashcards", "Chinese phrasebook"]
        },
        {
            id: 'lang31',
            title: "French for Beginners",
            description: "Learn basic French phrases and vocabulary",
            steps: [
                "Practice greetings",
                "Learn common phrases",
                "Practice pronunciation",
                "Read simple texts",
                "Practice with a tutor"
            ],
            tips: "Focus on common phrases and pronunciation",
            difficulty: "Beginner",
            category: "Language",
            region: "France",
            likes: 0,
            materials: ["French course", "Flashcards", "French phrasebook"]
        },
        {
            id: 'lang32',
            title: "German for Beginners",
            description: "Learn basic German phrases and vocabulary",
            steps: [
                "Practice greetings",
                "Learn common phrases",
                "Practice pronunciation",
                "Read simple texts",
                "Practice with a tutor"
            ],
            tips: "Focus on common phrases and pronunciation",
            difficulty: "Beginner",
            category: "Language",
            region: "Germany",
            likes: 0,
            materials: ["German course", "Flashcards", "German phrasebook"]
        },
        {
            id: 'lang33',
            title: "Japanese for Beginners",
            description: "Learn basic Japanese phrases and writing",
            steps: ["Hiragana basics", "Common phrases", "Numbers", "Greetings", "Basic conversation"],
            tips: "Practice writing characters daily",
            difficulty: "Beginner",
            category: "Language",
            region: "Japan",
            likes: 0,
            materials: ["Notebook", "Pen", "Flashcards", "Audio resources"]
        },
        {
            id: 'lang34',
            title: "Spanish for Beginners",
            description: "Learn basic Spanish phrases and vocabulary",
            steps: [
                "Practice greetings",
                "Learn common phrases",
                "Practice pronunciation",
                "Read simple texts",
                "Practice with a tutor"
            ],
            tips: "Focus on common phrases and pronunciation",
            difficulty: "Beginner",
            category: "Language",
            region: "Spain",
            likes: 0,
            materials: ["Spanish course", "Flashcards", "Spanish phrasebook"]
        },
        {
            id: 'lang35',
            title: "Mandarin Chinese",
            description: "Learn the basics of Mandarin Chinese",
            steps: [
                "Learn pinyin",
                "Practice basic characters",
                "Listen to tones",
                "Practice common phrases",
                "Read simple texts"
            ],
            tips: "Focus on tone pronunciation and learn common characters",
            difficulty: "Beginner",
            category: "Language",
            region: "China",
            likes: 0,
            materials: ["Mandarin course", "Flashcards", "Chinese phrasebook"]
        },
        {
            id: 'lang36',
            title: "French for Beginners",
            description: "Learn basic French phrases and vocabulary",
            steps: [
                "Practice greetings",
                "Learn common phrases",
                "Practice pronunciation",
                "Read simple texts",
                "Practice with a tutor"
            ],
            tips: "Focus on common phrases and pronunciation",
            difficulty: "Beginner",
            category: "Language",
            region: "France",
            likes: 0,
            materials: ["French course", "Flashcards", "French phrasebook"]
        },
        {
            id: 'lang37',
            title: "German for Beginners",
            description: "Learn basic German phrases and vocabulary",
            steps: [
                "Practice greetings",
                "Learn common phrases",
                "Practice pronunciation",
                "Read simple texts",
                "Practice with a tutor"
            ],
            tips: "Focus on common phrases and pronunciation",
            difficulty: "Beginner",
            category: "Language",
            region: "Germany",
            likes: 0,
            materials: ["German course", "Flashcards", "German phrasebook"]
        },
        {
            id: 'lang38',
            title: "Japanese for Beginners",
            description: "Learn basic Japanese phrases and writing",
            steps: ["Hiragana basics", "Common phrases", "Numbers", "Greetings", "Basic conversation"],
            tips: "Practice writing characters daily",
            difficulty: "Beginner",
            category: "Language",
            region: "Japan",
            likes: 0,
            materials: ["Notebook", "Pen", "Flashcards", "Audio resources"]
        },
        {
            id: 'lang39',
            title: "Spanish for Beginners",
            description: "Learn basic Spanish phrases and vocabulary",
            steps: [
                "Practice greetings",
                "Learn common phrases",
                "Practice pronunciation",
                "Read simple texts",
                "Practice with a tutor"
            ],
            tips: "Focus on common phrases and pronunciation",
            difficulty: "Beginner",
            category: "Language",
            region: "Spain",
            likes: 0,
            materials: ["Spanish course", "Flashcards", "Spanish phrasebook"]
        },
        {
            id: 'lang40',
            title: "Mandarin Chinese",
            description: "Learn the basics of Mandarin Chinese",
            steps: [
                "Learn pinyin",
                "Practice basic characters",
                "Listen to tones",
                "Practice common phrases",
                "Read simple texts"
            ],
            tips: "Focus on tone pronunciation and learn common characters",
            difficulty: "Beginner",
            category: "Language",
            region: "China",
            likes: 0,
            materials: ["Mandarin course", "Flashcards", "Chinese phrasebook"]
        },
        {
            id: 'lang41',
            title: "French for Beginners",
            description: "Learn basic French phrases and vocabulary",
            steps: [
                "Practice greetings",
                "Learn common phrases",
                "Practice pronunciation",
                "Read simple texts",
                "Practice with a tutor"
            ],
            tips: "Focus on common phrases and pronunciation",
            difficulty: "Beginner",
            category: "Language",
            region: "France",
            likes: 0,
            materials: ["French course", "Flashcards", "French phrasebook"]
        },
        {
            id: 'lang42',
            title: "German for Beginners",
            description: "Learn basic German phrases and vocabulary",
            steps: [
                "Practice greetings",
                "Learn common phrases",
                "Practice pronunciation",
                "Read simple texts",
                "Practice with a tutor"
            ],
            tips: "Focus on common phrases and pronunciation",
            difficulty: "Beginner",
            category: "Language",
            region: "Germany",
            likes: 0,
            materials: ["German course", "Flashcards", "German phrasebook"]
        },
        {
            id: 'lang43',
            title: "Japanese for Beginners",
            description: "Learn basic Japanese phrases and writing",
            steps: ["Hiragana basics", "Common phrases", "Numbers", "Greetings", "Basic conversation"],
            tips: "Practice writing characters daily",
            difficulty: "Beginner",
            category: "Language",
            region: "Japan",
            likes: 0,
            materials: ["Notebook", "Pen", "Flashcards", "Audio resources"]
        },
        {
            id: 'lang44',
            title: "Spanish for Beginners",
            description: "Learn basic Spanish phrases and vocabulary",
            steps: [
                "Practice greetings",
                "Learn common phrases",
                "Practice pronunciation",
                "Read simple texts",
                "Practice with a tutor"
            ],
            tips: "Focus on common phrases and pronunciation",
            difficulty: "Beginner",
            category: "Language",
            region: "Spain",
            likes: 0,
            materials: ["Spanish course", "Flashcards", "Spanish phrasebook"]
        },
        {
            id: 'lang45',
            title: "Mandarin Chinese",
            description: "Learn the basics of Mandarin Chinese",
            steps: [
                "Learn pinyin",
                "Practice basic characters",
                "Listen to tones",
                "Practice common phrases",
                "Read simple texts"
            ],
            tips: "Focus on tone pronunciation and learn common characters",
            difficulty: "Beginner",
            category: "Language",
            region: "China",
            likes: 0,
            materials: ["Mandarin course", "Flashcards", "Chinese phrasebook"]
        },
        {
            id: 'lang46',
            title: "French for Beginners",
            description: "Learn basic French phrases and vocabulary",
            steps: [
                "Practice greetings",
                "Learn common phrases",
                "Practice pronunciation",
                "Read simple texts",
                "Practice with a tutor"
            ],
            tips: "Focus on common phrases and pronunciation",
            difficulty: "Beginner",
            category: "Language",
            region: "France",
            likes: 0,
            materials: ["French course", "Flashcards", "French phrasebook"]
        },
        {
            id: 'lang47',
            title: "German for Beginners",
            description: "Learn basic German phrases and vocabulary",
            steps: [
                "Practice greetings",
                "Learn common phrases",
                "Practice pronunciation",
                "Read simple texts",
                "Practice with a tutor"
            ],
            tips: "Focus on common phrases and pronunciation",
            difficulty: "Beginner",
            category: "Language",
            region: "Germany",
            likes: 0,
            materials: ["German course", "Flashcards", "German phrasebook"]
        },
        {
            id: 'lang48',
            title: "Japanese for Beginners",
            description: "Learn basic Japanese phrases and writing",
            steps: ["Hiragana basics", "Common phrases", "Numbers", "Greetings", "Basic conversation"],
            tips: "Practice writing characters daily",
            difficulty: "Beginner",
            category: "Language",
            region: "Japan",
            likes: 0,
            materials: ["Notebook", "Pen", "Flashcards", "Audio resources"]
        },
        {
            id: 'lang49',
            title: "Spanish for Beginners",
            description: "Learn basic Spanish phrases and vocabulary",
            steps: [
                "Practice greetings",
                "Learn common phrases",
                "Practice pronunciation",
                "Read simple texts",
                "Practice with a tutor"
            ],
            tips: "Focus on common phrases and pronunciation",
            difficulty: "Beginner",
            category: "Language",
            region: "Spain",
            likes: 0,
            materials: ["Spanish course", "Flashcards", "Spanish phrasebook"]
        },
        {
            id: 'lang50',
            title: "Mandarin Chinese",
            description: "Learn the basics of Mandarin Chinese",
            steps: [
                "Learn pinyin",
                "Practice basic characters",
                "Listen to tones",
                "Practice common phrases",
                "Read simple texts"
            ],
            tips: "Focus on tone pronunciation and learn common characters",
            difficulty: "Beginner",
            category: "Language",
            region: "China",
            likes: 0,
            materials: ["Mandarin course", "Flashcards", "Chinese phrasebook"]
        }
    ],
    gardening: [
        {
            id: 'garden1',
            title: "Japanese Zen Garden",
            description: "Create a peaceful miniature Zen garden",
            steps: ["Choose container", "Add sand/gravel", "Place rocks", "Add elements", "Daily maintenance"],
            tips: "Focus on simplicity and balance in design",
            difficulty: "Beginner",
            duration: "2 hours",
            category: "Gardening",
            region: "Japan",
            likes: 0,
            materials: ["Container", "White sand", "Rocks", "Rake", "Plants"]
        },
        {
            id: 'garden3',
            title: "Japanese Bonsai",
            description: "Traditional Japanese bonsai tree cultivation",
            steps: [
                "Select appropriate tree",
                "Learn pruning techniques",
                "Shape with wire",
                "Repot properly",
                "Maintain health",
                "Create aesthetic form"
            ],
            tips: "Patience is key - bonsai is a long-term art form",
            difficulty: "Advanced",
            category: "Gardening",
            region: "Japan",
            likes: 0,
            materials: ["Bonsai tree", "Pruning tools", "Wire", "Bonsai soil", "Pot"]
        },
        {
            id: 'garden4',
            title: "Japanese Zen Garden",
            description: "Create a peaceful miniature Zen garden",
            steps: [
                "Choose container",
                "Add sand/gravel",
                "Place rocks",
                "Add elements",
                "Daily maintenance"
            ],
            tips: "Focus on simplicity and balance in design",
            difficulty: "Beginner",
            category: "Gardening",
            region: "Japan",
            likes: 0,
            materials: ["Container", "White sand", "Rocks", "Rake", "Plants"]
        },
        {
            id: 'garden5',
            title: "Moroccan Terrarium",
            description: "Create a mini desert garden with succulents",
            steps: [
                "Choose container",
                "Add small stones",
                "Layer succulents",
                "Add small plants",
                "Cover with clear dome"
            ],
            tips: "Use shallow containers and choose drought-resistant plants",
            difficulty: "Beginner",
            category: "Gardening",
            region: "Morocco",
            likes: 0,
            materials: ["Succulents", "Small stones", "Clear dome", "Potting soil"]
        },
        {
            id: 'garden6',
            title: "Greek Pottery",
            description: "Traditional Greek pottery making",
            steps: [
                "Select clay type",
                "Shape pot on wheel",
                "Add decorative patterns",
                "Apply glaze",
                "Fire in kiln"
            ],
            tips: "Use traditional Greek techniques and glazes",
            difficulty: "Intermediate",
            category: "Gardening",
            region: "Greece",
            likes: 0,
            materials: ["Clay", "Potter's wheel", "Glaze", "Kiln"]
        },
        {
            id: 'garden7',
            title: "Japanese Bonsai",
            description: "Traditional Japanese bonsai tree cultivation",
            steps: [
                "Select appropriate tree",
                "Learn pruning techniques",
                "Shape with wire",
                "Repot properly",
                "Maintain health",
                "Create aesthetic form"
            ],
            tips: "Patience is key - bonsai is a long-term art form",
            difficulty: "Advanced",
            category: "Gardening",
            region: "Japan",
            likes: 0,
            materials: ["Bonsai tree", "Pruning tools", "Wire", "Bonsai soil", "Pot"]
        },
        {
            id: 'garden8',
            title: "Japanese Zen Garden",
            description: "Create a peaceful miniature Zen garden",
            steps: [
                "Choose container",
                "Add sand/gravel",
                "Place rocks",
                "Add elements",
                "Daily maintenance"
            ],
            tips: "Focus on simplicity and balance in design",
            difficulty: "Beginner",
            category: "Gardening",
            region: "Japan",
            likes: 0,
            materials: ["Container", "White sand", "Rocks", "Rake", "Plants"]
        },
        {
            id: 'garden9',
            title: "Moroccan Terrarium",
            description: "Create a mini desert garden with succulents",
            steps: [
                "Choose container",
                "Add small stones",
                "Layer succulents",
                "Add small plants",
                "Cover with clear dome"
            ],
            tips: "Use shallow containers and choose drought-resistant plants",
            difficulty: "Beginner",
            category: "Gardening",
            region: "Morocco",
            likes: 0,
            materials: ["Succulents", "Small stones", "Clear dome", "Potting soil"]
        },
        {
            id: 'garden10',
            title: "Greek Pottery",
            description: "Traditional Greek pottery making",
            steps: [
                "Select clay type",
                "Shape pot on wheel",
                "Add decorative patterns",
                "Apply glaze",
                "Fire in kiln"
            ],
            tips: "Use traditional Greek techniques and glazes",
            difficulty: "Intermediate",
            category: "Gardening",
            region: "Greece",
            likes: 0,
            materials: ["Clay", "Potter's wheel", "Glaze", "Kiln"]
        }
    ],
    photography: [
        {
            id: 'photo1',
            title: "Street Photography",
            description: "Capture compelling street scenes and moments",
            steps: ["Camera settings", "Composition rules", "Light reading", "Timing shots", "Post-processing"],
            tips: "Always respect subject privacy and local customs",
            difficulty: "Intermediate",
            duration: "2 hours",
            category: "Photography",
            region: "Global",
            likes: 0,
            materials: ["Camera", "Lens", "Memory card", "Editing software"]
        },
        {
            id: 'photo3',
            title: "Italian Street Photography",
            description: "Capture the essence of Italian street life",
            steps: [
                "Study light conditions",
                "Learn composition rules",
                "Practice candid shots",
                "Edit for mood",
                "Create photo story"
            ],
            tips: "Be respectful of subjects and capture authentic moments",
            difficulty: "Intermediate",
            category: "Photography",
            region: "Italy",
            likes: 0,
            materials: ["Camera", "Wide lens", "Comfortable shoes", "Editing software"]
        },
        {
            id: 'photo4',
            title: "Street Photography",
            description: "Capture compelling street scenes and moments",
            steps: [
                "Camera settings",
                "Composition rules",
                "Light reading",
                "Timing shots",
                "Post-processing"
            ],
            tips: "Always respect subject privacy and local customs",
            difficulty: "Intermediate",
            category: "Photography",
            region: "Global",
            likes: 0,
            materials: ["Camera", "Lens", "Memory card", "Editing software"]
        }
    ],
    meditation: [
        {
            id: 'med1',
            title: "Mindfulness Meditation",
            description: "Learn the basics of mindfulness meditation",
            steps: [
                "Find a quiet place",
                "Sit comfortably",
                "Focus on your breath",
                "Observe thoughts without judgment",
                "Return to breath"
            ],
            tips: "Practice daily for at least 10 minutes",
            difficulty: "Beginner",
            category: "Meditation",
            region: "Global",
            likes: 0,
            materials: ["Meditation cushion", "Timer"]
        },
        {
            id: 'med2',
            title: "Tibetan Sound Meditation",
            description: "Traditional Tibetan sound healing meditation",
            steps: [
                "Prepare space",
                "Learn breathing",
                "Use singing bowls",
                "Practice mantras",
                "Deepen meditation"
            ],
            tips: "Create a peaceful environment and practice regularly",
            difficulty: "Intermediate",
            category: "Meditation",
            region: "Tibet",
            likes: 0,
            materials: ["Singing bowls", "Meditation cushion", "Quiet space", "Timer"]
        },
        {
            id: 'med3',
            title: "Mindfulness Meditation",
            description: "Learn the basics of mindfulness meditation",
            steps: [
                "Find a quiet place",
                "Sit comfortably",
                "Focus on your breath",
                "Observe thoughts without judgment",
                "Return to breath"
            ],
            tips: "Practice daily for at least 10 minutes",
            difficulty: "Beginner",
            category: "Meditation",
            region: "Global",
            likes: 0,
            materials: ["Meditation cushion", "Timer"]
        }
    ],
    pottery: [
        {
            id: 'pot1',
            title: "Japanese Pottery",
            description: "Traditional Japanese pottery making techniques",
            steps: [
                "Select clay type",
                "Shape pot on wheel",
                "Add decorative patterns",
                "Apply glaze",
                "Fire in kiln"
            ],
            tips: "Use traditional Japanese techniques and glazes",
            difficulty: "Intermediate",
            category: "Pottery",
            region: "Japan",
            likes: 0,
            materials: ["Clay", "Potter's wheel", "Glaze", "Kiln"]
        },
        {
            id: 'pot2',
            title: "Korean Celadon",
            description: "Traditional Korean celadon pottery techniques",
            steps: [
                "Prepare clay",
                "Throw on wheel",
                "Carve designs",
                "Apply glaze",
                "Fire in kiln"
            ],
            tips: "Master the unique celadon glaze application",
            difficulty: "Advanced",
            category: "Pottery",
            region: "Korea",
            likes: 0,
            materials: ["Clay", "Potter's wheel", "Carving tools", "Celadon glaze", "Kiln"]
        },
        {
            id: 'pot3',
            title: "Japanese Pottery",
            description: "Traditional Japanese pottery making techniques",
            steps: [
                "Select clay type",
                "Shape pot on wheel",
                "Add decorative patterns",
                "Apply glaze",
                "Fire in kiln"
            ],
            tips: "Use traditional Japanese techniques and glazes",
            difficulty: "Intermediate",
            category: "Pottery",
            region: "Japan",
            likes: 0,
            materials: ["Clay", "Potter's wheel", "Glaze", "Kiln"]
        }
    ],
    calligraphy: [
        {
            id: 'call1',
            title: "Japanese Calligraphy",
            description: "Learn the art of Japanese calligraphy",
            steps: [
                "Prepare ink and brush",
                "Practice basic strokes",
                "Write simple characters",
                "Master stroke order",
                "Create compositions"
            ],
            tips: "Use traditional Japanese tools and techniques",
            difficulty: "Intermediate",
            category: "Calligraphy",
            region: "Japan",
            likes: 0,
            materials: ["Ink", "Brush", "Rice paper"]
        },
        {
            id: 'call2',
            title: "Chinese Seal Carving",
            description: "Traditional Chinese seal carving and calligraphy",
            steps: [
                "Design seal pattern",
                "Transfer to stone",
                "Carve characters",
                "Polish surface",
                "Test impression"
            ],
            tips: "Use proper tools and follow traditional character forms",
            difficulty: "Advanced",
            category: "Calligraphy",
            region: "China",
            likes: 0,
            materials: ["Seal stone", "Carving tools", "Ink pad", "Design paper"]
        },
        {
            id: 'call3',
            title: "Japanese Calligraphy",
            description: "Learn the art of Japanese calligraphy",
            steps: [
                "Prepare ink and brush",
                "Practice basic strokes",
                "Write simple characters",
                "Master stroke order",
                "Create compositions"
            ],
            tips: "Use traditional Japanese tools and techniques",
            difficulty: "Intermediate",
            category: "Calligraphy",
            region: "Japan",
            likes: 0,
            materials: ["Ink", "Brush", "Rice paper"]
        }
    ],
    woodworking: [
        {
            id: 'wood1',
            title: "Japanese Joinery",
            description: "Traditional Japanese wood joinery techniques",
            steps: [
                "Select appropriate wood",
                "Measure and mark",
                "Cut precise joints",
                "Fit pieces together",
                "Finish surfaces"
            ],
            tips: "Precision is key - measure twice, cut once",
            difficulty: "Advanced",
            category: "Woodworking",
            region: "Japan",
            likes: 0,
            materials: ["Hardwood", "Chisels", "Saws", "Measuring tools", "Clamps"]
        }
    ],
    textiles: [
        {
            id: 'text1',
            title: "Peruvian Weaving",
            description: "Traditional Peruvian textile weaving techniques",
            steps: [
                "Set up loom",
                "Choose colors",
                "Learn basic patterns",
                "Weave sample",
                "Create design",
                "Finish edges"
            ],
            tips: "Use natural dyes and traditional patterns",
            difficulty: "Intermediate",
            category: "Textiles",
            region: "Peru",
            likes: 0,
            materials: ["Loom", "Wool yarn", "Natural dyes", "Pattern template"]
        }
    ],
    jewelry: [
        {
            id: 'jewel1',
            title: "Balinese Silver",
            description: "Traditional Balinese silver jewelry making",
            steps: [
                "Design piece",
                "Prepare silver",
                "Shape metal",
                "Add details",
                "Polish finish"
            ],
            tips: "Use traditional Balinese motifs and techniques",
            difficulty: "Advanced",
            category: "Jewelry",
            region: "Indonesia",
            likes: 0,
            materials: ["Silver sheet", "Jewelry tools", "Polishing compounds", "Design tools"]
        }
    ],
    'tutorial1': {
        id: 'tutorial1',
        title: "Italian Pizza Making",
        description: "Authentic Neapolitan pizza making technique from Italy",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
        steps: [
            "Prepare pizza dough with 00 flour and let it rest for 30 minutes",
            "Knead the dough until smooth and elastic",
            "Let dough rise for 24 hours in the refrigerator",
            "Shape dough by hand stretching - never use a rolling pin",
            "Add San Marzano tomatoes and spread evenly",
            "Top with fresh buffalo mozzarella and basil",
            "Bake at highest oven temperature (450-500°F) for 10-12 minutes",
            "Finish with a drizzle of olive oil and fresh basil"
        ],
        tips: "Use a pizza stone for best results. Temperature is key for perfect crust.",
        difficulty: "Intermediate",
        region: "Italy",
        likes: 0,
        materials: ["00 Flour", "Yeast", "San Marzano tomatoes", "Fresh mozzarella", "Basil", "Pizza stone"],
        picTutorial: [
            {
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
                description: "Mix flour, yeast, and water to form the dough"
            },
            {
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
                description: "Knead the dough until smooth and elastic"
            },
            {
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
                description: "Let the dough rise for 24 hours"
            },
            {
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
                description: "Shape the dough by hand"
            },
            {
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
                description: "Add tomatoes and toppings"
            }
        ]
    },
    'tutorial2': {
        id: 'tutorial2',
        title: "Japanese Sushi Rolling",
        description: "Master the art of traditional sushi making with expert techniques",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
        steps: [
            "Rinse sushi rice thoroughly until water runs clear",
            "Cook rice with proper water ratio (1:1.2)",
            "Mix rice vinegar, sugar, and salt for seasoning",
            "Season cooked rice while fanning to create shine",
            "Layout nori sheet on bamboo mat",
            "Spread rice evenly, leaving 1-inch strip empty",
            "Add fish and vegetables in a line",
            "Roll using bamboo mat with gentle pressure",
            "Wet knife and cut into 8 pieces"
        ],
        tips: "Keep hands wet while handling rice. Use sharp knife for clean cuts.",
        difficulty: "Intermediate",
        region: "Japan",
        likes: 0,
        materials: ["Sushi rice", "Nori sheets", "Fresh fish", "Bamboo mat", "Rice vinegar", "Sharp knife"],
        picTutorial: [
            {
                image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
                description: "Prepare and wash the sushi rice"
            },
            {
                image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
                description: "Season the rice with vinegar mixture"
            },
            {
                image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
                description: "Layout nori and spread rice"
            },
            {
                image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
                description: "Add fish and vegetables"
            },
            {
                image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
                description: "Roll and cut into pieces"
            }
        ]
    }
};

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const categoryFilter = document.getElementById('categoryFilter');
const regionFilter = document.getElementById('regionFilter');
const difficultyFilter = document.getElementById('difficultyFilter');
const tutorialContainer = document.getElementById('tutorialContainer');
const tutorialsGrid = document.getElementById('tutorialsGrid');

// Initialize the app with error handling
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Show loading initially
        showLoading();
        
        // Get all tutorials from the database
        const tutorials = [];
        Object.values(tutorialDatabase).forEach(category => {
            if (Array.isArray(category)) {
                tutorials.push(...category);
            } else if (typeof category === 'object' && category !== null) {
                tutorials.push(category);
            }
        });
        
        // Validate tutorials before displaying
        const validTutorials = tutorials.filter(tutorial => {
            return tutorial && 
                   typeof tutorial.id !== 'undefined' &&
                   typeof tutorial.title === 'string' &&
                   Array.isArray(tutorial.steps) &&
                   Array.isArray(tutorial.materials);
        });
        
        // Display tutorials
        displayTutorials(validTutorials);
        
        // Hide loading
        hideLoading();

        // Initialize search functionality
        initializeSearch();
    } catch (error) {
        console.error('Error initializing app:', error);
        hideLoading();
        displayError('Failed to load tutorials. Please refresh the page.');
    }
});

// Initialize search functionality
function initializeSearch() {
    try {
        const searchInput = document.getElementById('searchInput');
        const searchButton = document.getElementById('searchButton');
        const difficultyFilter = document.getElementById('difficultyFilter');
        const regionFilter = document.getElementById('regionFilter');

        if (!searchInput || !searchButton || !difficultyFilter || !regionFilter) {
            throw new Error('Required search elements not found');
        }

        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') performSearch();
        });
        difficultyFilter.addEventListener('change', performSearch);
        regionFilter.addEventListener('change', performSearch);
    } catch (error) {
        console.error('Error initializing search:', error);
    }
}

// Display error message
function displayError(message) {
    const grid = document.getElementById('tutorialsGrid');
    if (grid) {
        grid.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-circle"></i>
                <p>${message}</p>
                <button onclick="window.location.reload()">Try Again</button>
            </div>
        `;
    }
}

function displayTutorials(tutorials) {
    try {
        const grid = document.getElementById('tutorialsGrid');
        if (!grid) {
            throw new Error('Tutorials grid element not found');
        }

        grid.innerHTML = ''; // Clear existing content

        if (!tutorials || !Array.isArray(tutorials) || tutorials.length === 0) {
            grid.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-info-circle"></i>
                    <p>No tutorials found</p>
                </div>
            `;
            return;
        }

        tutorials.forEach(tutorial => {
            try {
                // Validate required tutorial properties
                if (!tutorial.id || !tutorial.title || !tutorial.description) {
                    console.warn('Skipping invalid tutorial:', tutorial);
                    return;
                }

                const card = document.createElement('div');
                card.className = 'tutorial-card';
                
                // Safely escape HTML in user-provided content
                const safeTitle = escapeHtml(tutorial.title);
                const safeDescription = escapeHtml(tutorial.description);
                const safeMaterials = tutorial.materials.map(m => escapeHtml(m)).join('');
                
                card.innerHTML = `
                    <div class="tutorial-header">
                        <span class="difficulty-badge ${escapeHtml(tutorial.difficulty.toLowerCase())}">
                            ${escapeHtml(tutorial.difficulty)}
                        </span>
                        ${tutorial.region ? `
                            <span class="region-badge">${escapeHtml(tutorial.region)}</span>
                        ` : ''}
                    </div>
                    <div class="tutorial-info">
                        <h3 class="tutorial-title">${safeTitle}</h3>
                        <p class="tutorial-description">${safeDescription}</p>
                        <div class="materials-container">
                            <h4><i class="fas fa-tools"></i> Materials Needed:</h4>
                            <ul class="materials-list">
                                ${safeMaterials}
                            </ul>
                        </div>
                        <div class="tutorial-footer">
                            <button class="like-button" onclick="handleLike('${escapeHtml(tutorial.id)}')">
                                <i class="fas fa-heart"></i>
                                <span id="like-count-${escapeHtml(tutorial.id)}">${tutorial.likes || 0}</span>
                            </button>
                            <button class="try-button" onclick="startTutorial('${escapeHtml(tutorial.id)}')">
                                <i class="fas fa-play"></i> Start Tutorial
                            </button>
                        </div>
                    </div>
                `;
                
                grid.appendChild(card);
            } catch (error) {
                console.error('Error creating tutorial card:', error);
            }
        });
    } catch (error) {
        console.error('Error displaying tutorials:', error);
        displayError('Failed to display tutorials. Please try again.');
    }
}

// Helper function to escape HTML
function escapeHtml(unsafe) {
    if (typeof unsafe !== 'string') return '';
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function showLoading() {
    document.getElementById('loading').style.display = 'flex';
}

function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

// Get all tutorials from the database
function getAllTutorials() {
    const allTutorials = [];
    Object.values(tutorialDatabase).forEach(categoryTutorials => {
        allTutorials.push(...categoryTutorials);
    });
    return allTutorials;
}

// Get featured tutorials from different categories
function getFeaturedTutorials() {
    return getAllTutorials().slice(0, 6); // Show 6 tutorials by default
}

// Handle search functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    showLoading();
    
    setTimeout(() => {
        if (!searchTerm) {
            const allTutorials = getAllTutorials();
            displayTutorials(allTutorials);
            hideLoading();
            return;
        }

        const searchResults = searchTutorials(searchTerm);
        displayTutorials(searchResults);
        hideLoading();
    }, 300);
}

// Search through all tutorials
function searchTutorials(searchTerm) {
    const results = [];
    
    // Search through each category
    Object.values(tutorialDatabase).forEach(categoryTutorials => {
        categoryTutorials.forEach(tutorial => {
            if (
                tutorial.title.toLowerCase().includes(searchTerm) ||
                tutorial.description.toLowerCase().includes(searchTerm) ||
                tutorial.category.toLowerCase().includes(searchTerm) ||
                tutorial.difficulty.toLowerCase().includes(searchTerm) ||
                tutorial.steps.some(step => step.toLowerCase().includes(searchTerm)) ||
                tutorial.materials.some(material => material.toLowerCase().includes(searchTerm))
            ) {
                results.push(tutorial);
            }
        });
    });
    
    // Return all matching results instead of limiting to 3
    return results;
}

// Display tutorials in the grid
function displayTutorials(tutorials) {
    tutorialsGrid.innerHTML = '';
    
    if (tutorials.length === 0) {
        tutorialsGrid.innerHTML = `
            <div class="no-results">
                <h2>No tutorials found</h2>
                <p>Try searching with different keywords or browse our collection</p>
            </div>
        `;
        return;
    }

    // Display all tutorials in a single grid
    tutorialsGrid.innerHTML = tutorials.map(tutorial => `
        <div class="tutorial-card">
            <div class="tutorial-header">
                <span class="difficulty-badge ${tutorial.difficulty.toLowerCase()}">${tutorial.difficulty}</span>
                <span class="region-badge" data-region="${tutorial.region}">${tutorial.region}</span>
            </div>
            <div class="tutorial-info">
                <h3 class="tutorial-title">${tutorial.title}</h3>
                <p class="tutorial-description">${tutorial.description}</p>
                
                <div class="materials-container">
                    <h4><i class="fas fa-list"></i> Materials Needed:</h4>
                    <ul class="materials-list">
                        ${tutorial.materials.map(material => `<li>${material}</li>`).join('')}
                    </ul>
                </div>

                <div class="tutorial-footer">
                    <button class="like-button" onclick="handleLike('${tutorial.id}')">
                        <i class="fas fa-heart"></i>
                        <span id="like-count-${tutorial.id}">${tutorial.likes || 0}</span>
                    </button>
                    <button class="try-button" onclick="startTutorial('${tutorial.id}')">
                        <i class="fas fa-play"></i> Start Tutorial
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Helper function to get category emoji
function getCategoryEmoji(category) {
    const emojiMap = {
        'Cooking': '👨‍🍳',
        'Dance': '💃',
        'Technology': '💻',
        'Fitness': '🏃‍♂️',
        'Language': '🗣️',
        'Art': '🎨',
        'Crafts': '🎭',
        'Music': '🎵',
        'Gardening': '🌿',
        'Photography': '📸'
    };
    return emojiMap[category] || '🌍';
}

// Handle like functionality
function handleLike(tutorialId) {
    // Find the tutorial in the database
    for (const category of Object.values(tutorialDatabase)) {
        const tutorial = category.find(t => t.id === tutorialId);
        if (tutorial) {
            tutorial.likes++;
            const likeCount = document.querySelector(`#like-count-${tutorialId}`);
            if (likeCount) {
                likeCount.textContent = tutorial.likes;
                likeCount.classList.add('like-animation');
                setTimeout(() => likeCount.classList.remove('like-animation'), 300);
            }
            break;
        }
    }
}

// Start tutorial
function startTutorial(tutorialId) {
    const tutorial = findTutorialById(tutorialId);
    if (!tutorial) return;

    // Remove any existing modal
    const existingModal = document.querySelector('.tutorial-modal');
    if (existingModal) existingModal.remove();

    let currentStep = 0;
    const totalSteps = tutorial.steps.length;
    let completedSteps = Array(totalSteps).fill(false);

    // Modern modal HTML with enhanced features
    const modal = document.createElement('div');
    modal.className = 'tutorial-modal premium-modal';
    modal.innerHTML = `
        <div class="modal-content premium-modal-content">
            <div class="modal-progress-bar">
                <div class="modal-progress" style="width:0%"></div>
            </div>
            <div class="modal-header">
                <div class="header-content">
                    <h2>${tutorial.title}</h2>
                    <div class="header-badges">
                        <span class="difficulty-badge ${tutorial.difficulty.toLowerCase()}">${tutorial.difficulty}</span>
                        ${tutorial.region ? `<span class="region-badge">${tutorial.region}</span>` : ''}
                    </div>
                </div>
                <button class="close-modal" aria-label="Close Tutorial">&times;</button>
            </div>
            <div class="modal-body">
                <aside class="materials-sidebar">
                    <h3><i class="fas fa-tools"></i> Materials</h3>
                    <ul>${tutorial.materials.map(m => `<li><i class="fas fa-check-circle"></i> ${m}</li>`).join('')}</ul>
                </aside>
                <section class="steps-section">
                    <div class="step-navigation">
                        <button class="prev-step" aria-label="Previous Step"><i class="fas fa-chevron-left"></i></button>
                        <span class="step-count">Step <span class="current-step">1</span> of ${totalSteps}</span>
                        <button class="next-step" aria-label="Next Step"><i class="fas fa-chevron-right"></i></button>
                    </div>
                    <div class="step-content-area">
                        <div class="step-content">
                            <div class="step-number">1</div>
                            <p>${tutorial.steps[0]}</p>
                            <button class="complete-step"><i class="fas fa-check"></i> Mark Complete</button>
                        </div>
                    </div>
                    <div class="step-progress-info">
                        <div class="progress-container">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width:0%"></div>
                            </div>
                            <span class="steps-completed">0/${totalSteps} steps completed</span>
                        </div>
                    </div>
                </section>
                <section class="tips-section collapsible">
                    <button class="toggle-tips"><i class="fas fa-lightbulb"></i> Pro Tips</button>
                    <div class="tips-content" style="display:none;">
                        <p>${tutorial.tips}</p>
                    </div>
                </section>
            </div>
            <div class="modal-footer">
                <div class="footer-actions">
                    <button class="like-button">
                        <i class="fas fa-heart"></i>
                        <span class="like-count">${tutorial.likes}</span>
                    </button>
                    <button class="share-button">
                        <i class="fas fa-share-alt"></i> Share
                    </button>
                    <button class="save-button">
                        <i class="fas fa-bookmark"></i> Save
                    </button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);

    // Modal logic
    const closeModal = () => {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    };
    modal.querySelector('.close-modal').onclick = closeModal;
    modal.onclick = e => { if (e.target === modal) closeModal(); };

    // Step navigation with smooth transitions
    const updateStep = (stepIdx) => {
        currentStep = stepIdx;
        const stepContent = modal.querySelector('.step-content');
        stepContent.style.opacity = '0';
        
        setTimeout(() => {
            stepContent.querySelector('.step-number').textContent = stepIdx + 1;
            stepContent.querySelector('p').textContent = tutorial.steps[stepIdx];
            stepContent.querySelector('.complete-step').classList.toggle('completed', completedSteps[stepIdx]);
            stepContent.querySelector('.complete-step').innerHTML = completedSteps[stepIdx] ? 
                '<i class="fas fa-check-circle"></i> Completed!' : 
                '<i class="fas fa-check"></i> Mark Complete';
            
            modal.querySelector('.current-step').textContent = stepIdx + 1;
            const progress = ((stepIdx + 1) / totalSteps) * 100;
            modal.querySelector('.modal-progress').style.width = `${progress}%`;
            modal.querySelector('.progress-fill').style.width = `${progress}%`;
            modal.querySelector('.steps-completed').textContent = 
                `${completedSteps.filter(Boolean).length}/${totalSteps} steps completed`;
            
            stepContent.style.opacity = '1';
        }, 300);
    };

    // Enhanced navigation controls
    modal.querySelector('.prev-step').onclick = () => {
        if (currentStep > 0) updateStep(currentStep - 1);
    };
    modal.querySelector('.next-step').onclick = () => {
        if (currentStep < totalSteps - 1) updateStep(currentStep + 1);
    };

    // Enhanced step completion
    modal.querySelector('.complete-step').onclick = () => {
        completedSteps[currentStep] = !completedSteps[currentStep];
        updateStep(currentStep);
        
        // Add completion animation
        const button = modal.querySelector('.complete-step');
        button.classList.add('pulse');
        setTimeout(() => button.classList.remove('pulse'), 500);
    };

    // Keyboard navigation with smooth transitions
    document.addEventListener('keydown', function keyNav(e) {
        if (!document.body.contains(modal)) return document.removeEventListener('keydown', keyNav);
        if (e.key === 'ArrowLeft') modal.querySelector('.prev-step').click();
        if (e.key === 'ArrowRight') modal.querySelector('.next-step').click();
        if (e.key === 'Escape') closeModal();
    });

    // Enhanced like button with animation
    modal.querySelector('.like-button').onclick = () => {
        tutorial.likes++;
        const likeButton = modal.querySelector('.like-button');
        const likeCount = modal.querySelector('.like-count');
        
        likeCount.textContent = tutorial.likes;
        likeButton.classList.add('liked');
        
        // Add heart animation
        const heart = document.createElement('div');
        heart.className = 'heart-animation';
        heart.innerHTML = '<i class="fas fa-heart"></i>';
        likeButton.appendChild(heart);
        
        setTimeout(() => {
            likeButton.classList.remove('liked');
            heart.remove();
        }, 1000);
    };

    // Enhanced share functionality
    modal.querySelector('.share-button').onclick = () => {
        if (navigator.share) {
            navigator.share({
                title: tutorial.title,
                text: `Check out this amazing tutorial: ${tutorial.title}`,
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            const shareButton = modal.querySelector('.share-button');
            shareButton.innerHTML = '<i class="fas fa-check"></i> Copied!';
            setTimeout(() => {
                shareButton.innerHTML = '<i class="fas fa-share-alt"></i> Share';
            }, 2000);
        }
    };

    // Save functionality
    modal.querySelector('.save-button').onclick = () => {
        const saveButton = modal.querySelector('.save-button');
        saveButton.classList.toggle('saved');
        saveButton.innerHTML = saveButton.classList.contains('saved') ? 
            '<i class="fas fa-bookmark"></i> Saved' : 
            '<i class="fas fa-bookmark"></i> Save';
    };

    // Enhanced tips section
    modal.querySelector('.toggle-tips').onclick = () => {
        const tips = modal.querySelector('.tips-content');
        tips.classList.toggle('show');
    };

    // Initial step with animation
    updateStep(0);
}

// Helper to find tutorial by ID
function findTutorialById(tutorialId) {
    for (const category of Object.values(tutorialDatabase)) {
        if (Array.isArray(category)) {
            const t = category.find(t => t.id === tutorialId);
            if (t) return t;
        } else if (category.id === tutorialId) {
            return category;
        }
    }
    return null;
}

// Enhanced like functionality
function handleLike(tutorialId) {
    const tutorial = findTutorialById(tutorialId);
    if (!tutorial) return;

    tutorial.likes++;
    
    // Update like count in all instances
    const likeCounts = document.querySelectorAll(`#like-count-${tutorialId}, #modal-like-count-${tutorialId}`);
    likeCounts.forEach(count => {
        count.textContent = tutorial.likes;
        count.classList.add('like-animation');
        setTimeout(() => count.classList.remove('like-animation'), 300);
    });

    // Add heart animation
    const hearts = document.querySelectorAll(`#like-count-${tutorialId}, #modal-like-count-${tutorialId}`);
    hearts.forEach(heart => {
        const animation = document.createElement('div');
        animation.className = 'heart-animation';
        animation.innerHTML = '<i class="fas fa-heart"></i>';
        heart.parentElement.appendChild(animation);
        setTimeout(() => animation.remove(), 1000);
    });
}

// Share functionality
function shareTutorial(tutorialId) {
    const tutorial = findTutorialById(tutorialId);
    if (!tutorial) return;

    const shareData = {
        title: tutorial.title,
        text: `Check out this amazing tutorial: ${tutorial.title}`,
        url: window.location.href + `?tutorial=${tutorialId}`
    };

    if (navigator.share) {
        navigator.share(shareData)
            .catch(error => console.log('Error sharing:', error));
    } else {
        // Fallback for browsers that don't support Web Share API
        const tempInput = document.createElement('input');
        tempInput.value = shareData.url;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        
        // Show copied notification
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = 'Link copied to clipboard!';
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 2000);
    }
}

// Progress tracking
function updateProgressBar() {
    const steps = document.querySelectorAll('.step');
    const progressBar = document.querySelector('.progress');
    const completedSteps = document.querySelectorAll('.complete-step.completed').length;
    const progress = (completedSteps / steps.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function toggleStepComplete(button) {
    button.classList.toggle('completed');
    if (button.classList.contains('completed')) {
        button.innerHTML = '<i class="fas fa-check-circle"></i> Completed!';
    } else {
        button.innerHTML = '<i class="fas fa-check"></i> Mark Complete';
    }
    updateProgressBar();
} 