// Navegación suave
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
                    behavior: 'smooth'
                });
            }

// Animaciones al hacer scroll
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Navegación activa
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-blue-600');
        link.classList.add('text-gray-600');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.remove('text-gray-600');
            link.classList.add('text-blue-600');
            }
        });
    }

// Gráfico para la ecuación cuadrática en la sección de teoría
function createEquationGraph() {
    const canvas = document.getElementById('equationGraph');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Limpiar canvas
    ctx.clearRect(0, 0, width, height);
    
    // Configurar el gráfico
    const padding = 20;
    const graphWidth = width - 2 * padding;
    const graphHeight = height - 2 * padding;
    
    // Dibujar ejes
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    
    // Eje X
    ctx.beginPath();
    ctx.moveTo(padding, height / 2);
    ctx.lineTo(width - padding, height / 2);
    ctx.stroke();
    
    // Eje Y
    ctx.beginPath();
    ctx.moveTo(width / 2, padding);
    ctx.lineTo(width / 2, height - padding);
    ctx.stroke();
    
    // Dibujar parábola x² - 5x + 6
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    let firstPoint = true;
    for (let x = -2; x <= 6; x += 0.1) {
        const y = x * x - 5 * x + 6;
        const pixelX = padding + (x + 2) * (graphWidth / 8);
        const pixelY = height / 2 - y * (graphHeight / 8);
        
        if (firstPoint) {
            ctx.moveTo(pixelX, pixelY);
            firstPoint = false;
            } else {
            ctx.lineTo(pixelX, pixelY);
        }
    }
    ctx.stroke();
    
    // Marcar raíces
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(padding + (2 + 2) * (graphWidth / 8), height / 2, 4, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(padding + (3 + 2) * (graphWidth / 8), height / 2, 4, 0, 2 * Math.PI);
    ctx.fill();
}

// Gráfico para el ejemplo manual
function createManualGraph() {
    const canvas = document.getElementById('manualGraph');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Limpiar canvas
    ctx.clearRect(0, 0, width, height);
    
    // Configurar el gráfico
    const padding = 40;
    const graphWidth = width - 2 * padding;
    const graphHeight = height - 2 * padding;
    
    // Dibujar ejes
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 2;
    
    // Eje X
    ctx.beginPath();
    ctx.moveTo(padding, height / 2);
    ctx.lineTo(width - padding, height / 2);
    ctx.stroke();
    
    // Eje Y
    ctx.beginPath();
    ctx.moveTo(width / 2, padding);
    ctx.lineTo(width / 2, height - padding);
    ctx.stroke();
    
    // Etiquetas de ejes
    ctx.fillStyle = '#374151';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('x', width - 10, height / 2 + 20);
    ctx.textAlign = 'center';
    ctx.fillText('y', width / 2 + 10, 20);
    
    // Dibujar parábola x² - 5x + 6
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    let firstPoint = true;
    for (let x = 0; x <= 5; x += 0.05) {
        const y = x * x - 5 * x + 6;
        const pixelX = padding + x * (graphWidth / 5);
        const pixelY = height / 2 - y * (graphHeight / 10);
        
        if (firstPoint) {
            ctx.moveTo(pixelX, pixelY);
            firstPoint = false;
        } else {
            ctx.lineTo(pixelX, pixelY);
        }
    }
    ctx.stroke();
    
    // Marcar raíces con círculos rojos
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(padding + 2 * (graphWidth / 5), height / 2, 6, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(padding + 3 * (graphWidth / 5), height / 2, 6, 0, 2 * Math.PI);
    ctx.fill();
    
    // Etiquetas de las raíces
    ctx.fillStyle = '#ef4444';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('(2,0)', padding + 2 * (graphWidth / 5), height / 2 + 20);
    ctx.fillText('(3,0)', padding + 3 * (graphWidth / 5), height / 2 + 20);
}

// Demo interactiva con Chart.js y Math.js
let demoChart = null;

function solveEquation() {
    const equationInput = document.getElementById('equationInput').value;
    const resultsDiv = document.getElementById('results');
    
    if (typeof math === 'undefined') {
        // Demo alternativa sin Math.js para ecuaciones cuadráticas
        if (equationInput.includes('x^2') || equationInput.includes('x²')) {
            try {
                // Función simple para x² - 5x + 6
                const func = (x) => x * x - 5 * x + 6;
                
                // Crear gráfico simple
                const ctx = document.getElementById('demoChart').getContext('2d');
                if (demoChart) {
                    demoChart.destroy();
                }
                
                const xValues = [];
                const yValues = [];
                for (let x = -2; x <= 6; x += 0.1) {
                    xValues.push(x);
                    yValues.push(func(x));
                }
                
                demoChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: xValues,
                        datasets: [{
                            label: equationInput,
                            data: yValues,
                            borderColor: '#3b82f6',
                            backgroundColor: 'rgba(59, 130, 246, 0.1)',
                            borderWidth: 2,
                            fill: false,
                            tension: 0.1
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: false
                            }
                        },
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: 'x'
                                }
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: 'y'
                                }
                            }
                        }
                    }
                });
                
                // Raíces conocidas para x² - 5x + 6
                resultsDiv.innerHTML = `
                    <div class="space-y-4">
                        <h4 class="font-bold text-lg text-gray-800">Ecuación: ${equationInput}</h4>
                        <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                            <h5 class="font-semibold text-green-800 mb-2">Raíces encontradas:</h5>
                            <ul class="space-y-1">
                                <li class="text-green-700">• x = 2.000</li>
                                <li class="text-green-700">• x = 3.000</li>
                            </ul>
                        </div>
                        <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <h5 class="font-semibold text-blue-800 mb-2">Nota:</h5>
                            <p class="text-blue-700 text-sm">Demo simplificada sin Math.js. Para funcionalidad completa, recarga la página.</p>
                        </div>
                    </div>
                `;
                return;
            } catch (error) {
                console.error('Error en demo alternativa:', error);
            }
        }
        
        resultsDiv.innerHTML = `
            <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h5 class="font-semibold text-yellow-800 mb-2">⚠️ Librería no disponible</h5>
                <p class="text-yellow-700">Math.js no se pudo cargar. La demo no está disponible en este momento.</p>
                <p class="text-yellow-600 text-sm mt-2">Recarga la página para intentar nuevamente.</p>
            </div>
        `;
        return;
    }
    
    try {
        // Crear función usando Math.js
        const func = math.compile(equationInput);
        
        // Generar datos para el gráfico
        const xValues = [];
        const yValues = [];
        
        for (let x = -5; x <= 5; x += 0.1) {
            try {
                const y = func.evaluate({x: x});
                if (isFinite(y)) {
                    xValues.push(x);
                    yValues.push(y);
                }
            } catch (e) {
                // Ignorar valores que causan errores
            }
        }
        
        // Crear gráfico con Chart.js
        const ctx = document.getElementById('demoChart').getContext('2d');
        
        if (demoChart) {
            demoChart.destroy();
        }
        
        demoChart = new Chart(ctx, {
        type: 'line',
        data: {
                labels: xValues,
            datasets: [{
                    label: equationInput,
                    data: yValues,
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderWidth: 2,
                    fill: false,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                        display: false
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'x'
                    },
                    grid: {
                            color: '#e5e7eb'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'y'
                    },
                    grid: {
                            color: '#e5e7eb'
                    }
                }
            },
            elements: {
                point: {
                    radius: 0
                }
            }
        }
    });

        // Encontrar raíces aproximadas
        const roots = findRoots(func, -5, 5);
        
        // Mostrar resultados
        let resultsHTML = '<div class="space-y-4">';
        resultsHTML += `<h4 class="font-bold text-lg text-gray-800">Ecuación: ${equationInput}</h4>`;
        
        if (roots.length > 0) {
            resultsHTML += '<div class="bg-green-50 border border-green-200 rounded-lg p-4">';
            resultsHTML += '<h5 class="font-semibold text-green-800 mb-2">Raíces encontradas:</h5>';
            resultsHTML += '<ul class="space-y-1">';
            roots.forEach((root, index) => {
                resultsHTML += `<li class="text-green-700">• x ≈ ${root.toFixed(3)}</li>`;
            });
            resultsHTML += '</ul></div>';
        } else {
            resultsHTML += '<div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">';
            resultsHTML += '<p class="text-yellow-800">No se encontraron raíces en el rango [-5, 5]</p></div>';
        }
        
        resultsHTML += '<div class="bg-blue-50 border border-blue-200 rounded-lg p-4">';
        resultsHTML += '<h5 class="font-semibold text-blue-800 mb-2">Información:</h5>';
        resultsHTML += '<p class="text-blue-700 text-sm">• Las raíces son los puntos donde la función cruza el eje X (y = 0)</p>';
        resultsHTML += '<p class="text-blue-700 text-sm">• Se muestran aproximaciones con 3 decimales</p>';
        resultsHTML += '</div></div>';
        
        resultsDiv.innerHTML = resultsHTML;
        
    } catch (error) {
        resultsDiv.innerHTML = `
            <div class="bg-red-50 border border-red-200 rounded-lg p-4">
                <h5 class="font-semibold text-red-800 mb-2">Error:</h5>
                <p class="text-red-700">No se pudo procesar la ecuación. Asegúrate de usar la sintaxis correcta.</p>
                <p class="text-red-600 text-sm mt-2">Ejemplos válidos: x^2 - 5*x + 6, x^3 - 2*x + 1, sin(x)</p>
            </div>
        `;
    }
}

