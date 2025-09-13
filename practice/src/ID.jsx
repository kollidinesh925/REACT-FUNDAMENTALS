function DINU({name,course,blood_group,roll_no,dob}){
    const agestyle={
        color:"green"
    }

    return(
<>
        <div class="DINU">
        <img src="./DINU.jpg" alt="DINU" class="image"></img>
            <h3 class="name1" >{name}</h3>
            <p><b>Course:</b> {course}</p>
            <p style={agestyle}><b>Roll No:</b> {roll_no}</p>
            <p><b>Blood Group:</b> {blood_group}</p>
            <p><b>DOB:</b> {dob}</p>
        </div>
</>
    )
}
export default DINU