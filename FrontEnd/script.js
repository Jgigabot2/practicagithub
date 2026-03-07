
// 1. MODO OSCURO / CLARO
function inicializarModoOscuro() {
    const btnModo = document.createElement('button');
    btnModo.id = 'btnModoOscuro';
    btnModo.innerHTML = '🌙 Modo Oscuro';
    btnModo.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 10px 20px;
        background: #667eea;
        color: white;
        border: none;
        border-radius: 25px;
        cursor: pointer;
        font-size: 16px;
        z-index: 1000;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        transition: all 0.3s;
    `;
    
    document.body.appendChild(btnModo);
    
    // Cargar preferencia guardada
    const modoOscuro = localStorage.getItem('modoOscuro') === 'true';
    if (modoOscuro) {
        aplicarModoOscuro();
        btnModo.innerHTML = '☀️ Modo Claro';
    }
    
    btnModo.addEventListener('click', () => {
        document.body.classList.toggle('modo-oscuro');
        const estaOscuro = document.body.classList.contains('modo-oscuro');
        btnModo.innerHTML = estaOscuro ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
        localStorage.setItem('modoOscuro', estaOscuro);
    });
    
    btnModo.addEventListener('mouseenter', () => {
        btnModo.style.transform = 'scale(1.1)';
    });
    
    btnModo.addEventListener('mouseleave', () => {
        btnModo.style.transform = 'scale(1)';
    });
}

function aplicarModoOscuro() {
    document.body.classList.add('modo-oscuro');
}


// 2. ÍNDICE DE CONTENIDOS INTERACTIVO
function crearIndice() {
    const articulos = document.querySelectorAll('article h2');
    
    if (articulos.length === 0) return;
    
    const indice = document.createElement('nav');
    indice.id = 'indice';
    indice.innerHTML = '<h3>📋 Índice de Contenidos</h3>';
    indice.style.cssText = `
        position: fixed;
        left: 20px;
        top: 80px;
        background: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        max-width: 250px;
        max-height: 70vh;
        overflow-y: auto;
        z-index: 999;
    `;
    
    const lista = document.createElement('ul');
    lista.style.cssText = `
        list-style: none;
        padding: 0;
        margin: 10px 0 0 0;
    `;
    
    articulos.forEach((h2, index) => {
        // Asignar ID si no tiene
        if (!h2.id) {
            h2.id = `seccion-${index + 1}`;
        }
        
        const li = document.createElement('li');
        li.style.marginBottom = '10px';
        
        const link = document.createElement('a');
        link.href = `#${h2.id}`;
        link.textContent = h2.textContent;
        link.style.cssText = `
            text-decoration: none;
            color: #667eea;
            transition: all 0.3s;
            display: block;
            padding: 5px 10px;
            border-radius: 5px;
        `;
        
        link.addEventListener('mouseenter', () => {
            link.style.background = '#f0f0f0';
            link.style.paddingLeft = '15px';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.background = 'transparent';
            link.style.paddingLeft = '10px';
        });
        
        // Scroll suave
        link.addEventListener('click', (e) => {
            e.preventDefault();
            h2.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Resaltar temporalmente
            h2.style.transition = 'background 0.5s';
            h2.style.background = '#fff3cd';
            setTimeout(() => {
                h2.style.background = 'transparent';
            }, 2000);
        });
        
        li.appendChild(link);
        lista.appendChild(li);
    });
    
    indice.appendChild(lista);
    document.body.appendChild(indice);
}


// 3. BOTÓN "VOLVER ARRIBA"
function crearBotonVolverArriba() {
    const btn = document.createElement('button');
    btn.id = 'btnVolverArriba';
    btn.innerHTML = '⬆️';
    btn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #667eea;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        display: none;
        z-index: 1000;
        box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        transition: all 0.3s;
    `;
    
    document.body.appendChild(btn);
    
    // Mostrar/ocultar según scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    });
    
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.2) rotate(360deg)';
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1) rotate(0deg)';
    });
}


// 4. RESALTADOR DE CÓDIGO
function resaltarCodigo() {
    const ejemplosCodigo = [
        { selector: 'li', texto: 'PHP', tipo: 'lenguaje' },
        { selector: 'li', texto: 'Python', tipo: 'lenguaje' },
        { selector: 'li', texto: 'Java', tipo: 'lenguaje' },
        { selector: 'li', texto: 'JavaScript', tipo: 'lenguaje' },
        { selector: 'p', texto: 'GET', tipo: 'metodo' },
        { selector: 'p', texto: 'POST', tipo: 'metodo' },
        { selector: 'p', texto: 'PUT', tipo: 'metodo' },
        { selector: 'p', texto: 'DELETE', tipo: 'metodo' }
    ];
    
    document.querySelectorAll('li, p').forEach(elemento => {
        const texto = elemento.textContent.trim();
        
        if (['PHP', 'Python', 'Java', 'JavaScript', 'Node.js', 'C#', 'Go'].includes(texto)) {
            elemento.style.cssText = `
                background: #e3f2fd;
                padding: 5px 10px;
                border-left: 4px solid #2196f3;
                margin: 5px 0;
                border-radius: 3px;
                font-family: 'Courier New', monospace;
                font-weight: bold;
            `;
        }
    });
}


// 5. CONTADOR DE TIEMPO DE LECTURA
function mostrarTiempoLectura() {
    const contenido = document.querySelector('main').textContent;
    const palabras = contenido.trim().split(/\s+/).length;
    const tiempoLectura = Math.ceil(palabras / 200); // 200 palabras por minuto
    
    const badge = document.createElement('div');
    badge.innerHTML = `📖 Tiempo de lectura: ~${tiempoLectura} min`;
    badge.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #4caf50;
        color: white;
        padding: 10px 20px;
        border-radius: 20px;
        font-size: 14px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        z-index: 1000;
    `;
    
    document.body.appendChild(badge);
}


