# Cypress Automation - Guia para principiantes

Este proyecto esta pensado para alumnos que recien empiezan con automatizacion de pruebas web usando **Cypress**.

La idea es que puedas:

- Entender como esta organizado un proyecto real de testing.
- Ejecutar pruebas en modo visual.
- Leer y escribir tus primeros tests.
- Aplicar una base de buenas practicas (Page Object Model + estructura clara).

---

## 1) Que es Cypress

Cypress es una herramienta para automatizar pruebas de aplicaciones web.

Con Cypress podes:

- Abrir un navegador y simular acciones de usuario.
- Hacer clic, escribir texto, navegar entre paginas.
- Verificar resultados esperados.
- Detectar errores rapido durante el desarrollo.

---

## 2) Requisitos previos

Antes de empezar, necesitas tener instalado:

- **Node.js** (recomendado: version LTS)
- **npm** (se instala junto con Node.js)
- **VS Code** (opcional, pero recomendado)

Para verificar instalaciones:

```bash
node -v
npm -v
```

---

## 3) Instalacion del proyecto

Desde la carpeta raiz del proyecto, ejecuta:

```bash
npm install
```

Este comando instala Cypress y las dependencias del proyecto.

---

## 4) Como ejecutar los tests

### Modo visual (recomendado para aprender)

```bash
npm test
```

En este proyecto, el script `test` abre Cypress en modo interactivo (`cypress open`).

### Modo consola (opcional)

Si queres correr todo sin interfaz grafica:

```bash
npx cypress run
```

---

## 5) Estructura del proyecto

```text
cypressAutomation/
  cypress.config.js
  package.json
  cypress/
    e2e/
      page/
        todoListPage.js
      tests/
        todoListTest.js
        Login/
          loginTest.js
    fixtures/
      example.json
    support/
      commands.js
      e2e.js
```

### Para que sirve cada carpeta/archivo

- `cypress.config.js`: configuracion general de Cypress.
- `cypress/e2e/tests/`: tests automatizados (casos de prueba).
- `cypress/e2e/page/`: clases Page Object para separar selectores/acciones.
- `cypress/fixtures/`: datos de prueba estaticos (JSON).
- `cypress/support/commands.js`: comandos personalizados de Cypress.
- `cypress/support/e2e.js`: configuracion global que se carga antes de cada test.

---

## 6) Primer recorrido del codigo

### Test principal

En `cypress/e2e/tests/todoListTest.js` vas a ver:

- `describe(...)`: agrupa casos de prueba (suite).
- `it(...)`: define un caso de prueba individual.
- `cy.visit(...)`: abre una URL.
- `cy.get(...)`: busca elementos en la pagina.
- `.type(...)` y `.click(...)`: acciones del usuario.

### Page Object

En `cypress/e2e/page/todoListPage.js` se encapsulan selectores:

- `inputTask()`: devuelve el input para nueva tarea.
- `gitHubLink()`: devuelve el link de GitHub.

Esto ayuda a mantener tests mas limpios y faciles de mantener.

---

## 7) Que hace el test actual

El test `Primer Test` realiza lo siguiente:

1. Abre `https://example.cypress.io/todo`.
2. Escribe una tarea en el input.
3. Espera 5 segundos.
4. Hace clic en el link de GitHub.
5. Espera 5 segundos.

> Nota didactica: para proyectos reales se recomienda evitar `cy.wait(5000)` fijo y preferir esperas por condiciones (por ejemplo, verificar que un elemento exista o sea visible).

---

## 8) Buenas practicas para empezar

- Escribir nombres descriptivos para `describe` e `it`.
- Evitar `wait` fijo salvo para ejercicios de aprendizaje.
- Reutilizar selectores en Page Objects.
- Mantener un test pequeno y claro antes de hacerlo mas complejo.
- Separar datos de prueba en `fixtures` cuando crezca el proyecto.

---

## 9) Ejercicio sugerido para alumnos

Proba crear un nuevo test que:

1. Abra la misma pagina `todo`.
2. Agregue dos tareas.
3. Marque una tarea como completada.
4. Verifique que la tarea completada tenga el estilo esperado.

Sugerencia: crea un nuevo archivo en `cypress/e2e/tests/` y reutiliza `todoListPage.js`.

---

## 10) Posibles mejoras del proyecto

- Agregar script `test:run` en `package.json` para `cypress run`.
- Completar `Login/loginTest.js` con un flujo real de login.
- Crear comandos custom en `cypress/support/commands.js`.
- Agregar mas Page Objects para distintas pantallas.

---

## 11) Comandos utiles

```bash
npm install        # instala dependencias
npm test           # abre Cypress (modo visual)
npx cypress run    # ejecuta en modo headless
```

---

## 12) Cierre

Si estas empezando, enfocate en este orden:

1. Ejecutar un test existente.
2. Entender cada linea del test.
3. Modificar un paso.
4. Crear tu propio test.

Con esa base ya vas a tener una muy buena introduccion practica a la automatizacion con Cypress.
