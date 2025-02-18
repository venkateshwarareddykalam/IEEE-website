export const navbar = [
    {
        label: "IEEE Logo",
        url: "https://s3-us-west-1.amazonaws.com/foscoshopify/graphics/uploads/2010/12/IEEE-logo.gif",
        type: "icon"
    },
    {
        label:"cbit logo",
        url:"https://www.cbit.ac.in/wp-content/uploads/2023/04/CBIT-LOGO-2023.png",
        type:"icon"
    },
    {
        label: "Home",
        type: "link",
        url: "/"
    },
    {
        label: "About Us",
        type: "menu",
        submenu: [
            {
                label: "CBIT",
                url: "/about-cbit"
            },
            {
                label: "Dept Of IT",
                url: "/dept-it"
            },
            {
                label: "About the Conference", // Added About the Conference option
                url: "/about-conference"
            }
        ]
    },
    {
        "label": "Committees",
        "type": "menu",
        "submenu": [
            {
                "label": "Advisory Board",
                "url": "/advisory-board"
            },
            {
                "label": "Patrons",
                "url": "/patrons"
            },
            {
                "label": "Program And Organizing Committee",
                "url": "/program-organizing"
            },
            {
                "label": "Organizing Committee",
                "url": "/organizing-committee"
            },
            {
                "label": "Technical Program Committee",
                "url": "/technical-program"
            },
            {
                "label": "Finance Committee",
                "url": "/finance"
            },
            {
                "label": "Publicity Committee",
                "url": "/publicity"
            },
            {
                "label": "Publications Committee",
                "url": "/publication"
            },
            {
                "label": "Website Committee",
                "url": "/websitecommitee"
            },
            {
                "label": "Partnerships Committee",
                "url": "/partnerships"
            },
            {
                "label": "Workshops & Special Sessions Committee",
                "url": "/workshops"
            },
            {
                "label": "Tutorials Committee",
                "url": "/tutorials"
            },
            {
                "label": "Student Posters Committee",
                "url": "/StudentPosters"
            },
            {
                "label": "Pre-Conference Workshops Committee",
                "url": "/pre-conference"
            },
            {
                "label": "Industry Sponsorships Committee",
                "url": "/industry-sponsorships"
            },
            {
                "label": "Content Writing and Communications Committee",
                "url": "/content-writing"
            },
            {
                "label": "Design Committee",
                "url": "/team-design"
            },
            {
                "label": "Anchoring and Cultural Committee",
                "url": "/team-anchoring"
            },
            {
                "label": "Venues and Stalls Committee",
                "url": "/team-venues"
            },
            {
                "label": "Travel and Accommodation Committee",
                "url": "/team-travel"
            },
            {
                "label": "Food Committee",
                "url": "/team-food"
            },
        ]
    }
    ,
    {
        label:"Registration",
        type:"link",
        url:"/registration"
    },
    {
        label:"contactus",
        type:"link",
        url:"/contactus"
    },
    {
        label:"conference",
        type:"menu",
        submenu:[
            {
                label: "program details",
                url: "/programdetails"
            },
            {
                label:' Travel / Accomodation',
                url:"/travel-accomodation"
            }
        ]
    }
];
