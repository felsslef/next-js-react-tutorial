import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function QuemSomos(){ /*diferente de uma função comum o componente tem a primeira letra maiuscula, isso é oq diferencia ele de uma função*/
  return (
    <div>
      <Header/>
      <h1> Quem somos</h1>
      <Footer/>
    </div>
  )
}