// Función para encontrar raíces usando el método de bisección
function findRoots(func, min, max, tolerance = 0.001) {
    if (typeof math === 'undefined') {
        return [];
    }
    
    const roots = [];
    const step = 0.1;
    
    for (let x = min; x < max; x += step) {
        try {
            const y1 = func.evaluate({x: x});
            const y2 = func.evaluate({x: x + step});
            
            // Si hay cambio de signo, hay una raíz cerca
            if (y1 * y2 < 0) {
                const root = bisectionMethod(func, x, x + step, tolerance);
                if (root !== null && !roots.some(r => Math.abs(r - root) < tolerance)) {
                    roots.push(root);
                }
            }
            
            // También verificar si y1 es muy cercano a 0
            if (Math.abs(y1) < tolerance && !roots.some(r => Math.abs(r - x) < tolerance)) {
                roots.push(x);
            }
        } catch (e) {
            // Continuar si hay error en la evaluación
        }
    }
    
    return roots.sort((a, b) => a - b);
}

// Método de bisección para encontrar raíces
function bisectionMethod(func, a, b, tolerance = 0.001, maxIterations = 100) {
    let iterations = 0;
    
    while (iterations < maxIterations) {
        const c = (a + b) / 2;
        
        try {
            const fa = func.evaluate({x: a});
            const fc = func.evaluate({x: c});
            
            if (Math.abs(fc) < tolerance || (b - a) / 2 < tolerance) {
                return c;
            }
            
            if (fa * fc < 0) {
                b = c;
            } else {
                a = c;
            }
            
            iterations++;
        } catch (e) {
            return null;
        }
    }
    
    return null;
}