// 6. ANIMACIÓN DE ENTRADA PARA SECCIONES
function animarSecciones() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('section').forEach(section => {
        section.style.cssText = `
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease-out;
        `;
        observer.observe(section);
    });
}


// 7. BÚSQUEDA EN LA PÁGINA
function crearBuscador() {
    const buscador = document.createElement('div');
    buscador.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: white;
        padding: 15px;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        z-index: 1000;
    `;
    
    buscador.innerHTML = `
        <input 
            type="text" 
            id="inputBusqueda" 
            placeholder="🔍 Buscar en la página..."
            style="
                padding: 8px 15px;
                border: 2px solid #667eea;
                border-radius: 20px;
                width: 200px;
                font-size: 14px;
            "
        />
    `;
    
    document.body.appendChild(buscador);
    
    const input = document.getElementById('inputBusqueda');
    
    input.addEventListener('input', (e) => {
        const termino = e.target.value.toLowerCase();
        
        // Eliminar resaltados anteriores
        document.querySelectorAll('.resaltado').forEach(el => {
            el.outerHTML = el.textContent;
        });
        
        if (termino.length < 3) return;
        
        // Buscar y resaltar
        const walker = document.createTreeWalker(
            document.querySelector('main'),
            NodeFilter.SHOW_TEXT
        );
        
        let node;
        while (node = walker.nextNode()) {
            const texto = node.textContent;
            if (texto.toLowerCase().includes(termino)) {
                const span = document.createElement('span');
                span.innerHTML = texto.replace(
                    new RegExp(termino, 'gi'),
                    match => `<span class="resaltado" style="background: yellow; padding: 2px 4px; border-radius: 3px;">${match}</span>`
                );
                node.parentNode.replaceChild(span, node);
            }
        }
    });
}


// 8. TABLA INTERACTIVA
function mejorarTabla() {
    const tabla = document.querySelector('table');
    if (!tabla) return;
    
    tabla.style.cssText = `
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        border-radius: 10px;
        overflow: hidden;
    `;
    
    // Estilizar encabezados
    tabla.querySelectorAll('th').forEach(th => {
        th.style.cssText = `
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 15px;
            text-align: left;
            font-size: 16px;
        `;
    });
    
    // Estilizar filas
    tabla.querySelectorAll('tr').forEach((tr, index) => {
        if (index > 0) { // Saltar header
            tr.style.cssText = `
                background: ${index % 2 === 0 ? '#f9f9f9' : 'white'};
                transition: all 0.3s;
            `;
            
            tr.addEventListener('mouseenter', () => {
                tr.style.background = '#e3f2fd';
                tr.style.transform = 'scale(1.02)';
            });
            
            tr.addEventListener('mouseleave', () => {
                tr.style.background = index % 2 === 0 ? '#f9f9f9' : 'white';
                tr.style.transform = 'scale(1)';
            });
        }
    });
    
    // Estilizar celdas
    tabla.querySelectorAll('td').forEach(td => {
        td.style.cssText = `
            padding: 12px 15px;
            border-bottom: 1px solid #e0e0e0;
        `;
    });
}


// 9. QUIZ INTERACTIVO
function crearQuiz() {
    const quiz = document.createElement('div');
    quiz.id = 'quiz';
    quiz.style.cssText = `
        background: #f0f4ff;
        padding: 30px;
        margin: 30px auto;
        max-width: 600px;
        border-radius: 15px;
        box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    `;
    
    quiz.innerHTML = `
        <h3 style="color: #667eea; text-align: center;">🧠 Quiz: ¿Cuánto sabes de Back-End?</h3>
        <div id="pregunta" style="margin: 20px 0; font-size: 18px; font-weight: bold;"></div>
        <div id="opciones" style="margin: 20px 0;"></div>
        <div id="resultado" style="margin: 20px 0; font-size: 16px; font-weight: bold;"></div>
        <button id="btnSiguiente" style="
            background: #667eea;
            color: white;
            padding: 10px 30px;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            font-size: 16px;
            display: none;
        ">Siguiente Pregunta</button>
    `;
    
    const preguntas = [
        {
            pregunta: "¿Qué significa REST?",
            opciones: [
                "Representational State Transfer",
                "Remote Execution State Transfer",
                "Real Estate System Transfer",
                "Recursive System Technology"
            ],
            correcta: 0
        },
        {
            pregunta: "¿Cuál de estos NO es un método HTTP?",
            opciones: ["GET", "POST", "FETCH", "DELETE"],
            correcta: 2
        },
        {
            pregunta: "¿Qué significa MVC?",
            opciones: [
                "Model View Controller",
                "Main Virtual Computer",
                "Multiple Version Control",
                "Master Visual Code"
            ],
            correcta: 0
        }
    ];
    
    let preguntaActual = 0;
    let correctas = 0;
    
    function mostrarPregunta() {
        const p = preguntas[preguntaActual];
        document.getElementById('pregunta').textContent = p.pregunta;
        document.getElementById('resultado').textContent = '';
        document.getElementById('btnSiguiente').style.display = 'none';
        
        const opcionesDiv = document.getElementById('opciones');
        opcionesDiv.innerHTML = '';
        
        p.opciones.forEach((opcion, index) => {
            const btn = document.createElement('button');
            btn.textContent = opcion;
            btn.style.cssText = `
                display: block;
                width: 100%;
                padding: 15px;
                margin: 10px 0;
                background: white;
                border: 2px solid #e0e0e0;
                border-radius: 10px;
                cursor: pointer;
                font-size: 16px;
                transition: all 0.3s;
            `;
            
            btn.addEventListener('mouseenter', () => {
                btn.style.background = '#f0f0f0';
            });
            
            btn.addEventListener('mouseleave', () => {
                if (!btn.classList.contains('respondida')) {
                    btn.style.background = 'white';
                }
            });
            
            btn.addEventListener('click', () => {
                if (btn.classList.contains('respondida')) return;
                
                if (index === p.correcta) {
                    btn.style.background = '#4caf50';
                    btn.style.color = 'white';
                    document.getElementById('resultado').textContent = '✅ ¡Correcto!';
                    document.getElementById('resultado').style.color = '#4caf50';
                    correctas++;
                } else {
                    btn.style.background = '#f44336';
                    btn.style.color = 'white';
                    document.getElementById('resultado').textContent = '❌ Incorrecto';
                    document.getElementById('resultado').style.color = '#f44336';
                }
                
                btn.classList.add('respondida');
                document.getElementById('btnSiguiente').style.display = 'block';
            });
            
            opcionesDiv.appendChild(btn);
        });
    }
    
    document.getElementById('btnSiguiente').addEventListener('click', () => {
        preguntaActual++;
        if (preguntaActual < preguntas.length) {
            mostrarPregunta();
        } else {
            quiz.innerHTML = `
                <h3 style="text-align: center; color: #667eea;">🎉 Quiz Completado</h3>
                <p style="text-align: center; font-size: 24px; margin: 20px 0;">
                    Puntuación: ${correctas}/${preguntas.length}
                </p>
                <p style="text-align: center; color: #666;">
                    ${correctas === preguntas.length ? '¡Perfecto! Dominas el Back-End 🚀' : 
                      correctas >= 2 ? 'Buen trabajo! Sigue aprendiendo 📚' : 
                      'Sigue estudiando, vas por buen camino 💪'}
                </p>
            `;
        }
    });
    
    document.querySelector('main').appendChild(quiz);
    mostrarPregunta();
}


// 10. PROGRESO DE LECTURA
function crearBarraProgreso() {
    const barra = document.createElement('div');
    barra.id = 'barraProgreso';
    barra.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
        z-index: 9999;
        transition: width 0.1s;
    `;
    
    document.body.appendChild(barra);
    
    window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        barra.style.width = scrolled + '%';
    });
}


// ========================================
// INICIALIZAR TODO
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Inicializando funcionalidades...');
    
    // Agregar estilos CSS dinámicamente
    const style = document.createElement('style');
    style.textContent = `
        body.modo-oscuro {
            background: #1a1a2e;
            color: #eee;
        }
        
        body.modo-oscuro h1,
        body.modo-oscuro h2,
        body.modo-oscuro h3 {
            color: #fff;
        }
        
        body.modo-oscuro #indice {
            background: #16213e;
            color: #eee;
        }
        
        body.modo-oscuro #indice a {
            color: #9ca3ff;
        }
        
        * {
            scroll-behavior: smooth;
        }
        
        main {
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
            padding-left: 300px;
            padding-right: 50px;
        }
        
        @media (max-width: 768px) {
            main {
                padding-left: 20px;
            }
            
            #indice {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Ejecutar funciones
    crearBarraProgreso();
    inicializarModoOscuro();
    crearIndice();
    crearBotonVolverArriba();
    mostrarTiempoLectura();
    animarSecciones();
    crearBuscador();
    resaltarCodigo();
    mejorarTabla();
    crearQuiz();
    
    console.log('✅ Todas las funcionalidades cargadas!');
});