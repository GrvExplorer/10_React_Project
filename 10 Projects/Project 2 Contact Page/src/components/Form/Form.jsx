import styles from "./Form.module.css";
// import { MdMessage } from 'react-icons/md'

function Form() {

  const email = (event) => {
    event.preventDefault()
    console.log("by email btn")
  }
  
  return (
    <>
      <form className={styles.formEl}>
        <div>
          <div className={styles.features}>
            <button className={styles.button}>
              <img src="/images/Vector.png" />
              VIA SUPPORT CHAT
            </button>
            <button className={styles.button}>
              <img src="/images/ic_baseline-phone.png" />
              VIA CALL
            </button>
          </div>
          <button className={`${styles.button} ${styles.emailBtn}`} onClick={email}>
            <img src="/images/ic_outline-message.png" />
            VIA EMAIL FORM
          </button>
          <div className={styles.emailForm}>
            <lable htmlFor="name" className={styles.lables}>
              Name
            </lable>
            <input type="text" name="name"></input>
            <lable htmlFor="E-mail" className={styles.lables}>
              E-mail
            </lable>
            <input type="email" name="E-mail"></input>
            <lable htmlFor="text" className={styles.lables}>
              Text
            </lable>
            <textarea name="text" className={styles.text} rows='8'></textarea>
            <div className={styles.end}>
              <button className={`${styles.button} ${styles.submitBtn}`}>Submit</button>
            </div>
          </div>
        </div>
        <div className={styles.serviceImg}>
          <img src="/images/Service 24_7-pana 1.png"></img>
        </div>
      </form>
    </>
  );
}

export default Form;
