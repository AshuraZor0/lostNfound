import mongoose from "mongoose"
const itemSchema = mongoose.Schema(
    {
        item:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,

        },
        location:{
            type:String,
        },
        category:{
            type:Enumerator,
            required:true,
        },
        images:[{
            type:String,
            required:true,
        }],
        contactInfo:{
            type:String,
            required:true,
        },
        lostItem:{
            type:Boolean,
            default:false,  // tell whether item is lost (0) or found (1)
        }
    },
    {
        timestamps:true
    }
)