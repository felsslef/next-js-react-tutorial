import Footer from "@/components/Footer"
import Header from "@/components/Header"
import SideBar from "@/components/sideBar"

const nome = "Felipe Pastore"

export default function Home(){ /*diferente de uma função comum o componente tem a primeira letra maiuscula, isso é oq diferencia ele de uma função*/
  return (
    <div>
      <Header/>
      <div style ={styles.container}>
        <SideBar/>
        <h1> olá mundo React! Bem-vindo {nome}</h1>
      </div>
      <Footer/>
    </div>
  )
}

const styles = {
    container: {
      display: "flex",
      justifyContent: "row",
      height: "calc(100vh - 114px)"
  }
}