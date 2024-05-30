import Image from "next/image";

import ButtonSocialMedia from "@/components/ui/button-social.media";
import { information } from "@/assets/data";
import Container from "@/components/ui/container";


const HeroSection= () => {
	return(
        <section id="home" className="border-b border-gray-400/30 py-10">
            <Container>
              <div className="space-y-10">
                <div className="relative w-24 h-24">
                    <Image 
                        src='/imagenes/Leysi.jpeg'
                        alt="Image" 
                        fill
                        className="object-cover rounded-xl grayscale-50"
                    />
                </div>
                <div  className="max-w-3xl">
                    <h1 className='text-3xl text-white'>
                        {`¡Hola! Soy Leysi y quiero convertirme en programadora Frontend`}
                    </h1>
                    <p className="rext-gray-500">
                        Soy estudiante de Ingeniería en Sistemas con gusto por el desarrollo de software y diseño de interfaces, aprendiendo continuamente, aplico mis conocimientos a los diferentes proyectos.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    {information.socialMedia.map((social) => (
                        <ButtonSocialMedia
                            key={social.href}  
                            href={social.href} 
                            icon={social.icon}
                        />
                    ))}
                </div>
                <div>
                    <h1 className="text-base">Contacto:</h1>
                    <h3>gmail: lucilaajpuac@gmail.com</h3>
                    <h3>telefono: 41216374</h3>

                </div>             
              </div>
            </Container>
        
      </section>
    );
}
export default HeroSection;