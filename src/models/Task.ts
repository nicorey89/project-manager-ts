import mongoose from 'mongoose'; 
 
var taskSchema = new mongoose.Schema({ 
    name:{ 
        type:String, 
        required:true, 
        trim : true, 
    }, 
    description:{ 
        type:String, 
        required:true, 
        trim:true, 
    }, 
    state:{ 
        type:Boolean, 
        default:false, 
    }, 
    dateExpire:{ 
        type:Date, 
        required:true, 
        default : Date.now() 
    }, 
    priority : { 
        type : String, 
        required:true, 
        enum : ['Baja','Media','Alta'], //opciones cerradas 
    }, 
    project : { 
        type:mongoose.Schema.Types.ObjectId, 
        ref: 'Project', 
    } 
},{ 
    timestamps : true 
}); 
 
export = mongoose.model('Task', taskSchema); 
