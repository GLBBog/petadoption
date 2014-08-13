window.PetView = Backbone.View.extend({

    tagName: "div",
    className: "petDetails",

    initialize: function () {
        this.render();
        $('#HomePlaceHolder').hide();
    },

    render: function () {

        var pets = this.model.models;

        console.log('pets.length ' + pets.length);

        if (pets.length > 0) {
            console.log('this.model detail ' + pets[0].toJSON());
            $(this.el).html(this.template(pets[0].toJSON()));

            var cont = $(this.el);

            var PetGallery = pets[0].get("Gallery");
            
            if (PetGallery.length > 0) {
                for (var i = 0; i < PetGallery.length; i++) {
                    cont.find('.carousel-inner').append("<div class='item " + (i === 0 ? "active" : '') + "'><img src='pics/" + PetGallery[i] + "' width='750' height='400'></div>");
                }
            } else { this.$('.carousel').hide(); }
        }
        return this;
    },

    events: {
        "change": "change",
        "click .save": "beforeSave",
        "click .delete": "deletePet",
        "drop #picture": "dropHandler"
    },

    change: function (event) {
        // Remove any existing alert message
        utils.hideAlert();

        // Apply the change to the model
        var target = event.target;
        var change = {};
        change[target.name] = target.value;
        this.model.set(change);

        // Run validation rule (if any) on changed item
        var check = this.model.validateItem(target.id);
        if (check.isValid === false) {
            utils.addValidationError(target.id, check.message);
        } else {
            utils.removeValidationError(target.id);
        }
    },

    beforeSave: function () {
        var self = this;
        var check = this.model.validateAll();
        if (check.isValid === false) {
            utils.displayValidationErrors(check.messages);
            return false;
        }
        // Upload picture file if a new file was dropped in the drop area
        if (this.pictureFile) {
            this.model.set("picture", this.pictureFile.name);
            utils.uploadFile(this.pictureFile,
                function () {
                    self.savePet();
                }
            );
        } else {
            this.savePet();
        }
        return false;
    },

    savePet: function () {
        var self = this;
        this.model.save(null, {
            success: function (model) {
                self.render();
                app.navigate('pets/' + model.id, false);
                utils.showAlert('Success!', 'Wine saved successfully', 'alert-success');
            },
            error: function () {
                utils.showAlert('Error', 'An error occurred while trying to delete this item', 'alert-error');
            }
        });
    },

    deletePet: function () {
        this.model.destroy({
            success: function () {
                alert('Wine deleted successfully');
                window.history.back();
            }
        });
        return false;
    },

    dropHandler: function (event) {
        event.stopPropagation();
        event.preventDefault();
        var e = event.originalEvent;
        e.dataTransfer.dropEffect = 'copy';
        this.pictureFile = e.dataTransfer.files[0];

        // Read the image file from the local file system and display it in the img tag
        var reader = new FileReader();
        reader.onloadend = function () {
            $('#picture').attr('src', reader.result);
        };
        reader.readAsDataURL(this.pictureFile);
    }

});