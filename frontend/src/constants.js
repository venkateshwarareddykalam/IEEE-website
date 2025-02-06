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
                url: "/cbit"
            },
            {
                label: "Dept Of IT",
                url: "/dept-it"
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
            }
        ]
    }
    ,
    {
        label:"Register",
        type:"menu",
        url:"#"
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