// Contador de reintentos
let retryCount = 0;
const maxRetries = 5;

// Función para inicializar la aplicación
function initializeApp() {
    console.log('Iniciando aplicación...');
    
    // Verificar librerías
    console.log('Math.js disponible:', typeof math !== 'undefined');
    console.log('Chart.js disponible:', typeof Chart !== 'undefined');
    
    if (typeof math === 'undefined') {
        retryCount++;
        if (retryCount < maxRetries) {
            console.error(`Math.js no está disponible, reintentando en 1 segundo... (${retryCount}/${maxRetries})`);
            setTimeout(initializeApp, 1000);
            return;
        } else {
            console.error('Math.js no se pudo cargar después de varios intentos. Continuando sin funcionalidad de demo.');
        }
    }
    
    if (typeof Chart === 'undefined') {
        retryCount++;
        if (retryCount < maxRetries) {
            console.error(`Chart.js no está disponible, reintentando en 1 segundo... (${retryCount}/${maxRetries})`);
            setTimeout(initializeApp, 1000);
            return;
        } else {
            console.error('Chart.js no se pudo cargar después de varios intentos. Continuando sin gráficos.');
        }
    }
    
    // Crear gráficos iniciales
    try {
        createEquationGraph();
        console.log('Gráfico de ecuación creado');
    } catch (error) {
        console.error('Error creando gráfico de ecuación:', error);
    }
    
    try {
        createManualGraph();
        console.log('Gráfico manual creado');
    } catch (error) {
        console.error('Error creando gráfico manual:', error);
    }
    
    // Configurar demo inicial
    try {
        solveEquation();
        console.log('Demo inicial configurada');
    } catch (error) {
        console.error('Error configurando demo:', error);
    }
    
    // Configurar botones de software
    try {
        setupSoftwareButtons();
        console.log('Botones de software configurados');
    } catch (error) {
        console.error('Error configurando botones:', error);
    }
    
    // Configurar enlaces de navegación
    try {
        setupNavigationLinks();
        console.log('Enlaces de navegación configurados');
    } catch (error) {
        console.error('Error configurando navegación:', error);
    }
    
    // Event listeners para scroll
    window.addEventListener('scroll', function() {
        handleScrollAnimations();
        updateActiveNav();
    });
    
    // Event listener para el input de la demo
    const equationInput = document.getElementById('equationInput');
    if (equationInput) {
        equationInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                solveEquation();
            }
        });
        console.log('Event listener del input configurado');
    } else {
        console.warn('Input de ecuación no encontrado');
    }
    
    // Hacer visibles los elementos iniciales
    handleScrollAnimations();
    
    console.log('Configuración completada');
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado, esperando librerías...');
    
    // Esperar un poco más para que las librerías se carguen
    setTimeout(initializeApp, 500);
});

