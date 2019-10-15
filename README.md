# Registro de Visitantes

## Preámbulo

El registro de visitantes en una empresa en América Latina es un proceso tedioso
y manual. Lo común es que una persona esté en la recepción tomando nota - a
veces con papel y lápiz - de cada visitante. Por razones de seguridad,
usualmente piden a cada visitante dejar una identificación. Si vivimos en la era
digital, ¿por qué seguimos registrando visitantes como si fuera 1985? ¿Qué tal
si sustituimos a la persona en recepción por una tablet? ¿Qué tal si en lugar de
pedir una identificación, tomamos una foto?

## Introducción

En este proyecto una empresa de coworking en tu ciudad ha
decidido contratarte a ti para reinventar su proceso de
registro de visitantes.

Te dan la referencia de [Envoy](https://envoy.com/) en EEUU (un
servicio que ofrece un sistema digital de registro de visitantes) y tu
tienes que desarrollar una versión mínima viable (ver anexo I abajo).

## Objetivos de aprendizaje

El objetivo principal de este proyecto es que pongas en práctica todo lo
aprendido hasta ahora, con foco en la calidad.

## Consideraciones generales

Para completar este proyecto deberás seguir las siguientes consideraciones:

### 1. Planificación y organización

Planificación inicial

TIPS:

* Recuerda a nuestras BFFs, [las historias de usuario](http://jmbeas.es/guias/historias-de-usuario/)
* Ten siempre en mente evitar el desperdicio. Por ejemplo: ¿de qué sirve que
  tengas el prototipo del 100% de un proyecto en Figma (alta definición) si
  solamente implementas el 50% del proyecto? El otro 50% del prototipo se podría
  considerar como desperdicio.
* Limitar el trabajo en progreso. Solo tener una tarea en estado "doing".
* ¿Estás segura de que quieren seguir invirtiendo más minutos de tu vida (que no
  volverán) en discutir los colores del logotipo?
  [Aquí hay algo que te puede ayudar a decidir](https://play.google.com/store/apps/details?id=com.flip.war_daddy.flip_coin).

### 2. Detalles sobre la implementación

* La lógica del proyecto debe estar implementada completamente en JavaScript, HTML y CSS.
* Está permitido usar librerías o frameworks tanto de CSS como de JS, pero no es
  obligatorio. Elige bien las batallas que quieres luchar.
* En este proyecto, no contamos con un boilerplate, por lo que deberás definir
  la estructura de carpetas y archivos que consideres necesaria, puedes guiarte
  de los proyectos anteriores.
* Los tests y el setup necesario para ejecutarlos serán hechos enteramente por
  ti.
* Guardar la data de los visitantes de forma remota usando Firebase o MongoDB.

### 3. Tiempo

Tendrás 3 sprints para trabajar en este proyecto.

## Avances esperados

Los criterios mínimos de aceptación para considerar que has completado este
proyecto son:

### Diseño

1. Haber realizado y documentado al menos 3 entrevistas con usuarios diferentes.

### Implementación

Tu producto final debe estar desplegado en la web y, como mínimo, debe:

1. Permitir al usuario visitante registrarse con sus datos personales,
   incluyendo su foto.
2. Permitir al usuario visitante seleccionar a la persona a quien viene a
   visitar.
3. Permitir a la administradora agregar un horario de salida.
4. Permitir a la administradora agregar nuevo usuarios del coworking.
5. A la administradora le interesa tener un dashboard de "analíticas" de los
  visitantes: # de visitantes por día, horarios frecuentes de visita, a quién
  vienen a visitar, etc.
6. Notificar a la persona a quien vienen a visitar. Para esto te recomendamos
   revisar:
   * Los servicios de [Sendgrid](https://sendgrid.com/)
   * El [API de Mandrill](https://mandrillapp.com/docs/) para mandar correos de
     forma automática
   * El [API de notificaciones de HTML 5](https://developer.mozilla.org/en-US/docs/Web/API/notification)
7. Permitir al usuario administrador visualizar la data de los visitantes,
   incluyendo la fecha y hora de registro de cada uno
8. Los tests unitarios deben mostrar Coverage.

## Hacker edition

Features/características extra sugeridas:

* Como el WiFi a veces es nuestro peor enemigo, ¿es posible que tu aplicación
  pueda, sin Internet, registrar los datos del visitante, guardar los datos
  localmente y cuando tenga Internet mandarlos a la base de datos? Si te animas
  a hacer esto dale una revisada a los siguientes recursos:
  * [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/)
  * [Offline first manifesto](http://offlinefirst.org/)
* También sería ideal poder registrar la firma del visitante en el registro.
* Sería genial también permitir generar un "pase" para el visitante, así
  fácilmente a la vista se sabe quién está de visita.

## Anexo: Construyendo un MVP

Una modelo mental común para representar el desarrollo de productos es
visualizarlo como una pirámide: el producto que construyes consiste en una serie
de funcionalidades que le dan beneficios al usuario, los cuales le generan
valor. El detalles está en que no todas las funcionalidades que creas le agregan
la misma cantidad de valor al usuario. Es más, muchas funcionalidades le agregan
cero valor. Son cosas que creemos que generan valor, pero que no terminan
haciéndolo (recuerda que vivimos en un mundo incierto, donde no podemos
predecir). Por lo tanto, al definir tu producto mínimo viable (MVP), tu misión
es crear las mínimas funcionalidades que maximicen el valor que entregas. Menos
es más ;)

![Construyendo un MVP](https://lh5.googleusercontent.com/Y0pAAgnYJcYs0DCK2vo28H0709vIJ4OvMkGs5P1xCS4_6k3XQS0jqOA3KQLKsFX1SrCcOqab9jMwuTCRZVATELmlhFr5VihRIrftA5Fj8q0PFQ8JDoktKfHTrZX5CG4ASzv7vyxL)
