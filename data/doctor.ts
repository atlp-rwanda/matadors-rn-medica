interface ReviewData{
    
    id:string,
    names: string,
    comment: string,
    likes: string

}

interface DoctorData{
id: string
name: string,
specialization: string,
hospital: string, 
reviews: ReviewData[]
about: string,
appointmentStatus: "upcoming" | "cancelled" | "completed"
bookingMethod: "Messaging" | "Voice call" | "Video call"
}


const doctor: DoctorData[] = [
{
    id: "1",
    name: "Dr. Raul Zirkind",
    specialization: "Immunologist",
    hospital: "king faisal", 
    reviews: [
        {   id: "1",
            names: " Darron Kulikowski",
            comment: " The doctor is very beautiful and the service is excellent! I like it and want to consult again 🤣🤣",
            likes: "33",
        },
        {   id: "2",
            names: " Darron Kulikowski",
            comment: " The doctor is very beautiful and the service is excellent! I like it and want to consult again 🤣🤣",
            likes: "33",
        }
    ],
    about: "Dr. Jenny Watson is the top most Immunologists specialist in Christ Hospital at London. She achived several awards for her wonderful contribution in medical field. She is available for private consultation. view more",
    appointmentStatus: "cancelled",
    bookingMethod:"Messaging"

}
]