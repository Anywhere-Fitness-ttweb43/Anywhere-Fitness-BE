import * as yup from "yup";

const classSchema = yup.object().shape({

    name: yup.string()
        .required("Name is a required field")
        .min(2, "Minimum of 2 Characters for the Name"),

    sTime: yup.number()
        .required("Start Time is a required field"), 

    duration: yup.number()
        .required("Duration is a required field"),

    date: yup.date()
        .required("Date is a required field")
        .test("is-one-week","Date needs to be set a week in advance",(date)=>{
            const cutoff = new Date()
            cutoff.setDate(cutoff.getDate()+6)
            return cutoff <= date 
        }),

    type: yup.string()
        .required("Type is a required field"), 

    intensity: yup.string()
        .required("Intensity is a required field"),

    location: yup.string()
        .required("Location is a required field"),

})


export default classSchema;