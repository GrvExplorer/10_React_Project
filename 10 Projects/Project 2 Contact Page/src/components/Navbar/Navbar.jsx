import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <nav className={`${styles.navBar} `}>
        <div className={styles.logo}>
          <img src="/images/logo.png" className={styles.logo_img} />
        </div>
        <ul className={styles.direction}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
