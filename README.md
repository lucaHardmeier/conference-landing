# Challenge: Ticket 3D CRUCEConf

## Objetivo
Desarrollar un componente de Ticket interactivo con efecto 3D para la CRUCEConf 2025, implementando animaciones avanzadas y aprovechando las funcionalidades de VTEX IO.

**Referencia de diseño**: https://www.figma.com/proto/VQF9v2l5UkUAoeuxydoDrq/Eventos-%2F-Post
**Referencia de animación**: https://www.miduconf.com/

## Stack
* VTEX IO
* React  
* TypeScript
* CSS Vanilla (CSS Modules / CSS Handles)
* Tachyons (opcional, recomendado para optimización)

## Requisitos

**Componente Base**
* Crear custom app en VTEX IO
* Implementar CSS Handles para permitir customización
* Consumir contexto de usuario (requiere login)
* Manejo de estados loading/error
* Implementar persistencia de datos
* Efecto typewriting para textos

**Animación y Estilos**
* Efecto 3D en hover/interacción
* Desarrollar animaciones con CSS vanilla (no se permiten librerías de animación)
* Implementar transiciones suaves
* Layout responsive
* Cumplir diseño provisto en Figma

**Site Editor**
* Textos editables:
 * Título del evento
 * Subtítulo/descripción  
 * Fecha y hora
 * Información adicional
* Configuración de logos/sponsors

**Experiencia de Usuario**
* Validación de usuario autenticado
* Manejo de rutas y navegación
* Adaptación a diferentes dispositivos
* Optimización de performance

## Bonus
* Estilos mayormente en Tachyons
* Uso de Slots de VTEX IO para contenido dinámico
* Feature extra a consideración del dev

## Evaluación

**Se valorará**
* Cumplimiento de requisitos básicos al 100%
* Calidad y optimización del CSS
* Mantenibilidad y organización del proyecto
* Autonomía en la resolución de problemas
* Calidad y semántica de los commits -> https://www.conventionalcommits.org/en/v1.0.0/

**Documentación Requerida**
* README con instrucciones de uso (alineado con los Componentes de CRUCE)
* Estructura del proyecto
* Dependencias utilizadas (cuanto menos, mejor)
* Guía de customización vía Site Editor
* Documentación de CSS Handles
* Decisiones técnicas relevantes

## Entrega
* Repositorio: https://gitlab.e-cruce.com/cruce-team/cruce/frontend/capacitaciones/challenge02-conference-ticket
* Crear rama con formato: nombre-apellido
* Workspace de desarrollo en VTEX IO (nombre y apellido todo junto, ejemplo: `ivanvera`)
* Fecha límite: Viernes 7

### Devs
- Luca Hardmeier: https://app.clickup.com/t/86b3tdnmj
- Lucas Angiorama: https://app.clickup.com/t/86b3tdp5d

¡A codear! 🎫 ✨