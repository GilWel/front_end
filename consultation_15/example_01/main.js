const links = [
    {
        text: "Home",
        url: "/home",
        order: 1
    },
    {
        text: "About Us",
        url: "/about",
        order: 5
    },
    {
        text: "Services",
        url: "/services",
        order: 4
    },
    {
        text: "Contact",
        url: "/contact",
        order: 3
    },
    {
        text: "Blog",
        url: "/blog",
        order: 2
    }
];

console.log([...links].sort((a, b) => a.order - b.order));