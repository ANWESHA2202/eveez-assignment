import styles from "../../styles/ServiceAll.module.css";
import Navbar from "../../components/navbar/navbar";
import Tickets from "../../components/openTickets/tickets";
import Vehicles from "../../components/vehicleStatus/vehiclestat";
import Image from "next/image";
function index() {
  return (
    <div className={styles.bg}>
      <Navbar />
      <div className={styles.heading}>
        <span>Service Requests- All</span>
        <button className={styles.addBtn}><center>+ Add New</center></button>
      </div>
      <div className={styles.tickets}>
        <Tickets/>
      </div>
      <div className={styles.vehicles}>
        <div className={styles.search}>
          <Image src="/search.png" width={30} height={30}/>
          <input type="text" placeholder="Search" className={styles.bar}/>
        </div>
        <div className={styles.vehiclesData}>
          <Vehicles/>
        </div>
        
      </div>
    </div>
  );
}

export default index;
