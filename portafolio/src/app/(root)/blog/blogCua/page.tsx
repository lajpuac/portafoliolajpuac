import Badge from '@/components/ui/badge';
import Container from '@/components/ui/container';
import Title from '@/components/ui/title';
import Image from 'next/image';

const SegundoBlog = () => {
  return (
    <main className='py-10 border-b border-gray-500/30'>
      <Container>
        <Badge label='Trabajo en equipo en Proyectos' className='text-primary' />
        <Title
          title='Trabajo en equipo en Proyectos'
          className='mt-0 mb-10'
        />
        <article className='space-y-10'>
          <div className='relative w-full h-[500px] rounded-xl'>
            <Image
              src='https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169847.jpg?t=st=1717056145~exp=1717059745~hmac=8dc2b94b35b23fcedcf88a70bb45eb565cd10bec0c8ed607826df2d84faed458&w=740'
              alt='Image'
              fill
              className='object-cover rounded-xl'
            />
          </div>
          <p className='text-gray-400'>

            Bueno, aquí estamos, en un mundo que ha sido sacudido por una pandemia global que ha cambiado radicalmente la forma en que trabajamos. Antes de 2020, el trabajo remoto era visto como una rareza, una opción reservada para unos pocos privilegiados. Pero todo eso ha cambiado, y ahora el trabajo remoto se ha convertido en la norma para millones de personas en todo el mundo.
            ¿Y qué nos depara el futuro? Pues, quiero pensar que  el trabajo remoto está aquí para quedarse. Es como si la pandemia hubiera acelerado un proceso que ya estaba en marcha, empujando a las empresas y a los trabajadores a adaptarse a una nueva realidad laboral.
            En un futuro, ya no tendremos que levantarte temprano, vestirte formal y atascarte en el tráfico durante horas para llegar a la oficina. En su lugar, podrás despertarte con calma, preparar un buen café y empezar a trabajar en tu pijama cómodo desde la comodidad de tu hogar. Suena a que es el sueño para todos aquellos que ya no disfrutan salir de sus casas.
            Pero el trabajo remoto no se trata solo de comodidad. También ofrece una mayor flexibilidad y un mejor equilibrio entre la vida laboral y personal. Ya no tendrás que elegir entre tu carrera y tus responsabilidades familiares. Podrás participar en las actividades de tus hijos, cuidar de tus seres queridos o simplemente disfrutar de un poco más de tiempo libre sin sentirte culpable.
            Claro, también hay algunos desafíos que vienen con el trabajo remoto. Por ejemplo, puede ser más difícil mantener la motivación y la productividad cuando no estás rodeado de tus compañeros de trabajo. Y la línea entre el trabajo y la vida personal puede volverse borrosa, lo que puede llevar a un agotamiento laboral.
            Pero las empresas y los trabajadores se están adaptando rápidamente a estos desafíos. Se están desarrollando nuevas herramientas y estrategias para fomentar la colaboración y la comunicación a distancia. Y los trabajadores están aprendiendo a establecer límites saludables entre el trabajo y la vida personal.
            Además, el trabajo remoto también ofrece oportunidades emocionantes. Ahora, los trabajadores pueden buscar trabajos en todo el mundo, sin estar limitados por su ubicación geográfica. Y las empresas pueden acceder a un grupo de talento mucho más amplio, sin tener que preocuparse por las barreras físicas.
            Imagina poder trabajar desde una playa en las Bahamas o desde una cabaña en las montañas. O tal vez puedas unirte a un equipo de todo el mundo y aprender de personas con diferentes perspectivas y experiencias. El futuro del trabajo remoto es realmente emocionante.
            Claro, no todo será color de rosa. Habrá desafíos que superar y cambios que adaptarse. Pero estoy convencido de que el trabajo remoto seguirá creciendo y evolucionando, convirtiéndose en una parte integral de la forma en que trabajamos.
            Así que, debemos de estar preparados para un futuro en el que podamos trabajar desde donde estemos, a tatos diferentes ritmo, y con un mejor equilibrio entre tu vida laboral y personal. Porque el futuro del trabajo remoto es brillante, y está aquí para quedarse.

          </p>
 
        </article>
      </Container>
    </main>
  );
};

export default SegundoBlog;