const mongoose = require('mongoose');

const ServiceSchema = mongoose.Schema({
    shortDescription:{
        icon: String,
        name:String,
        briefDesc:String,

    },
    longDescription:{
        page1:{
            heading:String,
            shortDesc:String,
            btnCTA:String,
            bannerImg:String,
            textBeforeIcons:String,
            icons:[String]
        },
        page2:{
            heading:String,
            para:String,
            bannerImg:String,
                        
        },
        page3:{
            heading:String,
            para:String,
            bannerImg:String,
                        
        },
        page4:{
            heading:String,
            para:String,
            bannerImg:String,
                        
        },
        page5:{
            heading:String,
            para:String,
            bannerImg:String,
                        
        },
        page6:{
            heading:String,
            data:[Object],
                        
        },
        page7:{
            heading:String,
            card:[{
                title:String,
                desc:String,
                images:[String]
            }],
            
                        
        },

    }
});

module.exports = mongoose.model('Services', ServiceSchema)