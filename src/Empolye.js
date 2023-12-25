const Employe=(props)=>{
    return(
        <>
    <div id="box">
            
            <h3>Emp ID : {props.empid}</h3>
            <h3>Name : {props.name}</h3>
            <h3>Desigination : {props.desig}</h3>
            <h3>Department : {props.dept}</h3>
            <h3>basic Salary : {props.bsal}</h3>
            <h4>{props.thr}</h4>
            </div>
        
        </>
    );
};
export default Employe;