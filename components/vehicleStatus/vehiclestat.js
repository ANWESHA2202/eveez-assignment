import styles from "../../styles/vehicleStatus.module.css"
import records from "./vehicle.json";
function vehiclestat() {
  return (
    <div>
        {records.map((item)=>{
            
            return(
                <div key={item.id} className={styles.vehicle}>
                    <div className={styles.title}>
                        <h3 className={styles.id}>{item.id}</h3>
                        {item.status=="To Do" && <button className={`${styles.status} ${styles.todo}`}>{item.status}</button>}
                        {item.status=="In Progress" && <button className={`${styles.status} ${styles.inp}`}>{item.status}</button>}
                        {item.status=="Done" && <button className={`${styles.status} ${styles.done}`}>{item.status}</button>}
                            
                    </div>
                    <div className={styles.data}>
                        <ul>
                            <li><b> VEHICLE NUMBER:</b><span style={{color:"#ff5733"}}>{item.number}</span> </li>
                            <li><b>TYPE:</b><span>{item.type}</span> </li>
                        </ul>
                        <ul>
                            <li><b>DATE:</b> <span>{item.date}</span></li>
                            <li><b>SUBSCRIBER NAME:</b> <span>{item.subscriber}</span></li>
                        </ul>
                        
                    </div>
                
                </div>
                
                
            );
            
        })};
    </div>
  )
}

export default vehiclestat;