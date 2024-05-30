import Badge from '@/components/ui/badge';
import Container from '@/components/ui/container';
import Title from '@/components/ui/title';
import Image from 'next/image';

const PrimerBlog = () => {
  return (
    <main className='py-10 border-b border-gray-500/30'>
      <Container>
        <Badge label='Tecnología' className='text-primary' />
        <Title
          title='Tecnología'
          className='mt-0 mb-10'
        />
        <article className='space-y-10'>
          <div className='relative w-full h-[500px] rounded-xl'>
            <Image
              src='https://img.freepik.com/free-photo/rpa-concept-with-blurry-hand-touching-screen_23-2149311914.jpg?t=st=1717055120~exp=1717058720~hmac=e101f30b2ed9a2de7f6d27602438a161d1f86d3d9679d7380bc25ea9e1d8baff&w=826'
              alt='Image'
              fill
              className='object-cover rounded-xl'
            />
          </div>
          <p className='text-gray-400'>
          Cuando hablamos de tecnología podemos llegar a limitarnos en cuanto a temas, y áreas pero este ha llegado a hacer un pilar fundamental en la evolución del ser humano, si lo analizamos no hay manera que evolucionar de manera tan exponencial sin la tecnología ya que desde tiempos antiguos se ha sufrido por la falta de ella, aunque ellos no lo vean como un sufrimiento, tenían carencias, carencias que de cierta manera limitaba la manera en ver las cosas, en estos tiempos se sigue avanzando con nuevos descubrimientos al paso del tiempo y siempre surgen nuevas tendencias y con ello la tecnologia se mueve en esa marcha, por lo que queda en nosotros avanzar y aprovechar las oportunidades que se han abierto gracias a los descubrimientos tecnológicos, matemáticos, físico y más.

          Cuando vemos hacia el futuro, es probable que la tecnología continúe evolucionando a un ritmo acelerado debido a las nuevas tendencias e innovaciones como lo hemos mencionado antes, las diferentes necesidades de las personas, como la inteligencia artificial y el aprendizaje automático deben y están en constante actualización y cambios adecuándose a cualquier escenario en el que el usuario necesite una solución, estas tecnologías tienen el potencial de revolucionar diferentes campos como  en la medicina, la educación, el transporte y la manufactura, realizando avances que hoy en día nos es de mucha ayuda.
          </p>
          <h3 className='text-white text-2xl'>Al futuro con la tecnología</h3>
          <p className='text-gray-400'>
            Aunque la tecnologia ha ayudado al ser humano es cierto que las personas 
            se han aprovechado de ellos introduciendo a niños al mundo de la tecnología 
            digital el cual a lo largo del tiempo crea una dependencia hacia ella, es por
            eso que podemos ver a niños con teléfonos celulares, tablets para la hora de
            la comida, o pantallas para cuando las madres no quieren entretener a sus 
            hijos, podria verse como una salida fácil, ponerle una pantalla a tu hijo
            para que no moleste o para que se coma toda su comida, pero no vemos los
            contras que esto contrae, como por ejemplo, es muy común ver a niños 
            haciendo berrinches en la calle solo por el simple hecho de que su mamá 
            tuvo que contestar una llamada y quitarle el celular por unos momentos,
            o pelear hasta que se le ofrezca una pantalla para que finalmente deje
            de molestar o simplemente para que coma, ahora el hecho de que estemos
            avanzando en la tecnología no significa que todos podrán aprovecharlo
            en todo su potencial, ya que la madres de los niños no sabrá todo el
            potencial que tiene un dispositivo digital con el cual se podrían: 
            aprender idiomas, estudiar matemáticas, aprender programación,
            aprender de otras culturas o paises, las personas quedan plasmadas 
            en una pequeña parte la cual debe ser entretenida para ellas  y lo 
            unico que logran es: dañar su vista y desperdiciar tiempo, así que 
            podria concluir que la tecnologia no es para todos y no es para 
            todas las edades. 
          
          </p>
        </article>
      </Container>
    </main>
  );
};

export default PrimerBlog;