import Image from "next/image"
import styles from "../../styles/Navbar.module.css"
function navbar() {
  return (
    <div className={styles.navbar}>
        <nav>
            <div className={styles.logo}>
                <Image src="/logo.png" width={113} height={42} />
                <span className={styles.icons1}><Image src="/profile.jpg" width={30} height={30}/></span>
                <span className={styles.icons2}><Image src="/bell.png" width={21} height={21}/></span>
            </div>
            
            <div>
              <ul className={styles.links}>
                <li>Vehicle</li>
                <li>Subscribers</li>
                <li>Service Requests</li>
                <li>Deallocations</li>
                <li>Service Records</li>
              </ul>
              <ul className={styles.sublinks}>
                <li>Service Requests - Open</li>
                <li>Service Requests - Closed</li>
                <li>Service Requests - All</li>
              </ul>
            </div>
        </nav>
    </div>
  )
}

export default navbar