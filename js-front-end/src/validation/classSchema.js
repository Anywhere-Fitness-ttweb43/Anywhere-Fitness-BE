import * as yup from "yup";

const classSchema = yup.object().shape({

    name: yup.string()
        .required("Name is a required field"),

    sTime: yup.number()
        .required("Start Time is a required field"), 

    duration: yup.number()
        .required("Duration is a required field"),

    date: yup.string()
        .required("Date is a required field")
        .matches("\d{2}/\d{2}/\d{4}"),

    type: yup.string()
        .required("Type is a required field"), 

    intensity: yup.string()
        .required("Intensity is a required field"),

    location: yup.string()
        .required("Location is a required field"),
        
    mSize: yup.number()
        .required("Max Class Size is a required field")
        .min(5,"Minimum Class Size is 5"),
    

})


export default classSchema;