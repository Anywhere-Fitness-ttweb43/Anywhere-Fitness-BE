import * as yup from 'yup'

const searchSchema = {
    time: yup.object().shape({
        TimeSearch: yup.number('enter a number')
            .required('time is required (number)')
    }),
    date: yup.object().shape({
        DateSearch: yup.date()
            .required('date is required (date)')
    }),
    duration: yup.object().shape({
        DurationSearch: yup.number()
            .required('duration is required (number)')
    }),
    types: yup.object().shape({
        TypeSearch: yup.string()
            .required('type is required')
    }),
    intensity: yup.object().shape({
        IntensitySearch: yup.string()
            .required('intensity is required')
    }), 
    location: yup.object().shape({  
        LocationSearch: yup.string()
            .required('location is required')
    }),
}

export default searchSchema