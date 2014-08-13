// The in-memory Store. Encapsulates logic to access pet data.
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
            vaccinated : "true",
            details: "This little dog need your care",
            DefaultPicture: "Mati.jpg",
            Gallery : ["Mati1.jpg", "Mati2.jpg", "Mati3.jpg"]
        };
        this.pets[2] = {
            id: 2,
            name: "Pet2",
            gender: "Female",
            year: "2006",
            type: "dog",
            country: "Spain",
            vaccinated : "true",
            region: "Rioja",
            details: "This little dog need your care",
            DefaultPicture: "philip1.jpg"
        };
        this.pets[3] = {
            id: 3,
            name: "Pet3",
            year: "2010",
            type: "dog",
            country: "USA",
            vaccinated : "true",
            region: "California Central Cosat",
            details: "This little dog need your care",
            DefaultPicture: "jackie1.jpg"
        };
        this.pets[4] = {
            id: 4,
            name: "Juanito",
            year: "2009",
            type: "cat",
            country: "USA",
            region: "Washington",
            vaccinated : "true",
            details: "This little dog need your care",
            DefaultPicture: "juanito1.jpg"
        };
        this.pets[5] = {
            id: 5,
            name: "Josep",
            year: "2009",
            gender: "Female",
            age: "1",
            type: "cat",
            country: "USA",
            region: "Oregon",
            vaccinated : "true",
            details: "This little dog need your care",
            DefaultPicture: "josep.jpg",
            Gallery : ["Josep1.jpg", "Josep2.jpg", "Josep3.jpg"]
        };
        this.pets[6] = {
            id: 6,
            name: "Pet6",
            year: "2007",
            type: "dog",
            country: "Italy",
            region: "Tuscany",
            details: "This little dog need your care",
            DefaultPicture: "jackie1.jpg"
        };
        this.pets[7] = {
            id: 7,
            name: "Pet7",
            year: "2005",
            type: "dog",
            country: "France",
            region: "Bordeaux",
            details: "This little dog need your care",
            DefaultPicture: "jackie1.jpg"
        };
        this.pets[8] = {
            id: 8,
            name: "Pet8",
            year: "2009",
            type: "dog",
            country: "France",
            region: "Bordeaux",
            details: "This little dog need your care",
            DefaultPicture: "jackie1.jpg"
        };
        this.pets[9] = {
            id: 9,
            name: "Pet9",
            year: "2009",
            type: "dog",
            country: "USA",
            region: "California",
            details: "This little dog need your care",
            DefaultPicture: "jackie1.jpg"
        };
        this.pets[10] = {
            id: 10,
            name: "Pet10",
            year: "2007",
            type: "cat",
            country: "USA",
            region: "Oregon",
            details: "This little dog need your care",
            DefaultPicture: "jackie1.jpg"
        };
        this.pets[11] = {
            id: 11,
            name: "Pet11",
            year: "2011",
            type: "cat",
            country: "Argentina",
            region: "Mendoza",
            details: "This little dog need your care",
            DefaultPicture: "jackie1.jpg"
        };
        this.pets[12] = {
            id: 12,
            name: "Pet12",
            year: "2009",
            type: "cat",
            country: "France",
            region: "Burgundy",
            details: "This little dog need your care",
            DefaultPicture: "jackie1.jpg"
        };
        this.pets[13] = {
            id: 13,
            name: "Pet13",
            year: "2009",
            type: "cat",
            country: "Italy",
            region: "Tuscany",
            details: "This little dog need your care",
            DefaultPicture: "jackie1.jpg"
        };
        this.pets[14] = {
            id: 14,
            name: "Pet14",
            year: "2008",
            type: "cat",
            country: "Spain",
            region: "Rioja",
            details: "This little dog need your care",
            DefaultPicture: "jackie1.jpg"
        };
        this.pets[15] = {
            id: 15,
            name: "Pet15",
            year: "2009",
            type: "cat",
            country: "Spain",
            region: "Castilla y Leon",
            details: "This little dog need your care",
            DefaultPicture: "jackie1.jpg"
        };

        this.lastId = 15;
    },

    find: function (model) {
        return this.pets[model.id];
    },

    findAll: function () {
        return _.values(this.pets);
    }
};

datacollector.populate();

Backbone.sync = function (method, model, options) {

    var resp;

    switch (method) {
        case "read":
            resp = model.id ? datacollector.find(model) : datacollector.findAll();
            break;
        case "create":
            resp = datacollector.create(model);
            break;
    }

    if (resp) {
        options.success(resp);
    } else {
        options.error("Record not found");
    }
};