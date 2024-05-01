const sampleListings = [
    {
        title: "Cozy Beachfront Cottage",
        description:
            "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
        image: {
            url: "https://res.cloudinary.com/dxuw4xhhf/image/upload/v1714560508/wanderlust_DEV/usdwhn1eumadhwsg98lw.jpg",
            filename: "wanderlust_DEV/usdwhn1eumadhwsg98lw",
        },
        price: 1500,
        location: "Malibu",
        country: "United States",
        contact: "99xxxxxxxxx",
        reviews: [],
        owner: {
            $oid: "6630b5304f6c5410ce0ebd97",
        },
        __v: 0,
        advance: null,
        category: "Trending",
        propertyType: "Open-for-both",
    },
    {
        title: "Modern Loft in Downtown",
        description:
            "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
        image: {
            url: "https://res.cloudinary.com/dxuw4xhhf/image/upload/v1714560530/wanderlust_DEV/kazkmjtogpuub9jtqqgm.jpg",
            filename: "wanderlust_DEV/kazkmjtogpuub9jtqqgm",
        },
        price: 1200,
        advance: 6000,
        location: "New York City",
        country: "United States",
        contact: "99xxxxxxxxx",
        reviews: [],
        owner: {
            $oid: "6630b5304f6c5410ce0ebd97",
        },
        __v: 0,
        category: "Trending",
        propertyType: "Sell",
    },
    {
        title: "Mountain Retreat",
        description:
            "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
        image: {
            url: "https://res.cloudinary.com/dxuw4xhhf/image/upload/v1714560554/wanderlust_DEV/uax1v6sqzq6y2wqcfr9a.jpg",
            filename: "wanderlust_DEV/uax1v6sqzq6y2wqcfr9a",
        },
        price: 1000,
        advance: 6000,
        location: "Aspen",
        country: "United States",
        contact: "99xxxxxxxxx",
        reviews: [],
        owner: {
            $oid: "6630b5304f6c5410ce0ebd97",
        },
        __v: 0,
        category: "Trending",
        propertyType: "Open-for-both",
    },
    {
        title: "Historic Villa in Tuscany",
        description:
            "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
        image: {
            url: "https://res.cloudinary.com/dxuw4xhhf/image/upload/v1714560576/wanderlust_DEV/nwhwpc4loija4l5hxpnd.jpg",
            filename: "wanderlust_DEV/nwhwpc4loija4l5hxpnd",
        },
        price: 2500,
        advance: 6000,
        location: "Florence",
        country: "Italy",
        contact: "99xxxxxxxxx",
        reviews: [],
        owner: {
            $oid: "6630b5304f6c5410ce0ebd97",
        },
        __v: 0,
        category: "Rentals",
        propertyType: "Sell",
    },
    {
        title: "Secluded Treehouse Getaway",
        description:
            "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
        image: {
            url: "https://res.cloudinary.com/dxuw4xhhf/image/upload/v1714560602/wanderlust_DEV/ozorgtt21mr5w7gv6bwb.jpg",
            filename: "wanderlust_DEV/ozorgtt21mr5w7gv6bwb",
        },
        price: 800,
        advance: 6000,
        location: "Portland",
        country: "United States",
        contact: "99xxxxxxxxx",
        reviews: [],
        owner: {
            $oid: "6630b5304f6c5410ce0ebd97",
        },
        __v: 0,
        category: "Trending",
        propertyType: "Sell",
    },
    {
        title: "Beachfront Paradise",
        description:
            "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
        image: {
            url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            filename: "listingimage",
        },
        price: 2000,
        advance: 6000,
        location: "Cancun",
        country: "Mexico",
        contact: "99xxxxxxxxx",
        reviews: [],
        owner: {
            $oid: "6630b5304f6c5410ce0ebd97",
        },
        __v: 0,
    },
    {
        title: "Rustic Cabin by the Lake",
        description:
            "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
        image: {
            url: "https://res.cloudinary.com/dxuw4xhhf/image/upload/v1714560633/wanderlust_DEV/kgpvielie3qvy19adopd.jpg",
            filename: "wanderlust_DEV/kgpvielie3qvy19adopd",
        },
        price: 900,
        advance: 6000,
        location: "Lake Tahoe",
        country: "United States",
        contact: "99xxxxxxxxx",
        reviews: [],
        owner: {
            $oid: "6630b5304f6c5410ce0ebd97",
        },
        __v: 0,
        category: "Premium",
        propertyType: "Sell",
    },
    {
        title: "Luxury Penthouse with City Views",
        description:
            "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
        image: {
            url: "https://res.cloudinary.com/dxuw4xhhf/image/upload/v1714560661/wanderlust_DEV/jkitrdvh890nnk7yfqs3.jpg",
            filename: "wanderlust_DEV/jkitrdvh890nnk7yfqs3",
        },
        price: 3500,
        advance: 6000,
        location: "Los Angeles",
        country: "United States",
        contact: "99xxxxxxxxx",
        reviews: [],
        owner: {
            $oid: "6630b5304f6c5410ce0ebd97",
        },
        __v: 0,
        category: "Trending",
        propertyType: "Sell",
    },
    {
        title: "Ski-In/Ski-Out Chalet",
        description:
            "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
        image: {
            url: "https://res.cloudinary.com/dxuw4xhhf/image/upload/v1714560706/wanderlust_DEV/y3frmgxcybw8dqw1ehjg.jpg",
            filename: "wanderlust_DEV/y3frmgxcybw8dqw1ehjg",
        },
        price: 3000,
        advance: 6000,
        location: "Verbier",
        country: "Switzerland",
        contact: "99xxxxxxxxx",
        reviews: [],
        owner: {
            $oid: "6630b5304f6c5410ce0ebd97",
        },
        __v: 0,
        category: "Trending",
        propertyType: "Sell",
    },
    {
        title: "Safari Lodge in the Serengeti",
        description:
            "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
        image: {
            url: "https://res.cloudinary.com/dxuw4xhhf/image/upload/v1714560728/wanderlust_DEV/ybgwecxwqnifxemtlzf0.jpg",
            filename: "wanderlust_DEV/ybgwecxwqnifxemtlzf0",
        },
        price: 4000,
        advance: 6000,
        location: "Serengeti National Park",
        country: "Tanzania",
        contact: "99xxxxxxxxx",
        reviews: [],
        owner: {
            $oid: "6630b5304f6c5410ce0ebd97",
        },
        __v: 0,
        category: "Trending",
        propertyType: "Sell",
    },
    {
        title: "Historic Canal House",
        description:
            "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
        image: {
            url: "https://res.cloudinary.com/dxuw4xhhf/image/upload/v1714560777/wanderlust_DEV/lllnj9p4miaonnllvc2o.jpg",
            filename: "wanderlust_DEV/lllnj9p4miaonnllvc2o",
        },
        price: 1800,
        advance: 6000,
        location: "Amsterdam",
        country: "Netherlands",
        contact: "99xxxxxxxxx",
        reviews: [],
        owner: {
            $oid: "6630b5304f6c5410ce0ebd97",
        },
        __v: 0,
        category: "Iconic-cities",
        propertyType: "Sell",
    },
    {
        title: "Private Island Retreat",
        description:
            "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
        image: {
            url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            filename: "listingimage",
        },
        price: 10000,
        advance: 6000,
        location: "Fiji",
        country: "Fiji",
        contact: "99xxxxxxxxx",
        reviews: [],
        owner: {
            $oid: "6630b5304f6c5410ce0ebd97",
        },
        __v: 0,
    },
    {
        title: "Charming Cottage in the Cotswolds",
        description:
            "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
        image: {
            url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            filename: "listingimage",
        },
        price: 1200,
        advance: 6000,
        location: "Cotswolds",
        country: "United Kingdom",
        contact: "99xxxxxxxxx",
        reviews: [],
        owner: {
            $oid: "6630b5304f6c5410ce0ebd97",
        },
        __v: 0,
    },
    {
        title: "Historic Brownstone in Boston",
        description:
            "Step back in time in this elegant historic brownstone located in the heart of Boston.",
        image: {
            url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "listingimage",
        },
        price: 2200,
        advance: 6000,
        location: "Boston",
        country: "United States",
        contact: "99xxxxxxxxx",
        reviews: [],
        owner: {
            $oid: "6630b5304f6c5410ce0ebd97",
        },
        __v: 0,
    },
    {
        title: "Beachfront Bungalow in Bali",
        description:
            "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
        image: {
            url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            filename: "listingimage",
        },
        price: 1800,
        advance: 6000,
        location: "Bali",
        country: "Indonesia",
        contact: "99xxxxxxxxx",
        reviews: [],
        owner: {
            $oid: "6630b5304f6c5410ce0ebd97",
        },
        __v: 0,
    },
    {
        title: "Mountain View Cabin in Banff",
        description:
            "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
        image: {
            url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "listingimage",
        },
        price: 1500,
        advance: 6000,
        location: "Banff",
        country: "Canada",
        contact: "99xxxxxxxxx",
        reviews: [],
        owner: {
            $oid: "6630b5304f6c5410ce0ebd97",
        },
        __v: 0,
    },
    {
        title: "Art Deco Apartment in Miami",
        description:
            "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
        image: {
            url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "listingimage",
        },
        price: 1600,
        advance: 6000,
        location: "Miami",
        country: "United States",
        contact: "99xxxxxxxxx",
        reviews: [],
        owner: {
            $oid: "6630b5304f6c5410ce0ebd97",
        },
        __v: 0,
    },
    {
        title: "Tropical Villa in Phuket",
        description:
            "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
        image: {
            url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "listingimage",
        },
        price: 3000,
        advance: 6000,
        location: "Phuket",
        country: "Thailand",
        contact: "99xxxxxxxxx",
        reviews: [],
        owner: {
            $oid: "6630b5304f6c5410ce0ebd97",
        },
        __v: 0,
    },
    {
        title: "Historic Castle in Scotland",
        description:
            "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
        image: {
            url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            filename: "listingimage",
        },
        price: 4000,
        advance: 6000,
        location: "Scottish Highlands",
        country: "United Kingdom",
        contact: "99xxxxxxxxx",
        reviews: [],
        owner: {
            $oid: "6630b5304f6c5410ce0ebd97",
        },
        __v: 0,
    },
    {
        title: "Desert Oasis in Dubai",
        description:
            "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
        image: {
            url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            filename: "listingimage",
        },
        price: 5000,
        advance: 6000,
        location: "Dubai",
        country: "United Arab Emirates",
        contact: "99xxxxxxxxx",
        reviews: [],
        owner: {
            $oid: "6630b5304f6c5410ce0ebd97",
        },
        __v: 0,
    },
    {
        title: "Rustic Log Cabin in Montana",
        description:
            "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
        image: {
            url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "listingimage",
        },
        price: 1100,
        advance: 6000,
        location: "Montana",
        country: "United States",
        contact: "99xxxxxxxxx",
        reviews: [],
        owner: {
            $oid: "6630b5304f6c5410ce0ebd97",
        },
        __v: 0,
    },
    {
        title: "Beachfront Villa in Greece",
        description:
            "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
        image: {
            url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            filename: "listingimage",
        },
        price: 2500,
        advance: 6000,
        location: "Mykonos",
        country: "Greece",
        contact: "99xxxxxxxxx",
        reviews: [],
        owner: {
            $oid: "6630b5304f6c5410ce0ebd97",
        },
        __v: 0,
    },
    {
        title: "Eco-Friendly Treehouse Retreat",
        description:
            "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
        image: {
            url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            filename: "listingimage",
        },
        price: 750,
        advance: 6000,
        location: "Costa Rica",
        country: "Costa Rica",
        contact: "99xxxxxxxxx",
        reviews: [],
        owner: {
            $oid: "6630b5304f6c5410ce0ebd97",
        },
        __v: 0,
    },
    {
        title: "Historic Cottage in Charleston",
        description:
            "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
        image: {
            url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "listingimage",
        },
        price: 1600,
        advance: 6000,
        location: "Charleston",
        country: "United States",
        contact: "99xxxxxxxxx",
        reviews: [],
        owner: {
            $oid: "6630b5304f6c5410ce0ebd97",
        },
        __v: 0,
    },
    {
        title: "Modern Apartment in Tokyo",
        description:
            "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
        image: {
            url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "listingimage",
        },
        price: 2000,
        advance: 6000,
        location: "Tokyo",
        country: "Japan",
        contact: "99xxxxxxxxx",
        reviews: [],
        owner: {
            $oid: "6630b5304f6c5410ce0ebd97",
        },
        __v: 0,
    },
    {
        title: "Lakefront Cabin in New Hampshire",
        description:
            "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
        image: {
            url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            filename: "listingimage",
        },
        price: 1200,
        advance: 6000,
        location: "New Hampshire",
        country: "United States",
        contact: "99xxxxxxxxx",
        reviews: [],
        owner: {
            $oid: "6630b5304f6c5410ce0ebd97",
        },
        __v: 0,
    },
    {
        title: "Luxury Villa in the Maldives",
        description:
            "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
        image: {
            url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            filename: "listingimage",
        },
        price: 6000,
        advance: 6000,
        location: "Maldives",
        country: "Maldives",
        contact: "99xxxxxxxxx",
        reviews: [],
        owner: {
            $oid: "6630b5304f6c5410ce0ebd97",
        },
        __v: 0,
    },
    {
        title: "Ski Chalet in Aspen",
        description:
            "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
        image: {
            url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            filename: "listingimage",
        },
        price: 4000,
        advance: 6000,
        location: "Aspen",
        country: "United States",
        contact: "99xxxxxxxxx",
        reviews: [],
        owner: {
            $oid: "6630b5304f6c5410ce0ebd97",
        },
        __v: 0,
    },
    {
        title: "Secluded Beach House in Costa Rica",
        description:
            "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
        image: {
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            filename: "listingimage",
        },
        price: 1800,
        advance: 6000,
        location: "Costa Rica",
        country: "Costa Rica",
        contact: "99xxxxxxxxx",
        reviews: [],
        owner: {
            $oid: "6630b5304f6c5410ce0ebd97",
        },
        __v: 0,
    },
];

module.exports = { data: sampleListings };
