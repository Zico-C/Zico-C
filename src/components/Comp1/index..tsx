// import"./comp1.scss" //全局引入

// scss模組化引入
import styles from "./comp1.module.scss"

const Comp = () => {
    return(
        <div className={styles.box}>
            <p>這是Comp1裡面的內容</p>
        </div>
    )
}

export default Comp