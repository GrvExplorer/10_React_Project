import styles from './MyBalance.module.css'
import circle from '../assets/circle.svg'


const MyBalance = () => {
  return (
    <div className={`${styles.layout}`} >
        <div>
        <p className={styles.resize1}>My balance</p>
        <p className={styles.resize2}>$921.48</p>
        </div>
        <div>
            <img src={circle} alt="" />
        </div>
    </div>
  )
}

export default MyBalance

