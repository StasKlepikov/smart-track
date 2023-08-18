import { Allert } from "../../../../../services/typedef";


export const DoctorMicroAllert = ({ allert }: {allert: Allert}) => {
    return (
        <div
            style={{
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                    background: allert.color,
                    cursor: "pointer"
                }}
            title={ allert.name }>
        </div>
    );
 };