// Debug

// const questionsData  = [
//     {
//         "id": 17,
//         "questionText": "Which of the following stations feature the 'Book the Cook' service? I. Bangkok II. Frankfurt III. London IV. Moscow",
//         "options": [
//         { "id": 0, "optionText": "I, III" },
//         { "id": 1, "optionText": "I, II, III, IV" },
//         { "id": 2, "optionText": "III, IV" },
//         { "id": 3, "optionText": "II, III" }
//         ],
//         "correctAnswerId": 3 // Edit as needed
//     },
// ]


const questionsData = [
    {
      id: 1,
      questionText: "The Cabin Crew Accident Report (CCAR) is deposited into the box marked 'Accident Reports' located in Control Centre at the end of the flight by the ________.",
      options: [
        { id: 'a', optionText: "Commander" },
        { id: 'b', optionText: "CIC" },
        { id: 'c', optionText: "Duty Manager" },
        { id: 'd', optionText: "SATS Ground Staff" }
      ],
      correctAnswerId: 'b' // Edit as needed
    },
    {
      id: 2,
      questionText: "The 3 pillars of SIA’s success are:  <br> I. airline mergers  <br> II. an extensive route network <br> III. strategic alliances and investments <br> IV. expansion of low-cost routes  <br>V. modern fleet VI. focus on domestic market",
      options: [
        { id: 'a', optionText: "IV, V and VI" },
        { id: 'b', optionText: "I, III and VI" },
        { id: 'c', optionText: "II, IV and V" },
        { id: 'd', optionText: "II, III and V" }
      ],
      correctAnswerId: 'd' // Edit as needed
    },
    {
      id: 3,
      questionText: "When in uniform, a wrist watch must be worn",
      options: [
        { id: 'a', optionText: "True" },
        { id: 'b', optionText: "False" }
      ],
      correctAnswerId: 'a' // Edit as needed
    },
    {
      id: 4,
      questionText: "Liqueurs are offered _________________.",
      options: [
        { id: 0, optionText: "On request basis during dinner/supper service in SCL/YCL" },
        { id: 1, optionText: "Before the commencement of lunch service in YCL" },
        { id: 2, optionText: "After the commencement of lunch service in SCL" },
        { id: 3, optionText: "After the commencement of dinner service in SCL/YCL" }
      ],
      correctAnswerId: 0 // Edit as needed
    },
    {
      id: 5,
      questionText: "Which one of the following could be recommended as an aperitif?",
      options: [
        { id: 0, optionText: "Campari" },
        { id: 1, optionText: "Cognac" },
        { id: 2, optionText: "Bailey’s original Irish cream" },
        { id: 3, optionText: "Vodka" }
      ],
      correctAnswerId: 0 // Edit as needed
    },
    {
      id: 6,
      questionText: "Which of the following is NOT a core value of SIA?",
      options: [
        { id: 0, optionText: "Security" },
        { id: 1, optionText: "Teamwork" },
        { id: 2, optionText: "Customer focus" },
        { id: 3, optionText: "Integrity" }
      ],
      correctAnswerId: 0 // Edit as needed
    },
    {
      id: 7,
      questionText: "The Singapore airlines suite is exclusively available on the ______.",
      options: [
        { id: 0, optionText: "B777-300ER" },
        { id: 1, optionText: "A380" },
        { id: 2, optionText: "A330" },
        { id: 3, optionText: "A345-500" }
      ],
      correctAnswerId: 1 // Edit as needed
    },
    {
        "id": 8,
        "questionText": "What are some of the approved hairstyles for operating crew?",
        "options": [
          { "id": 0, "optionText": "Pixie, bob, chignon, wet look" },
          { "id": 1, "optionText": "Pixie, bob, chignon, ponytail" },
          { "id": 2, "optionText": "Bob, pixie, chignon, French twist, French plait" },
          { "id": 3, "optionText": "Pixie, bob, chignon, ponytail, French twist" }
        ],
        "correctAnswerId": 2 // Edit as needed
      },
      {
        "id": 9,
        "questionText": "Singapore Airline’s logo is a stylized version of a bird in rich gold color that symbolizes ________",
        "options": [
          { "id": 0, "optionText": "SOAR" },
          { "id": 1, "optionText": "A380" },
          { "id": 2, "optionText": "Aircraft" },
          { "id": 3, "optionText": "Flight" }
        ],
        "correctAnswerId": 3 // Edit as needed
      },
      {
        id: 10,
        questionText: "A passenger complains of migraines and requests for some medication for his headache. Identify the steps when attending to his request: <br>I. Identify the ailment of the passenger and prescribe the appropriate medication in the required dosage. <br>II. Inform the passenger about medicine available and ask him for his choice. <br>III. When serving medicine, show the passenger the container of the medicine selected and highlight the directions written on the container. <br>IV. Page immediately for assistance from any medical personnel onboard.",
        options: [
          { id: 0, optionText: "I and IV" },
          { id: 1, optionText: "III and IV" },
          { id: 2, optionText: "II and III" },
          { id: 3, optionText: "I and II" }
        ],
        correctAnswerId: 2 // Replace with the correct ID
      },
      {
        "id": 11,
        "questionText": "Crew are not allowed to consume alcoholic drinks in public places while in uniform.",
        "options": [
          { "id": 0, "optionText": "True" },
          { "id": 1, "optionText": "False" }
        ],
        "correctAnswerId": 0 // Edit as needed
      },
      {
        "id": 12,
        "questionText": "Which of the following is the appropriate way of referring to a WCHC passenger?",
        "options": [
          { "id": 0, "optionText": "This is the wheelchair passenger" },
          { "id": 1, "optionText": "This is the WCHC" },
          { "id": 2, "optionText": "This is the wheelchair-bound passenger" },
          { "id": 3, "optionText": "This is the passenger who uses a wheelchair" }
        ],
        "correctAnswerId": 3 // Edit as needed
      },
      {
        "id": 13,
        "questionText": "Which of the following statements on the completion of the Cabin Crew Accident Report is INCORRECT?",
        "options": [
          { "id": 0, "optionText": "It is raised by the complex leader and endorsed by the CIC and Commander" },
          { "id": 1, "optionText": "It is raised by the CIC and endorsed by the Commander" },
          { "id": 2, "optionText": "It is raised by the next highest ranking crew if the CIC is the injured person and endorsed by the Commander" },
          { "id": 3, "optionText": "It is raised by the injured crew and endorsed by the CIC and Commander" }
        ],
        "correctAnswerId": 3 // Edit as needed
      },    
    {
        "id": 14,
        "questionText": "Select the statement that best describes the food term, Fillet",
        "options": [
        { "id": 0, "optionText": "Thin strips of vegetables" },
        { "id": 1, "optionText": "Breast of chicken" },
        { "id": 2, "optionText": "Side of fish without bones" },
        { "id": 3, "optionText": "Cubes of meat" }
        ],
        "correctAnswerId": 2 // Edit as needed
    },
        {
            "id": 15,
            "questionText": "A hearing-impaired passenger who needs a hearing aid is on the flight. What should the crew do when attending to the passenger?",
            "options": [
            { "id": 0, "optionText": "Speak loudly and clearly into the hearing aid of the passenger" },
            { "id": 1, "optionText": "Tap the passenger lightly on the shoulder to get his/her attention" },
            { "id": 2, "optionText": "Face the passenger and use hand gestures when speaking to him/her" },
            { "id": 3, "optionText": "Pay attention to the passenger by introducing the inflight movies and music" }
            ],
            "correctAnswerId": 2 // Edit as needed
        },
        {
            "id": 16,
            "questionText": "When a passenger leaves behind an item onboard a flight into SIN, which statement is TRUE?",
            "options": [
            { "id": 0, "optionText": "The item should be handed to SATS police" },
            { "id": 1, "optionText": "Crew should keep the item but ensure the information is recorded in the CCVR" },
            { "id": 2, "optionText": "In the event there is no ground or SATS police personnel, crew can call the SATS police" },
            { "id": 3, "optionText": "Crew can handover the item to SATS Lost & Found, located at the arrival hall before Customs clearance" }
            ],
            "correctAnswerId": 3 // Edit as needed
        },
        {
            "id": 17,
            "questionText": "Which of the following stations feature the 'Book the Cook' service? <br>I. Bangkok <br>II. Frankfurt <br>III. London <br>IV. Moscow",
            "options": [
            { "id": 0, "optionText": "I, III" },
            { "id": 1, "optionText": "I, II, III, IV" },
            { "id": 2, "optionText": "III, IV" },
            { "id": 3, "optionText": "II, III" }
            ],
            "correctAnswerId": 3 // Edit as needed
        },
        {
            "id": 18,
            "questionText": "The South West Pacific region refers to stations such as ________",
            "options": [
            { "id": 0, "optionText": "Cairo, Cape Town, New Delhi, and Dubai" },
            { "id": 1, "optionText": "Los Angeles, New York, SFO, and Houston" },
            { "id": 2, "optionText": "Auckland, Brisbane, Melbourne, and Perth" },
            { "id": 3, "optionText": "Athens, Barcelona, Milan, and Copenhagen" }
            ],
            "correctAnswerId": 2 // Edit as needed
        },
        {
            "id": 19,
            "questionText": "Select the statement that best describes the food term, Supreme",
            "options": [
            { "id": 0, "optionText": "Breast of chicken" },
            { "id": 1, "optionText": "Thin strips of vegetables" },
            { "id": 2, "optionText": "Side of fish without bones" },
            { "id": 3, "optionText": "Cubes of meat" }
            ],
            "correctAnswerId": 0 // Edit as needed
        },
        {
            "id": 20,
            "questionText": "Mr. Tan's request for GFML was not uplifted. You can offer him sandwiches and muffins as alternatives.",
            "options": [
            { "id": 0, "optionText": "True" },
            { "id": 1, "optionText": "False" }
            ],
            "correctAnswerId": 1 // Edit as needed
        },
        {
            "id": 21,
            "questionText": "Which of the following alcoholic drinks have vodka as its liquor base?<br>I. Bloody Mary<br>II. Alspritzer<br>III. Screw Driver<br>IV. Singapore Sling",            
            "options": [
            { "id": 0, "optionText": "I, II" },
            { "id": 1, "optionText": "I, III" },
            { "id": 2, "optionText": "I, II, III" },
            { "id": 3, "optionText": "I, II, III, IV" }
            ],
            "correctAnswerId": 2 // Edit as needed
        },
        {
            "id": 22,
            "questionText": "It is a requirement for crew to have a passport validity of ___ month(s).",
            "options": [
            { "id": 0, "optionText": "12" },
            { "id": 1, "optionText": "3" },
            { "id": 2, "optionText": "6" },
            { "id": 3, "optionText": "1" }
            ],
            "correctAnswerId": 2 // Edit as needed
        },
        {
            "id": 23,
            "questionText": "When in uniform, a maximum of 2 rings may be worn. They can be worn singly or together on any finger except the thumb and index finger.",
            "options": [
            { "id": 0, "optionText": "True" },
            { "id": 1, "optionText": "False" }
            ],
            "correctAnswerId": 0 // Edit as needed
        },
        {
            "id": 24,
            "questionText": "Mr. Wang wanted his Bloody Mary to be spicier. Which one of the following ingredients would you add more to his drink?",
            "options": [
            { "id": 0, "optionText": "Tobacco sauce" },
            { "id": 1, "optionText": "Tomato juice" },
            { "id": 2, "optionText": "Angostura bitters" },
            { "id": 3, "optionText": "Chili sauce" }
            ],
            "correctAnswerId": 0 // Edit as needed
        },
        {
            "id": 25,
            "questionText": "The term 'gratinating' refers to _____.",
            "options": [
            { "id": 0, "optionText": "Cooking in an oven" },
            { "id": 1, "optionText": "Cooking with little liquid in a covered pot" },
            { "id": 2, "optionText": "Quick cooking in a hot pan/wok until the food develops a crusty texture" },
            { "id": 3, "optionText": "Browning the surface with food that has been coated with cheese and/or breadcrumbs" }
            ],
            "correctAnswerId": 3 // Edit as needed
        },
        {
            "id": 26,
            "questionText": "In which of the following situations will amenity kits be distributed to YCL passengers?",
            "options": [
            { "id": 0, "optionText": "On overnight flights with a flight time of 5 hours and above and where arrival time is after 0030 hours" },
            { "id": 1, "optionText": "On all flights departing after 1730 with a flight time of more than 3 hours" },
            { "id": 2, "optionText": "On long-haul flights with block time that exceeds 6 hours" },
            { "id": 3, "optionText": "It is only distributed on request" }
            ],
            "correctAnswerId": 0 // Edit as needed
        },
        {
            "id": 27,
            "questionText": "Which of the following statements on the use of the bassinets are TRUE?    <br>I. Assemble the bassinet before takeoff so that the baby can be secured for takeoff. <br>II. Advise the mother to hold the baby in her arms with the infant seat belt during turbulence. <br>III. Position the baby such that his/her head is away from the aisle. <br>IV. During landing, the safety flaps of the bassinet must be zipped to ensure that the baby is secured.",
            "options": [
            { "id": 0, "optionText": "II, III" },
            { "id": 1, "optionText": "I, II, III, IV" },
            { "id": 2, "optionText": "II" },
            { "id": 3, "optionText": "I, II, IV" }
            ],
            "correctAnswerId": 0 // Edit as needed
        },
        {
            "id": 28,
            "questionText": "All Meet and Assist Services (MAAS) passengers will be catered special meals.",
            "options": [
            { "id": 0, "optionText": "True" },
            { "id": 1, "optionText": "False" }
            ],
            "correctAnswerId": 1 // Edit as needed
        },
        {
            "id": 29,
            "questionText": "Select the statement that describes the food term, Tournedoes.",
            "options": [
            { "id": 0, "optionText": "Food on skewer" },
            { "id": 1, "optionText": "Cut from tenderloin" },
            { "id": 2, "optionText": "Round slice of meat without bone" },
            { "id": 3, "optionText": "Thin boneless slice of meat" }
            ],
            "correctAnswerId": 1 // Edit as needed
        },
        {
            "id": 30,
            "questionText": "Identify which of the following are moist heat cooking methods.  <br>I. Poaching <br>II. Baking <br>III. Blanching <br>IV. Sautéing",
            "options": [
            { "id": 0, "optionText": "I, II" },
            { "id": 1, "optionText": "I, III, IV" },
            { "id": 2, "optionText": "I, III" },
            { "id": 3, "optionText": "I, II, IV" }
            ],
            "correctAnswerId": 2 // Edit as needed
        },
        {
            "id": 31,
            "questionText": "Crew in uniform _______.",
            "options": [
            { "id": 0, "optionText": "Can smoke as long as they are seated" },
            { "id": 1, "optionText": "Can smoke anywhere" },
            { "id": 2, "optionText": "Must not smoke in public at all times" },
            { "id": 3, "optionText": "Can smoke anywhere as long as permission is given from the CIC" }
            ],
            "correctAnswerId": 2 // Edit as needed
        },
    {
        "id": 32,
        "questionText": "The guideline to heat 'Parsley Omelette with Chipolata' is _______. I. 15 minutes using medium heat in steam oven II. 20 minutes using dry heat in steam oven III. 30 minutes using medium heat in steam oven IV. 25 minutes using medium heat in steam oven",
        "options": [
        { "id": 0, "optionText": "15 minutes using medium heat in steam oven" },
        { "id": 1, "optionText": "20 minutes using dry heat in steam oven" },
        { "id": 2, "optionText": "30 minutes using medium heat in steam oven" },
        { "id": 3, "optionText": "25 minutes using medium heat in steam oven" }
        ],
        "correctAnswerId": 0 // Edit as needed
    },
    {
        "id": 33,
        "questionText": "The ice tong is used for _______. <br>I. Distributing and collecting towels <br>II. Removing coffee and tea pouches from the flask after brewing <br>III. Picking up ice during drink cart service <br>IV. Picking biscuits",
        "options": [
        { "id": 0, "optionText": "II, III" },
        { "id": 1, "optionText": "II, III, IV" },
        { "id": 2, "optionText": "I, II, III, IV" },
        { "id": 3, "optionText": "I, II, IV" }
        ],
        "correctAnswerId": 1 // Edit as needed
    },
    {
        "id": 34,
        "questionText": "Select the statement that best describes the alcoholic product, Whisky.",
        "options": [
        { "id": 0, "optionText": "Includes bourbon and scotch" },
        { "id": 1, "optionText": "Flavored with juniper berries" },
        { "id": 2, "optionText": "Colorless, originally made from potatoes" },
        { "id": 3, "optionText": "Made from fermented sugar cane" }
        ],
        "correctAnswerId": 0 // Edit as needed
    },
    {
        "id": 35,
        "questionText": "Service the SIA way is defined as _______.",
        "options": [
        { "id": 0, "optionText": "Meeting and exceeding passengers’ needs and expectations resulting in customer satisfaction" },
        { "id": 1, "optionText": "Being a service champion and making SIA the undisputed industry leader" },
        { "id": 2, "optionText": "Delivering service of the highest quality according to strict procedures set by the Company" },
        { "id": 3, "optionText": "A process of winning back customers who have been mishandled or inconvenienced as a result of service failure" }
        ],
        "correctAnswerId": 0 // Edit as needed
    },
    {
        "id": 36,
        "questionText": "Identify the correct base liquor for the cocktail, Alspritzer.",
        "options": [
        { "id": 0, "optionText": "Gin" },
        { "id": 1, "optionText": "Bourbon" },
        { "id": 2, "optionText": "Rum" },
        { "id": 3, "optionText": "Vodka" }
        ],
        "correctAnswerId": 3 // Edit as needed
    },
    {
        "id": 37,
        "questionText": "It is important to use the catering checklist to verify the _______.",
        "options": [
        { "id": 0, "optionText": "Amount of amenities uplifted" },
        { "id": 1, "optionText": "Number and types of magazines uplifted" },
        { "id": 2, "optionText": "Types of sauces and dressings supplied for the meals" },
        { "id": 3, "optionText": "Amount of beer and wines uplifted" }
        ],
        "correctAnswerId": 2 // Edit as needed
    },
    {
        "id": 38,
        "questionText": "This document is required for Inward/Outward clearance of the aircraft. It includes the following information: I. The operator of the airline II. The date/point of departure III. The number of passengers embarking/disembarking at departure/arrival stations IV. The health declaration of all persons on board the aircraft.",
        "options": [
        { "id": 0, "optionText": "Onboard Service List" },
        { "id": 1, "optionText": "General Declaration" },
        { "id": 2, "optionText": "Load Sheet" },
        { "id": 3, "optionText": "Specific Customs, Immigration, and Quarantine Form (CIQ)" }
        ],
        "correctAnswerId": 1 // Edit as needed
    },
    {
        "id": 39,
        "questionText": "What are the uses of the small melamine bowl? <br>I. As a base for containing dessert <br>II. As a base for serving sandwiches during adhoc requests <br>III. As a base for containing breadroll on a large-sized tray <br>IV. As a base for containing sweets when serving children",
        "options": [
        { "id": 0, "optionText": "I, II, III, IV" },
        { "id": 1, "optionText": "II, III, IV" },
        { "id": 2, "optionText": "II, IV" },
        { "id": 3, "optionText": "I, III" }
        ],
        "correctAnswerId": 3 // Edit as needed
    },
    {
        "id": 40,
        "questionText": "The _______ is a document used to record incidents in the aircraft both on ground and during the flight.",
        "options": [
        { "id": 0, "optionText": "Cabin Defect Log" },
        { "id": 1, "optionText": "IFE Defect Log" },
        { "id": 2, "optionText": "Cabin Cleanliness Log" },
        { "id": 3, "optionText": "Cabin Crew Voyage Report" }
        ],
        "correctAnswerId": 3 // Edit as needed
    },
    {
        "id": 41,
        "questionText": "Percolated coffee should be served within 20 minutes of brewing to prevent the coffee from _______.",
        "options": [
        { "id": 0, "optionText": "Turning sour" },
        { "id": 1, "optionText": "Losing its caffeine content" },
        { "id": 2, "optionText": "Losing its chemical content and causing a stomach upset" },
        { "id": 3, "optionText": "Losing aroma" }
        ],
        "correctAnswerId": 0 // Edit as needed
    },
    {
        "id": 42,
        "questionText": "After Singapore’s separation from the Federation of Malaysia, the governments from Malaysia and Singapore acquired joint control of the airline. The airline underwent a second name change and was renamed _______.",
        "options": [
        { "id": 0, "optionText": "Malayan Airways" },
        { "id": 1, "optionText": "Malaysia-Singapore Airlines" },
        { "id": 2, "optionText": "Singapore Airlines" },
        { "id": 3, "optionText": "Malay-Singapore Airways" }
        ],
        "correctAnswerId": 1 // Edit as needed
    }, 
    {
        "id": 43,
        "questionText": "Vegetarian Lacto/Ovo meals will not include _______.",
        "options": [
        { "id": 0, "optionText": "Dessert made from gelatin" },
        { "id": 1, "optionText": "Peppercorns and chilies" },
        { "id": 2, "optionText": "Egg and dairy products" },
        { "id": 3, "optionText": "Peas and lentils" }
        ],
        "correctAnswerId": 0 // Edit as needed
    },
    {
        "id": 44,
        "questionText": "The correct city name for the 3-letter code, BNE is _______.",
        "options": [
        { "id": 0, "optionText": "Brisbane" },
        { "id": 1, "optionText": "Bangalore" },
        { "id": 2, "optionText": "Brussels" },
        { "id": 3, "optionText": "Fukuoka" }
        ],
        "correctAnswerId": 0 // Edit as needed
    },
    {
        "id": 45,
        "questionText": "Veragel\\DMS is available for a passenger who is suffering from _______.",
        "options": [
        { "id": 0, "optionText": "Fever" },
        { "id": 1, "optionText": "Air sickness" },
        { "id": 2, "optionText": "Diarrhea" },
        { "id": 3, "optionText": "Gastric pain" }
        ],
        "correctAnswerId": 3 // Edit as needed
    },
    {
        "id": 46,
        "questionText": "Which of the following is considered a dressing that is not emulsified?",
        "options": [
        { "id": 0, "optionText": "Italian dressing" },
        { "id": 1, "optionText": "Thousand island dressing" },
        { "id": 2, "optionText": "Cocktail dressing" },
        { "id": 3, "optionText": "Honey mustard dressing" }
        ],
        "correctAnswerId": 0 // Edit as needed
    },
    {
        "id": 47,
        "questionText": "Besides being able to select from a standard menu with three meal choices, passengers traveling in SCL may also select from the SCL Book the Cook service.",
        "options": [
        { "id": 0, "optionText": "True" },
        { "id": 1, "optionText": "False" }
        ],
        "correctAnswerId": 0 // Edit as needed
    },
    {
        "id": 48,
        "questionText": "Given that communication is a two-way process _______.",
        "options": [
        { "id": 0, "optionText": "Listen attentively to them only after the meal service when we have time" },
        { "id": 1, "optionText": "We must focus only on getting the passengers to understand us" },
        { "id": 2, "optionText": "We can adopt an open body language so that passengers understand our genuine interest to provide service to them" },
        { "id": 3, "optionText": "We should use phrases like 'you don’t understand' to communicate our emotions to them" }
        ],
        "correctAnswerId": 2 // Edit as needed
    },
    {
        "id": 49,
        "questionText": "Which of the following statements apply when managing UM? <br>I. Crew should check on them regularly and assist in completion of CIQ forms <br>II. During the meal service, UM should be served after all the other passengers so that crew will be able to assist to feed them <br>III. If the UM is seated in YCL, he/she should disembark after all the FCL/JCL passengers <br>IV. UM should not be served any alcoholic drinks",
        "options": [
        { "id": 0, "optionText": "I, II, III, IV" },
        { "id": 1, "optionText": "I, II" },
        { "id": 2, "optionText": "II, IV" },
        { "id": 3, "optionText": "I, III, IV" }
        ],
        "correctAnswerId": 3 // Edit as needed
    },
    {
        "id": 50,
        "questionText": "Which of the following statements is FALSE?",
        "options": [
        { "id": 0, "optionText": "When a service professional is unable to accommodate a customer’s request, he/she must know how to make up excuses so that the customer will not feel short-changed" },
        { "id": 1, "optionText": "Creating a positive perception of service excellence allows our passengers to understand the situation when we are unable to accommodate to their requests" },
        { "id": 2, "optionText": "Securing passengers’ satisfaction and exceeding their expectations at each service encounter is important" },
        { "id": 3, "optionText": "As a crew, we must actively look out for signs that may reveal a passenger who is in need of something" }
        ],
        "correctAnswerId": 0 // Edit as needed
    },
    {
        "id": 51,
        "questionText": "When opening a bottle of red wine, you discover that the cork is slightly moldy. Which of the following actions would you take?",
        "options": [
        { "id": 0, "optionText": "Wipe the inside of the bottle at the neck area to ensure that the mold is not ‘served’ with the wine" },
        { "id": 1, "optionText": "Serve the wine immediately as it is safe for consumption despite the presence of the mold" },
        { "id": 2, "optionText": "Chill the wine longer as it would inhibit the harmful effects of the mold" },
        { "id": 3, "optionText": "Discard the wine and raise a CCVR" }
        ],
        "correctAnswerId": 0 // Edit as needed
    },
    {
        "id": 52,
        "questionText": "Which of the following statements is FALSE?",
        "options": [
        { "id": 0, "optionText": "Crew must not consume alcohol for 10 hours before the estimated departure flight time and whilst on duty" },
        { "id": 1, "optionText": "Crew who report sick at 2 hours or less before flight reporting time are considered to have reported sick at short notice" },
        { "id": 2, "optionText": "When a crew is not contactable and there is no known reason for this, he/she will be deemed as absent without official leave" },
        { "id": 3, "optionText": "Crew must submit their medical certificate for the period of medical leave taken at base within 14 days from the last day of their medical leave" }
        ],
        "correctAnswerId": 0 // Edit as needed
    },
    {
        "id": 53,
        "questionText": "If a passenger finds a chipped porcelain in his main course, this incident should be recorded in the _______.",
        "options": [
        { "id": 0, "optionText": "Flight record" },
        { "id": 1, "optionText": "Cabin defect log" },
        { "id": 2, "optionText": "Accident report" },
        { "id": 3, "optionText": "Cabin crew voyage report" }
        ],
        "correctAnswerId": 3 // Edit as needed
    },
    {
        "id": 54,
        "questionText": "On a HKG\\SFO flight, a youthful-looking passenger traveling with his parents requests a glass of white wine. In this situation, the crew should _______.",
        "options": [
        { "id": 0, "optionText": "Explain immediately the minimum drinking age policy of SIA and offer non-alcoholic beverages as an alternative" },
        { "id": 1, "optionText": "Request politely for proof of age and serve the drink if the passenger is 21 years and above" },
        { "id": 2, "optionText": "Seek approval from the parents of the passenger and serve the drink only if permission is granted" },
        { "id": 3, "optionText": "Validate the age of the passenger and serve the drink if he/she is above 18 years old" }
        ],
        "correctAnswerId": 1 // Edit as needed
    },
    {
        "id": 55,
        "questionText": "Crew are to update the following details in Employee Self Service (ESS) except for changes to their:",
        "options": [
        { "id": 0, "optionText": "Marital status" },
        { "id": 1, "optionText": "Rank" },
        { "id": 2, "optionText": "Address" },
        { "id": 3, "optionText": "US Visa" }
        ],
        "correctAnswerId": 1 // Edit as needed
    },
    {
        "id": 56,
        "questionText": "What should we do when a passenger refuses to show his/her boarding pass?",
        "options": [
        { "id": 0, "optionText": "Immediately hand him/her to the airport security as safety and security must be strictly enforced" },
        { "id": 1, "optionText": "Politely inform him/her that security personnel may have to be alerted if he/she refuses to cooperate" },
        { "id": 2, "optionText": "Allow him to take a seat as he is an important Life PPS member" },
        { "id": 3, "optionText": "Disregard the other passengers who are boarding and keep him/her standing at the boarding door until he/she produces a valid boarding pass" }
        ],
        "correctAnswerId": 1 // Edit as needed
    },
    {
        "id": 57,
        "questionText": "Select the statement that describes the food term, Noisette.",
        "options": [
        { "id": 0, "optionText": "Cut from tenderloin" },
        { "id": 1, "optionText": "Thin boneless slice of meat" },
        { "id": 2, "optionText": "Food on skewer" },
        { "id": 3, "optionText": "Round slice of meat without bone" }
        ],
        "correctAnswerId": 3 // Edit as needed
    },
    {
        "id": 58,
        "questionText": "SIA was the first airline to fly the A380 and launched the A380 on the Singapore to Sydney vv sector on _______.",
        "options": [
        { "id": 0, "optionText": "October 2007" },
        { "id": 1, "optionText": "June 2006" },
        { "id": 2, "optionText": "October 2009" },
        { "id": 3, "optionText": "September 2008" }
        ],
        "correctAnswerId": 0 // Edit as needed
    },
    {
        "id": 59,
        "questionText": "Identify the correct base liquor for the cocktail, Screwdriver.",
        "options": [
        { "id": 0, "optionText": "Bourbon" },
        { "id": 1, "optionText": "Gin" },
        { "id": 2, "optionText": "Rum" },
        { "id": 3, "optionText": "Vodka" }
        ],
        "correctAnswerId": 3 // Edit as needed
    },
    {
        "id": 60,
        "questionText": "Which of the following items can be offered to a passenger whose KSML has not been uplifted?",
        "options": [
        { "id": 0, "optionText": "Shrimp cocktail" },
        { "id": 1, "optionText": "Beef with herb cream sauce" },
        { "id": 2, "optionText": "Lobster salad" },
        { "id": 3, "optionText": "Soft-boiled eggs" }
        ],
        "correctAnswerId": 3 // Edit as needed
    },
    {
        "id": 61,
        "questionText": "Which of the following statements are true regarding SPMLs? <br>I. Muslim passengers with MOML requests can be served meals containing truffles. <br>II. Dairy products and chicken can be featured together in a KSML. <br>III. Passengers with DBML requests must be informed at least 30 minutes before being served the meal so that they can take their medication. <br>IV. NLML is suitable for a person who is lactose intolerant.",
        "options": [
        { "id": 0, "optionText": "III, IV" },
        { "id": 1, "optionText": "I, II, III, IV" },
        { "id": 2, "optionText": "I, II, IV" },
        { "id": 3, "optionText": "II, IV" }
        ],
        "correctAnswerId": 0 // Edit as needed
    },
    {
        "id": 62,
        "questionText": "Select the best statement that describes 'Light Meal.'",
        "options": [
        { "id": 0, "optionText": "Served on flights departing before 0900 hours with a minimum flight time of 3 hours." },
        { "id": 1, "optionText": "Served on flights departing between 1030 hours and 1400 hours with a flight time of at least 4 hours." },
        { "id": 2, "optionText": "Features a reduced number of courses and may be served as a second meal." },
        { "id": 3, "optionText": "Features breakfast entrée and dessert." }
        ],
        "correctAnswerId": 2 // Edit as needed
    },
    {
        "id": 63,
        "questionText": "Identify the types of tea that are offered without sugar and milk. <br>I. Green tea <br>II. Chinese oolong tea <br>III. Earl grey tea <br>IV. Darjeeling tea",
        "options": [
        { "id": 0, "optionText": "III, IV" },
        { "id": 1, "optionText": "I, II" },
        { "id": 2, "optionText": "I, II, III" },
        { "id": 3, "optionText": "I, II, III, IV" }
        ],
        "correctAnswerId": 1 // Edit as needed
    },
    {
        "id": 64,
        "questionText": "Airline alliances provide a network of connectivity and convenience for international passengers and packages. On 1 April 2000, SIA became a full member of the _______.",
        "options": [
        { "id": 0, "optionText": "SkyTeam" },
        { "id": 1, "optionText": "FAA" },
        { "id": 2, "optionText": "Star Alliance" },
        { "id": 3, "optionText": "IATA" }
        ],
        "correctAnswerId": 2 // Edit as needed
    },
    {
        "id": 65,
        "questionText": "Which of the following are SIA Service Attributes? <br>I. Warm <br>II. Professional <br>III. Loyal <br>IV. Enterprising",
        "options": [
        { "id": 0, "optionText": "I, II, IV" },
        { "id": 1, "optionText": "I, II, III, IV" },
        { "id": 2, "optionText": "II, III" },
        { "id": 3, "optionText": "I, II, III" }
        ],
        "correctAnswerId": 0 // Edit as needed
    },
    {
        "id": 66,
        "questionText": "Which statement is NOT true with regards to the display of staff ID when in uniform?",
        "options": [
        { "id": 0, "optionText": "The use of plastic holders with the logos of other airlines/companies is NOT permitted; only company or union-issued ones are permitted." },
        { "id": 1, "optionText": "The staff ID can be worn on a strap hung around the neck." },
        { "id": 2, "optionText": "The staff ID must be clipped on the left-hand side of the uniform." },
        { "id": 3, "optionText": "Only clear or transparent plastic holders with white/black/dark blue clips may be used." }
        ],
        "correctAnswerId": 1 // Edit as needed
    },
    {
        "id": 67,
        "questionText": "Which of the following is used to record aircraft equipment, cabin, toilet, and galley defects?",
        "options": [
        { "id": 0, "optionText": "Cabin defect log" },
        { "id": 1, "optionText": "Cabin cleanliness log" },
        { "id": 2, "optionText": "IFE defect log" },
        { "id": 3, "optionText": "Flight record" }
        ],
        "correctAnswerId": 0 // Edit as needed
    },
    {
        "id": 68,
        "questionText": "Passengers traveling in SCL will be offered champagne, in addition to a selection of curated wines throughout the flight.",
        "options": [
        { "id": 0, "optionText": "True" },
        { "id": 1, "optionText": "False" }
        ],
        "correctAnswerId": 0 // Edit as needed
    }

  ];

  
  export default questionsData;