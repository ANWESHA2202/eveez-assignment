import styles from "../../styles/openTickets.module.css";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




function tickets() {
    const data = [
        {
          name: 'NCR',
          no:68
        },
        {
          name: 'HYD',
          no: 40
        },
        {
          name: 'BLR',
          no:56
        },
        {
          name: 'BOK',
          no:19
        },
        {
          name: 'BOM',
          no:43
        },
        {
          name: 'KCL',
          no:32
        }
      ];
  return (
    <div className={styles.fleex}>
        <span className={styles.containers}>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={400}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: -25,
            bottom: 5,
          }}
        >
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="no" fill="#FF8267" />
          
        </BarChart>
      </ResponsiveContainer>
        </span>
        <span className={styles.containers}>
            <ul className={styles.ticketCount}>
                <li className={styles.count}>53</li>
                <li className={styles.text}>OPEN TICKETS</li>
            </ul>
        </span>
        <span className={styles.containers}></span>


    </div>
  )
}

export default tickets