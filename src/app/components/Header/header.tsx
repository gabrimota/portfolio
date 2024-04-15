import Image from "next/image"
import styles from"../Header/styles.module.scss"

export default function Header(){
return(
<>
<div className={styles.Header}>
    <div>
        <h1> Gabriel Bomfim Mota da Silva</h1>
        <h2> Programador Iniciante </h2>
    </div>

<Image
        src="/fotoPerfil.png"
        alt="Vercel Logo"
        width={325}
        height={310}
        priority
            />
</div>       
</>
)
}