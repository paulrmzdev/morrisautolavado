import './App.css'
import Button from './components/Button'

function App() {
const waNumber="3171287484";
  return (
    <>
    <img className="logo" src="/MorrisLogoMin.png" alt="logo" />
    <h1><a href="https://facebook.com/morrisautolavado">@MorrisAutolavado</a></h1>
      <div className='container'>
        <Button name="Facebook" icon="https://img.icons8.com/ios-filled/150/ffffff/facebook-new.png" alt="facebook" enlace="https://facebook.com/morrisautolavado"></Button>
        <Button name="Whatsapp" icon="https://img.icons8.com/ios-filled/48/ffffff/whatsapp--v1.png" alt="whatsapp" enlace={"https://api.whatsapp.com/send?phone="+waNumber+"&text=Hola, me interesan sus servicios"}></Button>
        <Button name="Instagram" icon="https://img.icons8.com/ios-filled/50/ffffff/instagram-new--v1.png" alt="instagram" enlace="https://www.instagram.com/morrisautolavado/"></Button>
        <Button name="Llamar" icon="https://img.icons8.com/ios-filled/50/ffffff/phone-disconnected.png" alt="llamar" enlace={"tel:"+waNumber}></Button>
        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.2973157824513!2d-104.26477692520432!3d19.953994923824418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8425b3fd2dacc533%3A0x86e29b8eba7ca9d9!2sMorris%20Autolavado!5e0!3m2!1ses-419!2smx!4v1705877825680!5m2!1ses-419!2smx" width="90%" height="300px" style={{border:0, borderRadius: 10}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>  
        <div className="footer" style={{marginTop: 30,marginBottom:30}}>
          <a style={{fontSize: 15,color: "#bbbb"}} href="http://paulrmz.dev" target="_blank" rel="noopener noreferrer">© 2024 PaulRmz<span style={{color: "#9999"}}>, All Right Reserved.</span></a>
        </div>
      </div>
    </>
  )
}

export default App
