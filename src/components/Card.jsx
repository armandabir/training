import styles from"./style/card.module.scss"
import logo from "./../assets/react.svg"
export default function Card(){
    return (
        <div className={styles.cardContainer}>
            <img src={logo} className={styles.cardImage} alt="" />
            <button className={styles.cardBtn}>افزودن به سبد خرید</button>

        </div>

    )
}