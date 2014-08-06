// The in-memory Store. Encapsulates logic to access wine data.
window.datacollector = {

    pets: {},

    populate: function () {

        this.pets[1] = {
            id: 1,
            name: "Mati",
            gender: "Male",
            age: "1",
            size: "small",
            activity: "normal",
            type: "dog",
            country: "USA",
            region: "California",
            details: "This little dog need your care",
            DefaultPicture: "jackie.jpg"
            //DefaultPictureGallery : ["lan_rioja.jpg", "lan_rioja.jpg", "lan_rioja.jpg"]
        };
        this.pets[2] = {
            id: 2,
            name: "Pet2",
            year: "2006",
            grapes: "Tempranillo",
            country: "Spain",
            region: "Rioja",
            description: "A resurgence of interest in boutique vineyards has opened the door for this excellent foray into the dessert wine market. Light and bouncy, with a hint of black truffle, this wine will not fail to tickle the taste buds.",
            DefaultPicture: "jackie.jpg"
        };
        this.pets[3] = {
            id: 3,
            name: "Pet3",
            year: "2010",
            grapes: "Sauvignon Blanc",
            country: "USA",
            region: "California Central Cosat",
            description: "The cache of a fine Cabernet in ones wine cellar can now be replaced with a childishly playful wine bubbling over with tempting tastes of black cherry and licorice. This is a taste sure to transport you back in time.",
            DefaultPicture: "jackie.jpg"
        };
        this.pets[4] = {
            id: 4,
            name: "OWEN ROE \"EX UMBRIS\"",
            year: "2009",
            grapes: "Syrah",
            country: "USA",
            region: "Washington",
            description: "A one-two punch of black pepper and jalapeno will send your senses reeling, as the orange essence snaps you back to reality. Don't miss this award-winning taste sensation.",
            DefaultPicture: "jackie.jpg"
        };
        this.pets[5] = {
            id: 5,
            name: "REX HILL",
            year: "2009",
            grapes: "Pinot Noir",
            country: "USA",
            region: "Oregon",
            description: "One cannot doubt that this will be the wine served at the Hollywood award shows, because it has undeniable star power. Be the first to catch the debut that everyone will be talking about tomorrow.",
            DefaultPicture: "jackie.jpg"
        };
        this.pets[6] = {
            id: 6,
            name: "VITICCIO CLASSICO RISERVA",
            year: "2007",
            grapes: "Sangiovese Merlot",
            country: "Italy",
            region: "Tuscany",
            description: "Though soft and rounded in texture, the body of this wine is full and rich and oh-so-appealing. This delivery is even more impressive when one takes note of the tender tannins that leave the taste buds wholly satisfied.",
            DefaultPicture: "jackie.jpg"
        };
        this.pets[7] = {
            id: 7,
            name: "CHATEAU LE DOYENNE",
            year: "2005",
            grapes: "Merlot",
            country: "France",
            region: "Bordeaux",
            description: "Though dense and chewy, this wine does not overpower with its finely balanced depth and structure. It is a truly luxurious experience for the senses.",
            DefaultPicture: "jackie.jpg"
        };
        this.pets[8] = {
            id: 8,
            name: "DOMAINE DU BOUSCAT",
            year: "2009",
            grapes: "Merlot",
            country: "France",
            region: "Bordeaux",
            description: "The light golden color of this wine belies the bright flavor it holds. A true summer wine, it begs for a picnic lunch in a sun-soaked vineyard.",
            DefaultPicture: "jackie.jpg"
        };
        this.pets[9] = {
            id: 9,
            name: "BLOCK NINE",
            year: "2009",
            grapes: "Pinot Noir",
            country: "USA",
            region: "California",
            description: "With hints of ginger and spice, this wine makes an excellent complement to light appetizer and dessert fare for a holiday gathering.",
            DefaultPicture: "jackie.jpg"
        };
        this.pets[10] = {
            id: 10,
            name: "DOMAINE SERENE",
            year: "2007",
            grapes: "Pinot Noir",
            country: "USA",
            region: "Oregon",
            description: "Though subtle in its complexities, this wine is sure to please a wide range of enthusiasts. Notes of pomegranate will delight as the nutty finish completes the DefaultPicture of a fine sipping experience.",
            DefaultPicture: "jackie.jpg"
        };
        this.pets[11] = {
            id: 11,
            name: "BODEGA LURTON",
            year: "2011",
            grapes: "Pinot Gris",
            country: "Argentina",
            region: "Mendoza",
            description: "Solid notes of black currant blended with a light citrus make this wine an easy pour for varied palates.",
            DefaultPicture: "jackie.jpg"
        };
        this.pets[12] = {
            id: 12,
            name: "LES MORIZOTTES",
            year: "2009",
            grapes: "Chardonnay",
            country: "France",
            region: "Burgundy",
            description: "Breaking the mold of the classics, this offering will surprise and undoubtedly get tongues wagging with the hints of coffee and tobacco in perfect alignment with more traditional notes. Sure to please the late-night crowd with the slight jolt of adrenaline it brings.",
            DefaultPicture: "jackie.jpg"
        };
        this.pets[13] = {
            id: 13,
            name: "ARGIANO NON CONFUNDITUR",
            year: "2009",
            grapes: "Cabernet Sauvignon",
            country: "Italy",
            region: "Tuscany",
            description: "Like a symphony, this cabernet has a wide range of notes that will delight the taste buds and linger in the mind.",
            DefaultPicture: "jackie.jpg"
        };
        this.pets[14] = {
            id: 14,
            name: "DINASTIA VIVANCO ",
            year: "2008",
            grapes: "Tempranillo",
            country: "Spain",
            region: "Rioja",
            description: "Whether enjoying a fine cigar or a nicotine patch, don't pass up a taste of this hearty Rioja, both smooth and robust.",
            DefaultPicture: "jackie.jpg"
        };
        this.pets[15] = {
            id: 15,
            name: "PETALOS BIERZO",
            year: "2009",
            grapes: "Mencia",
            country: "Spain",
            region: "Castilla y Leon",
            description: "For the first time, a blend of grapes from two different regions have been combined in an outrageous explosion of flavor that cannot be missed.",
            DefaultPicture: "jackie.jpg"
        };
        this.pets[16] = {
            id: 16,
            name: "SHAFER RED SHOULDER RANCH",
            year: "2009",
            grapes: "Chardonnay",
            country: "USA",
            region: "California",
            description: "Keep an eye out for this winery in coming years, as their chardonnays have reached the peak of perfection.",
            DefaultPicture: "jackie.jpg"
        };
        this.pets[17] = {
            id: 17,
            name: "PONZI",
            year: "2010",
            grapes: "Pinot Gris",
            country: "USA",
            region: "Oregon",
            description: "For those who appreciate the simpler pleasures in life, this light pinot grigio will blend perfectly with a light meal or as an after dinner drink.",
            DefaultPicture: "jackie.jpg"
        };
        this.pets[18] = {
            id: 18,
            name: "HUGEL",
            year: "2010",
            grapes: "Pinot Gris",
            country: "France",
            region: "Alsace",
            description: "Fresh as new buds on a spring vine, this dewy offering is the finest of the new generation of pinot grigios.  Enjoy it with a friend and a crown of flowers for the ultimate wine tasting experience.",
            DefaultPicture: "jackie.jpg"
        };
        this.pets[19] = {
            id: 19,
            name: "FOUR VINES MAVERICK",
            year: "2011",
            grapes: "Zinfandel",
            country: "USA",
            region: "California",
            description: "o yourself a favor and have a bottle (or two) of this fine zinfandel on hand for your next romantic outing.  The only thing that can make this fine choice better is the company you share it with.",
            DefaultPicture: "jackie.jpg"
        };
        this.pets[20] = {
            id: 20,
            name: "QUIVIRA DRY CREEK VALLEY",
            year: "2009",
            grapes: "Zinfandel",
            country: "USA",
            region: "California",
            description: "Rarely do you find a zinfandel this oakey from the Sonoma region. The vintners have gone to extremes to duplicate the classic flavors that brought high praise in the early '90s.",
            DefaultPicture: "jackie.jpg"
        };
        this.pets[21] = {
            id: 21,
            name: "CALERA 35TH ANNIVERSARY",
            year: "2010",
            grapes: "Pinot Noir",
            country: "USA",
            region: "California",
            description: "Fruity and bouncy, with a hint of spice, this pinot noir is an excellent candidate for best newcomer from Napa this year.",
            DefaultPicture: "jackie.jpg"
        };
        this.pets[22] = {
            id: 22,
            name: "CHATEAU CARONNE STE GEMME",
            year: "2010",
            grapes: "Cabernet Sauvignon",
            country: "France",
            region: "Bordeaux",
            description: "Find a sommelier with a taste for chocolate and he's guaranteed to have this cabernet on his must-have list.",
            DefaultPicture: "jackie.jpg"
        };
        this.pets[23] = {
            id: 23,
            name: "MOMO MARLBOROUGH",
            year: "2010",
            grapes: "Sauvignon Blanc",
            country: "New Zealand",
            region: "South Island",
            description: "Best served chilled with melon or a nice salty prosciutto, this sauvignon blanc is a staple in every Italian kitchen, if not on their wine list.  Request the best, and you just may get it.",
            DefaultPicture: "jackie.jpg"
        };
        this.pets[24] = {
            id: 24,
            name: "WATERBROOK",
            year: "2009",
            grapes: "Merlot",
            country: "USA",
            region: "Washington",
            description: "Legend has it the gods didn't share their ambrosia with mere mortals.  This merlot may be the closest we've ever come to a taste of heaven.",
            DefaultPicture: "jackie.jpg"
        };

        this.lastId = 24;
    },

    find: function (model) {
        return this.pets[model.id];
    },

    findAll: function () {
        return _.values(this.pets);
    },

    create: function (model) {
        this.lastId++;
        model.set('id', this.lastId);
        this.pets[this.lastId] = model;
        return model;
    },

    update: function (model) {
        this.pets[model.id] = model;
        return model;
    },

    destroy: function (model) {
        delete this.pets[model.id];
        return model;
    }

};

datacollector.populate();

// Overriding Backbone's sync method. Replace the default RESTful services-based implementation
// with a simple in-memory approach.
Backbone.sync = function (method, model, options) {

    var resp;

    switch (method) {
        case "read":
            resp = model.id ? datacollector.find(model) : datacollector.findAll();
            break;
        case "create":
            resp = datacollector.create(model);
            break;
        case "update":
            resp = datacollector.update(model);
            break;
        case "delete":
            resp = datacollector.destroy(model);
            break;
    }

    if (resp) {
        options.success(resp);
    } else {
        options.error("Record not found");
    }
};