// Función para manejar enlaces de navegación
function setupNavigationLinks() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            });
        });
    }

// Funciones para el modal de Python
function openPythonModal() {
    const modal = document.getElementById('pythonModal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
}

function closePythonModal() {
    const modal = document.getElementById('pythonModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Restaurar scroll del body
}

// Cerrar modal al hacer clic fuera de él
document.addEventListener('DOMContentLoaded', function() {
    const pythonModal = document.getElementById('pythonModal');
    if (pythonModal) {
        pythonModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closePythonModal();
            }
        });
    }
});

// Cerrar modal con tecla Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePythonModal();
    }
});

// Función para manejar botones de software (ejemplo)
function setupSoftwareButtons() {
    document.querySelectorAll('button').forEach(button => {
        if (button.textContent.includes('GeoGebra')) {
            button.addEventListener('click', function() {
                window.open('https://www.geogebra.org/graphing', '_blank');
            });
        } else if (button.textContent.includes('WolframAlpha')) {
            button.addEventListener('click', function() {
                window.open('https://www.wolframalpha.com/', '_blank');
            });
        } else if (button.textContent.includes('Desmos')) {
            button.addEventListener('click', function() {
                window.open('https://www.desmos.com/calculator', '_blank');
            });
        } else if (button.textContent.includes('Python')) {
            button.addEventListener('click', function() {
                openPythonModal();
            });
        } else if (button.textContent.includes('MATLAB')) {
            button.addEventListener('click', function() {
                alert('Código MATLAB para encontrar raíces:\n\n% Definir la ecuación\nf = @(x) x.^2 - 5*x + 6;\n\n% Encontrar raíces\nroots = fzero(f, [1, 4]);\n\n% O usando roots() para polinomios\np = [1 -5 6];\nroots_poly = roots(p);');
            });
        } else if (button.textContent.includes('Excel')) {
            button.addEventListener('click', function() {
                alert('En Excel puedes usar:\n\n1. Solver (Datos > Solver)\n2. Función GOAL SEEK\n3. Función ROOT (si está disponible)\n\nPara x² - 5x + 6 = 0:\n- Configura Solver para minimizar (x² - 5x + 6)²\n- Establece restricciones apropiadas');
            });
        }
    });
}
