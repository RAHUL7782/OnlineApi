import { useState,useEffect } from "react";
import axios from "axios";
import Employe from "./Empolye";
const App=()=>{
    
    const [empData,setEmpData]=useState([]);
    const loadData=()=>{
        axios.get("http://34.198.81.140/attendance.json").then((res)=>{
            setEmpData(res.data);
        });
    };
    useEffect(()=>{
        loadData();
    },[]);
    const myData=empData.map((key)=>
    {
        if(key.total_hours>4&&key.total_hours<=8){
           return(
            <Employe empid={key.rec_id} name={key.name} desig={key.designation} dept={key.department} bsal={key.basic_salary} thr=<h3 style={{color: "white",background:"blue"}}>{"Half Time" }</h3>/> 
           );
        }
        else{
            return(
                <Employe empid={key.rec_id} name={key.name} desig={key.designation} dept={key.department} bsal={key.basic_salary} thr=<h3 style={{color: "red",background:"black"}}>{"Absent" }</h3>/> 
                
            );
            
        }
    });
    return(
        <>
        <h1>Employe Data</h1>
        {myData}

        </>
    );
};
export default App
