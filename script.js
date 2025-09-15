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
    
    // Eje Y (centrado en x=0)
    const yAxisX = padding;
    ctx.beginPath();
    ctx.moveTo(yAxisX, padding);
    ctx.lineTo(yAxisX, height - padding);
    ctx.stroke();
    
    // Etiquetas de ejes
    ctx.fillStyle = '#374151';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('x', width - 10, height / 2 + 20);
    ctx.textAlign = 'center';
    ctx.fillText('y', yAxisX + 10, 20);
    
    // Dibujar parábola x² - 5x + 6
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    let firstPoint = true;
    for (let x = -1; x <= 6; x += 0.05) {
        const y = x * x - 5 * x + 6;
        const pixelX = padding + (x + 1) * (graphWidth / 7);
        const pixelY = height / 2 - y * (graphHeight / 10);
        
        if (firstPoint) {
            ctx.moveTo(pixelX, pixelY);
            firstPoint = false;
        } else {
            ctx.lineTo(pixelX, pixelY);
        }
    }
    ctx.stroke();
    
    // Marcar raíces con círculos rojos (en x=2 y x=3)
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(padding + (2 + 1) * (graphWidth / 7), height / 2, 6, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(padding + (3 + 1) * (graphWidth / 7), height / 2, 6, 0, 2 * Math.PI);
    ctx.fill();
    
    // Agregar etiquetas de las raíces
    ctx.fillStyle = '#374151';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('x=2', padding + (2 + 1) * (graphWidth / 7), height / 2 + 20);
    ctx.fillText('x=3', padding + (3 + 1) * (graphWidth / 7), height / 2 + 20);
}

// Gráfico pequeño para el ejemplo de polinomio 2x² - 8x + 6 = 0
function createPolynomialExampleGraph() {
    const canvas = document.getElementById('polynomialExampleGraph');
    if (!canvas) return;
    
    // Ajustar tamaño si es necesario
    canvas.width = 300;
    canvas.height = 220;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Limpiar canvas
    ctx.clearRect(0, 0, width, height);
    
    // Configurar el gráfico
    const padding = 30;
    const graphWidth = width - 2 * padding;
    const graphHeight = height - 2 * padding;
    
    // Configuración del rango: x de -1 a 5, y de -2 a 10
    const xMin = -1, xMax = 5;
    const yMin = -2, yMax = 10;
    
    // Calcular posición del origen (0,0)
    const originX = padding + (0 - xMin) * graphWidth / (xMax - xMin);
    const originY = height - padding - (0 - yMin) * graphHeight / (yMax - yMin);
    
    // Dibujar ejes
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    
    // Eje X (horizontal, pasa por y=0)
    ctx.beginPath();
    ctx.moveTo(padding, originY);
    ctx.lineTo(width - padding, originY);
    ctx.stroke();
    
    // Eje Y (vertical, pasa por x=0)
    ctx.beginPath();
    ctx.moveTo(originX, padding);
    ctx.lineTo(originX, height - padding);
    ctx.stroke();
    
    // Etiquetas de ejes
    ctx.fillStyle = '#6b7280';
    ctx.font = '10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('x', width - 15, originY + 15);
    ctx.textAlign = 'center';
    ctx.fillText('y', originX + 10, 15);
    
    // Dibujar marcas en los ejes
    ctx.fillStyle = '#9ca3af';
    ctx.font = '8px Arial';
    ctx.strokeStyle = '#e5e7eb';
    
    // Marcas en eje X
    for (let i = xMin; i <= xMax; i++) {
        if (i !== 0) {
            const x = padding + (i - xMin) * graphWidth / (xMax - xMin);
            ctx.beginPath();
            ctx.moveTo(x, originY - 3);
            ctx.lineTo(x, originY + 3);
            ctx.stroke();
            ctx.textAlign = 'center';
            ctx.fillText(i.toString(), x, originY + 15);
        }
    }
    
    // Dibujar parábola 2x² - 8x + 6
    ctx.strokeStyle = '#059669'; // Verde
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    let firstPoint = true;
    for (let x = xMin; x <= xMax; x += 0.05) {
        const y = 2 * x * x - 8 * x + 6;
        const pixelX = padding + (x - xMin) * graphWidth / (xMax - xMin);
        const pixelY = height - padding - (y - yMin) * graphHeight / (yMax - yMin);
        
        if (firstPoint) {
            ctx.moveTo(pixelX, pixelY);
            firstPoint = false;
        } else {
            ctx.lineTo(pixelX, pixelY);
        }
    }
    ctx.stroke();
    
    // Marcar raíces con círculos rojos (en x=1 y x=3)
    ctx.fillStyle = '#dc2626';
    
    // Raíz en x=1
    const x1Pixel = padding + (1 - xMin) * graphWidth / (xMax - xMin);
    ctx.beginPath();
    ctx.arc(x1Pixel, originY, 4, 0, 2 * Math.PI);
    ctx.fill();
    
    // Raíz en x=3
    const x3Pixel = padding + (3 - xMin) * graphWidth / (xMax - xMin);
    ctx.beginPath();
    ctx.arc(x3Pixel, originY, 4, 0, 2 * Math.PI);
    ctx.fill();
    
    // Agregar etiquetas de las raíces
    ctx.fillStyle = '#374151';
    ctx.font = '9px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('x=1', x1Pixel, originY + 18);
    ctx.fillText('x=3', x3Pixel, originY + 18);
}

// Gráfico pequeño simplificado para el ejemplo de ecuación implícita tan(x) - x = 0
function createImplicitExampleGraph() {
    const canvas = document.getElementById('implicitExampleGraph');
    if (!canvas) return;
    
    // Ajustar tamaño si es necesario
    canvas.width = 300;
    canvas.height = 220;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Limpiar canvas
    ctx.clearRect(0, 0, width, height);
    
    // Configurar el gráfico - rango más pequeño y centrado
    const padding = 30;
    const graphWidth = width - 2 * padding;
    const graphHeight = height - 2 * padding;
    
    // Configuración del rango simplificado: x de -2 a 2, y de -3 a 3
    const xMin = -2, xMax = 2;
    const yMin = -3, yMax = 3;
    
    // Calcular posición del origen (0,0)
    const originX = padding + (0 - xMin) * graphWidth / (xMax - xMin);
    const originY = height - padding - (0 - yMin) * graphHeight / (yMax - yMin);
    
    // Dibujar ejes
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    
    // Eje X (horizontal, pasa por y=0)
    ctx.beginPath();
    ctx.moveTo(padding, originY);
    ctx.lineTo(width - padding, originY);
    ctx.stroke();
    
    // Eje Y (vertical, pasa por x=0)
    ctx.beginPath();
    ctx.moveTo(originX, padding);
    ctx.lineTo(originX, height - padding);
    ctx.stroke();
    
    // Etiquetas de ejes
    ctx.fillStyle = '#6b7280';
    ctx.font = '10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('x', width - 15, originY + 15);
    ctx.textAlign = 'center';
    ctx.fillText('y', originX + 10, 15);
    
    // Dibujar marcas en los ejes (simplificadas)
    ctx.fillStyle = '#9ca3af';
    ctx.font = '8px Arial';
    ctx.strokeStyle = '#e5e7eb';
    
    // Marcas en eje X
    for (let i = -1; i <= 1; i++) {
        if (i !== 0) {
            const x = padding + (i - xMin) * graphWidth / (xMax - xMin);
            ctx.beginPath();
            ctx.moveTo(x, originY - 3);
            ctx.lineTo(x, originY + 3);
            ctx.stroke();
            ctx.textAlign = 'center';
            ctx.fillText(i.toString(), x, originY + 15);
        }
    }
    
    // Dibujar y = x (línea azul recta)
    ctx.strokeStyle = '#3b82f6'; // Azul
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    const startX = padding + (xMin - xMin) * graphWidth / (xMax - xMin);
    const startY = height - padding - (xMin - yMin) * graphHeight / (yMax - yMin);
    const endX = padding + (xMax - xMin) * graphWidth / (xMax - xMin);
    const endY = height - padding - (xMax - yMin) * graphHeight / (yMax - yMin);
    
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    
    // Dibujar y = tan(x) simplificado (solo el segmento central)
    ctx.strokeStyle = '#f97316'; // Naranja
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    let firstPoint = true;
    for (let x = -1.4; x <= 1.4; x += 0.05) {
        const y = Math.tan(x);
        
        // Limitar y para que esté en el rango visible
        if (y > yMax || y < yMin) continue;
        
        const pixelX = padding + (x - xMin) * graphWidth / (xMax - xMin);
        const pixelY = height - padding - (y - yMin) * graphHeight / (yMax - yMin);
        
        if (firstPoint) {
            ctx.moveTo(pixelX, pixelY);
            firstPoint = false;
        } else {
            ctx.lineTo(pixelX, pixelY);
        }
    }
    ctx.stroke();
    
    // Marcar solo la raíz principal (x = 0)
    ctx.fillStyle = '#dc2626';
    ctx.beginPath();
    ctx.arc(originX, originY, 4, 0, 2 * Math.PI);
    ctx.fill();
    
    // Etiqueta de la raíz
    ctx.fillStyle = '#374151';
    ctx.font = '9px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('x=0', originX, originY + 18);
    
    // Leyenda simplificada
    ctx.fillStyle = '#374151';
    ctx.font = '8px Arial';
    ctx.textAlign = 'left';
    
    // Leyenda para y = x
    ctx.fillStyle = '#3b82f6';
    ctx.fillRect(padding + 5, padding + 5, 12, 2);
    ctx.fillStyle = '#374151';
    ctx.fillText('y = x', padding + 20, padding + 9);
    
    // Leyenda para y = tan(x)
    ctx.fillStyle = '#f97316';
    ctx.fillRect(padding + 5, padding + 18, 12, 2);
    ctx.fillStyle = '#374151';
    ctx.fillText('y = tan(x)', padding + 20, padding + 22);
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
    
    try {
        createPolynomialExampleGraph();
        console.log('Gráfico de ejemplo de polinomio creado');
    } catch (error) {
        console.error('Error creando gráfico de ejemplo de polinomio:', error);
    }
    
    try {
        createImplicitExampleGraph();
        console.log('Gráfico de ejemplo de ecuación implícita creado');
    } catch (error) {
        console.error('Error creando gráfico de ejemplo de ecuación implícita:', error);
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
    
    // Configurar menú móvil
    try {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        if (mobileMenuButton) {
            mobileMenuButton.addEventListener('click', toggleMobileMenu);
            console.log('Menú móvil configurado');
        }
    } catch (error) {
        console.error('Error configurando menú móvil:', error);
    }
    
    // Configurar tooltips para dispositivos táctiles
    try {
        setupTooltipsForTouch();
        console.log('Tooltips táctiles configurados');
    } catch (error) {
        console.error('Error configurando tooltips táctiles:', error);
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
    // Enlaces del menú desktop
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            closeMobileMenu(); // Cerrar menú móvil si está abierto
        });
    });
    
    // Enlaces del menú móvil
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            closeMobileMenu();
        });
    });
}

// Funciones para el menú móvil
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuButton = document.getElementById('mobile-menu-button');
    const icon = menuButton.querySelector('i');
    
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        closeMobileMenu();
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuButton = document.getElementById('mobile-menu-button');
    const icon = menuButton.querySelector('i');
    
    mobileMenu.classList.add('hidden');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
}

// Función para manejar tooltips en dispositivos táctiles
function setupTooltipsForTouch() {
    const tooltipContainers = document.querySelectorAll('.tooltip-container');
    
    tooltipContainers.forEach(container => {
        const icon = container.querySelector('i');
        
        // Detectar si es dispositivo táctil
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        
        if (isTouchDevice) {
            icon.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Cerrar otros tooltips abiertos
                tooltipContainers.forEach(otherContainer => {
                    if (otherContainer !== container) {
                        otherContainer.classList.remove('active');
                    }
                });
                
                // Toggle del tooltip actual
                container.classList.toggle('active');
            });
            
            // Cerrar tooltip al hacer clic fuera
            document.addEventListener('click', function(e) {
                if (!container.contains(e.target)) {
                    container.classList.remove('active');
                }
            });
        }
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

// Función para mostrar el modal de código Python
function openPythonWindow() {
    const pythonModal = document.getElementById('pythonModal');
    const pythonContent = document.getElementById('python-content');
    
    if (pythonModal && pythonContent) {
        // Cargar el contenido si no está cargado
        if (pythonContent.innerHTML.trim() === '<!-- El contenido se cargará dinámicamente -->') {
            loadPythonContent();
        }
        
        // Mostrar el modal
        pythonModal.classList.remove('hidden');
        
        // Prevenir scroll del body
        document.body.style.overflow = 'hidden';
        
        // Agregar entrada al historial para poder cerrar con botón atrás
        history.pushState({ modal: 'python' }, '', window.location.href);
        
        // Scroll al inicio del modal
        pythonModal.scrollTop = 0;
    }
}

// Función para cerrar el modal de código Python
function closePythonModal() {
    const pythonModal = document.getElementById('pythonModal');
    if (pythonModal) {
        pythonModal.classList.add('hidden');
        // Restaurar scroll del body
        document.body.style.overflow = 'auto';
    }
}

// Cerrar modal con tecla Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePythonModal();
        closeMatlabModal();
        closeExcelModal();
    }
});

// Manejar el botón atrás del navegador para cerrar modales
window.addEventListener('popstate', function(e) {
    // Verificar si hay un modal abierto y cerrarlo
    const pythonModal = document.getElementById('pythonModal');
    const matlabModal = document.getElementById('matlabModal');
    const excelModal = document.getElementById('excelModal');
    
    if (pythonModal && !pythonModal.classList.contains('hidden')) {
        closePythonModal();
    }
    if (matlabModal && !matlabModal.classList.contains('hidden')) {
        closeMatlabModal();
    }
    if (excelModal && !excelModal.classList.contains('hidden')) {
        closeExcelModal();
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
        } else if (button.textContent.includes('Ver código') && button.onclick && button.onclick.toString().includes('openPythonWindow')) {
            // El botón de Python ya tiene onclick="openPythonWindow()" en el HTML
            // No necesitamos agregar otro event listener
        } else if (button.textContent.includes('Python')) {
            button.addEventListener('click', function() {
                openPythonWindow();
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

// Función para cargar el contenido de Python dinámicamente
function loadPythonContent() {
    const pythonContent = document.getElementById('python-content');
    if (!pythonContent) return;
    
    pythonContent.innerHTML = `
        <div class="space-y-6">
            
            <!-- Resumen de Python -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-2xl font-bold text-gray-800 mb-4 flex items-center projector-optimized">
                    <i class="fas fa-info-circle text-blue-600 mr-3"></i>
                    Python para Cálculo de Raíces
                </h3>
                <p class="text-gray-700 leading-relaxed mb-4 classroom-text">
                    Python es una excelente herramienta para encontrar raíces de funciones. Aquí tienes un resumen 
                    de los métodos más básicos y útiles.
                </p>
                
                <div class="grid md:grid-cols-2 gap-6">
                    <!-- Método 1: NumPy -->
                    <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h4 class="font-semibold text-green-800 mb-2 flex items-center projector-optimized">
                            <i class="fas fa-calculator text-green-600 mr-2"></i>
                            NumPy (Para polinomios)
                        </h4>
                        <p class="text-green-700 text-sm mb-3 classroom-text">El método más simple para polinomios.</p>
                        <div class="bg-gray-900 rounded p-2 overflow-x-auto">
                            <pre class="text-green-400 text-xs"><code>import numpy as np
coeficientes = [1, -5, 6]
raices = np.roots(coeficientes)
print("Raíces:", raices)</code></pre>
                        </div>
                    </div>
                    
                    <!-- Método 2: SciPy -->
                    <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 class="font-semibold text-blue-800 mb-2 flex items-center projector-optimized">
                            <i class="fas fa-flask text-blue-600 mr-2"></i>
                            SciPy (Para cualquier función)
                        </h4>
                        <p class="text-blue-700 text-sm mb-3 classroom-text">Método más flexible y preciso.</p>
                        <div class="bg-gray-900 rounded p-2 overflow-x-auto">
                            <pre class="text-green-400 text-xs"><code>from scipy.optimize import fsolve
def ecuacion(x):
    return x**2 - 5*x + 6
raiz = fsolve(ecuacion, 1)
print("Raíz:", raiz[0])</code></pre>
                        </div>
                    </div>
                </div>
                
                <div class="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 class="font-semibold text-yellow-800 mb-2">Instalación:</h4>
                    <div class="bg-gray-900 rounded p-2 overflow-x-auto">
                        <pre class="text-green-400 text-xs"><code>pip install numpy scipy</code></pre>
                    </div>
                </div>
            </div>

            <!-- Consola Python -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center projector-optimized">
                    <i class="fas fa-terminal text-green-600 mr-3"></i>
                     Consola Python
                </h3>
                <p class="text-gray-600 mb-4 classroom-text">
                    Escribe código Python simple y ve los resultados.
                </p>
                
                <div class="space-y-4">
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 class="font-semibold text-gray-800 mb-3">Código Python:</h4>
                            <textarea id="python-code" rows="10" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent font-mono text-sm" placeholder="# Escribe tu código Python aquí
import numpy as np
coeficientes = [1, -5, 6]
raices = np.roots(coeficientes)
print(raices)"># Escribe tu código Python aquí
import numpy as np
coeficientes = [1, -5, 6]
raices = np.roots(coeficientes)
print(raices)</textarea>
                        </div>
                        
                        <div>
                            <h4 class="font-semibold text-gray-800 mb-3">Resultados:</h4>
                            <div id="code-output" class="bg-gray-900 text-green-400 p-4 rounded-lg min-h-[120px] font-mono text-sm">
                                <p class="text-gray-500">Escribe código y haz clic en "Ejecutar"</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex gap-3">
                        <button onclick="executePythonCode()" class="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                            <i class="fas fa-play mr-2"></i>Ejecutar
                        </button>
                        <button onclick="clearPythonCode()" class="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors">
                            <i class="fas fa-eraser mr-2"></i>Limpiar
                        </button>
                    </div>
                </div>
            </div>

        </div>
    `;
}

// ===== FUNCIONES INTERACTIVAS =====

// Ejecutar código Python (simulado)
function executePythonCode() {
    const code = document.getElementById('python-code').value;
    const outputDiv = document.getElementById('code-output');
    
    if (!code.trim()) {
        outputDiv.innerHTML = '<p class="text-red-400">Escribe código Python</p>';
        return;
    }
    
    outputDiv.innerHTML = '<p class="text-yellow-400">Ejecutando...</p>';
    
    setTimeout(() => {
        let result = '';
        
        if (code.includes('np.roots')) {
            // Extraer coeficientes y calcular raíces
            const match = code.match(/\[([^\]]+)\]/);
            if (match) {
                const coefs = match[1].split(',').map(x => parseFloat(x.trim()));
                if (coefs.length >= 3) {
                    const a = coefs[0], b = coefs[1], c = coefs[2];
                    if (a !== 0) {
                        const discriminant = b * b - 4 * a * c;
                        if (discriminant >= 0) {
                            const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                            const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
                            const roots = [x1, x2].sort((a, b) => b - a);
                            result = `[${roots[0].toFixed(1)} ${roots[1].toFixed(1)}]`;
                        } else {
                            result = 'Raíces complejas';
                        }
                    } else {
                        result = 'Error: a no puede ser 0';
                    }
                } else {
                    result = 'Error: faltan coeficientes';
                }
            } else {
                result = 'Error: no se encontraron coeficientes';
            }
        } else if (code.includes('fsolve')) {
            // Detectar tipo de función para fsolve
            if (code.includes('x**3') || code.includes('x^3')) {
                // Función cúbica: x³ - 6x + 6 = 0
                result = '2.000000';
            } else if (code.includes('sin')) {
                result = '0.523599';
            } else if (code.includes('2**x') || code.includes('2^x')) {
                result = '3.000000';
            } else if (code.includes('x**2') || code.includes('x^2')) {
                // Extraer coeficientes de la función cuadrática
                const match = code.match(/x\*\*2\s*([+-])\s*(\d+)\*x\s*([+-])\s*(\d+)/);
                if (match) {
                    const sign1 = match[1] === '+' ? 1 : -1;
                    const b = sign1 * parseFloat(match[2]);
                    const sign2 = match[3] === '+' ? 1 : -1;
                    const c = sign2 * parseFloat(match[4]);
                    const a = 1; // coeficiente de x²
                    
                    // Calcular raíces
                    const discriminant = b * b - 4 * a * c;
                    if (discriminant >= 0) {
                        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
                        
                        // Determinar cuál raíz está más cerca del punto inicial
                        const initialMatch = code.match(/fsolve\([^,]+,\s*(\d+)\)/);
                        if (initialMatch) {
                            const initial = parseFloat(initialMatch[1]);
                            const dist1 = Math.abs(x1 - initial);
                            const dist2 = Math.abs(x2 - initial);
                            result = (dist1 < dist2 ? x1 : x2).toFixed(6);
                        } else {
                            result = x1.toFixed(6);
                        }
                    } else {
                        result = 'Raíces complejas';
                    }
                } else {
                    result = '2.000000';
                }
            } else {
                result = '2.000000';
            }
        } else if (code.includes('print')) {
            if (code.includes('raices') || code.includes('Raíces')) {
                result = '[3. 2.]';
            } else if (code.includes('Raíz') || code.includes('raiz')) {
                result = '2.000000';
            } else {
                result = 'Resultado ejecutado';
            }
        } else {
            result = 'Código ejecutado';
        }
        
        outputDiv.innerHTML = `<pre class="text-green-400">${result}</pre>`;
    }, 500);
}

// Limpiar código Python
function clearPythonCode() {
    document.getElementById('python-code').value = '';
    document.getElementById('code-output').innerHTML = '<p class="text-gray-500">Escribe código y haz clic en "Ejecutar"</p>';
}

// ===== FUNCIONES PARA MATLAB/OCTAVE =====

// Abrir modal de MATLAB
function openMatlabModal() {
    const modal = document.getElementById('matlabModal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Agregar entrada al historial para poder cerrar con botón atrás
    history.pushState({ modal: 'matlab' }, '', window.location.href);
    
    // Cargar contenido siempre
    loadMatlabContent();
}

// Cerrar modal de MATLAB
function closeMatlabModal() {
    const modal = document.getElementById('matlabModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Función para cargar el contenido de MATLAB dinámicamente
function loadMatlabContent() {
    const matlabContent = document.getElementById('matlab-content');
    if (!matlabContent) return;
    
    matlabContent.innerHTML = `
        <div class="space-y-6">
            
            <!-- Resumen de MATLAB/Octave -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-2xl font-bold text-gray-800 mb-4 flex items-center projector-optimized">
                    <i class="fas fa-info-circle text-red-600 mr-3"></i>
                    MATLAB/Octave para Cálculo de Raíces
                </h3>
                <p class="text-gray-700 leading-relaxed mb-4 classroom-text">
                    MATLAB y Octave son herramientas poderosas para encontrar raíces de funciones. 
                    Aquí tienes un resumen de los métodos más útiles.
                </p>
                
                <div class="grid md:grid-cols-2 gap-6">
                    <!-- Método 1: roots() -->
                    <div class="bg-red-50 border border-red-200 rounded-lg p-4">
                        <h4 class="font-semibold text-red-800 mb-2 flex items-center projector-optimized">
                            <i class="fas fa-calculator text-red-600 mr-2"></i>
                            roots() (Para polinomios)
                        </h4>
                        <p class="text-red-700 text-sm mb-3 classroom-text">El método más directo para polinomios.</p>
                        <div class="bg-gray-900 rounded p-2 overflow-x-auto">
                            <pre class="text-green-400 text-xs"><code>% Polinomio: x² - 5x + 6 = 0
coeficientes = [1, -5, 6];
raices = roots(coeficientes);
disp(raices);</code></pre>
                        </div>
                    </div>
                    
                    <!-- Método 2: fzero() -->
                    <div class="bg-orange-50 border border-orange-200 rounded-lg p-4">
                        <h4 class="font-semibold text-orange-800 mb-2 flex items-center projector-optimized">
                            <i class="fas fa-search text-orange-600 mr-2"></i>
                            fzero() (Para cualquier función)
                        </h4>
                        <p class="text-orange-700 text-sm mb-3 classroom-text">Método más flexible y preciso.</p>
                        <div class="bg-gray-900 rounded p-2 overflow-x-auto">
                            <pre class="text-green-400 text-xs"><code>% Función: f(x) = x² - 5x + 6
f = @(x) x^2 - 5*x + 6;
raiz = fzero(f, 1);
disp(raiz);</code></pre>
                        </div>
                    </div>
                </div>
                
                <div class="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 class="font-semibold text-yellow-800 mb-2">Instalación:</h4>
                    <div class="bg-gray-900 rounded p-2 overflow-x-auto">
                        <pre class="text-green-400 text-xs"><code>% MATLAB: Ya incluido
% Octave: sudo apt install octave</code></pre>
                    </div>
                </div>
            </div>

            <!-- Consola MATLAB/Octave -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center projector-optimized">
                    <i class="fas fa-terminal text-red-600 mr-3"></i>
                     Consola MATLAB/Octave
                </h3>
                <p class="text-gray-600 mb-4 classroom-text">
                    Experimenta con código MATLAB/Octave para encontrar raíces. Ambos lenguajes usan la misma sintaxis.
                </p>
                
                
                <div class="space-y-4">
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 class="font-semibold text-gray-800 mb-3">Código MATLAB/Octave:</h4>
                            <textarea id="matlab-console-code" rows="10" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent font-mono text-sm" placeholder="% Escribe tu código MATLAB/Octave aquí
coeficientes = [1, -5, 6];
raices = roots(coeficientes);
disp('Raíces:');
disp(raices);">% Escribe tu código MATLAB/Octave aquí
coeficientes = [1, -5, 6];
raices = roots(coeficientes);
disp('Raíces:');
disp(raices);</textarea>
                        </div>
                        
                        <div>
                            <h4 class="font-semibold text-gray-800 mb-3">Resultados:</h4>
                            <div id="matlab-console-output" class="bg-gray-900 text-green-400 p-4 rounded-lg min-h-[120px] font-mono text-sm">
                                <p class="text-gray-500">Escribe código y haz clic en "Ejecutar"</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex gap-3">
                        <button onclick="executeMatlabConsoleCode()" class="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                            <i class="fas fa-play mr-2"></i>Ejecutar
                        </button>
                        <button onclick="clearMatlabConsoleCode()" class="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors">
                            <i class="fas fa-eraser mr-2"></i>Limpiar
                        </button>
                    </div>
                </div>
            </div>

        </div>
    `;
    
}

// Ejecutar código MATLAB/Octave (simulado)
function executeMatlabCode() {
    const code = document.getElementById('matlab-code').value;
    const outputDiv = document.getElementById('matlab-output');
    
    if (!code.trim()) {
        outputDiv.innerHTML = '<p class="text-red-400">Escribe código MATLAB/Octave</p>';
        return;
    }
    
    outputDiv.innerHTML = '<p class="text-yellow-400">Ejecutando...</p>';
    
    setTimeout(() => {
        let result = '';
        
        if (code.includes('roots(')) {
            // Extraer coeficientes y calcular raíces
            const match = code.match(/\[([^\]]+)\]/);
            if (match) {
                const coefs = match[1].split(',').map(x => parseFloat(x.trim()));
                if (coefs.length >= 3) {
                    const a = coefs[0], b = coefs[1], c = coefs[2];
                    if (a !== 0) {
                        const discriminant = b * b - 4 * a * c;
                        if (discriminant >= 0) {
                            const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                            const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
                            const roots = [x1, x2].sort((a, b) => b - a);
                            result = `${roots[0].toFixed(6)}\n${roots[1].toFixed(6)}`;
                        } else {
                            result = 'Raíces complejas';
                        }
                    } else {
                        result = 'Error: primer coeficiente no puede ser 0';
                    }
                } else {
                    result = 'Error: faltan coeficientes';
                }
            } else {
                result = 'Error: no se encontraron coeficientes';
            }
        } else if (code.includes('fzero(')) {
            // Detectar función para fzero
            if (code.includes('x^2') || code.includes('x**2')) {
                // Extraer coeficientes de la función cuadrática
                const match = code.match(/x\^2\s*([+-])\s*(\d+)\*x\s*([+-])\s*(\d+)/);
                if (match) {
                    const sign1 = match[1] === '+' ? 1 : -1;
                    const b = sign1 * parseFloat(match[2]);
                    const sign2 = match[3] === '+' ? 1 : -1;
                    const c = sign2 * parseFloat(match[4]);
                    const a = 1;
                    
                    const discriminant = b * b - 4 * a * c;
                    if (discriminant >= 0) {
                        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
                        
                        // Determinar cuál raíz está más cerca del punto inicial
                        const initialMatch = code.match(/fzero\([^,]+,\s*(\d+)\)/);
                        if (initialMatch) {
                            const initial = parseFloat(initialMatch[1]);
                            const dist1 = Math.abs(x1 - initial);
                            const dist2 = Math.abs(x2 - initial);
                            result = (dist1 < dist2 ? x1 : x2).toFixed(6);
                        } else {
                            result = x1.toFixed(6);
                        }
                    } else {
                        result = 'Raíces complejas';
                    }
                } else {
                    result = '2.000000';
                }
            } else {
                result = '2.000000';
            }
        } else if (code.includes('disp(')) {
            if (code.includes('raices')) {
                result = '3.000000\n2.000000';
            } else {
                result = 'Resultado ejecutado';
            }
        } else {
            result = 'Código ejecutado';
        }
        
        outputDiv.innerHTML = `<pre class="text-green-400">${result}</pre>`;
    }, 500);
}

// Limpiar código MATLAB/Octave
function clearMatlabCode() {
    document.getElementById('matlab-code').value = '';
    document.getElementById('matlab-output').innerHTML = '<p class="text-gray-500">Escribe código y haz clic en "Ejecutar"</p>';
}

// Cargar ejemplo de código MATLAB
function loadMatlabExample() {
    const examples = [
        `% Ejemplo 1: Polinomio cuadrático
coeficientes = [1, -5, 6];
raices = roots(coeficientes);
disp(raices);`,

        `% Ejemplo 2: Función trigonométrica
f = @(x) sin(x) - 0.5;
raiz = fzero(f, 1);
disp(raiz);`,

        `% Ejemplo 3: Función exponencial
f = @(x) 2^x - 8;
raiz = fzero(f, 2);
disp(raiz);`,

        `% Ejemplo 4: Comparar métodos
coeficientes = [1, -7, 12];

% Método 1: roots()
raices_roots = roots(coeficientes);
disp('roots():');
disp(raices_roots);

% Método 2: fzero()
f = @(x) x^2 - 7*x + 12;
raiz1 = fzero(f, 2);
raiz2 = fzero(f, 5);
disp('fzero():');
disp([raiz1, raiz2]);`
    ];
    
    const randomExample = examples[Math.floor(Math.random() * examples.length)];
    document.getElementById('matlab-code').value = randomExample;
}

// Calculadora de polinomios MATLAB
function calculateMatlabPolynomial() {
    const a = parseFloat(document.getElementById('matlab-coef-a').value);
    const b = parseFloat(document.getElementById('matlab-coef-b').value);
    const c = parseFloat(document.getElementById('matlab-coef-c').value);
    const resultsDiv = document.getElementById('matlab-polynomial-results');
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultsDiv.innerHTML = '<p class="text-red-600">Por favor, ingresa valores numéricos válidos.</p>';
        return;
    }
    
    if (a === 0) {
        resultsDiv.innerHTML = '<p class="text-red-600">El coeficiente "a" no puede ser cero para un polinomio cuadrático.</p>';
        return;
    }
    
    // Calcular discriminante
    const discriminant = b * b - 4 * a * c;
    
    let resultHTML = `
        <div class="space-y-3">
            <h5 class="font-semibold text-gray-800">Ecuación: ${a}x² + ${b}x + ${c} = 0</h5>
            <div class="bg-red-50 p-3 rounded-lg">
                <p class="text-sm text-red-800"><strong>Discriminante:</strong> Δ = ${discriminant.toFixed(3)}</p>
    `;
    
    if (discriminant > 0) {
        // Dos raíces reales
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        resultHTML += `
            <p class="text-sm text-green-800"><strong>Resultado:</strong> Dos raíces reales</p>
            <p class="text-sm text-green-700">x₁ = ${x1.toFixed(6)}</p>
            <p class="text-sm text-green-700">x₂ = ${x2.toFixed(6)}</p>
        `;
    } else if (discriminant === 0) {
        // Una raíz real
        const x = -b / (2 * a);
        resultHTML += `
            <p class="text-sm text-yellow-800"><strong>Resultado:</strong> Una raíz real (doble)</p>
            <p class="text-sm text-yellow-700">x = ${x.toFixed(6)}</p>
        `;
    } else {
        // Raíces complejas
        const realPart = -b / (2 * a);
        const imagPart = Math.sqrt(-discriminant) / (2 * a);
        resultHTML += `
            <p class="text-sm text-purple-800"><strong>Resultado:</strong> Dos raíces complejas</p>
            <p class="text-sm text-purple-700">x₁ = ${realPart.toFixed(6)} + ${imagPart.toFixed(6)}i</p>
            <p class="text-sm text-purple-700">x₂ = ${realPart.toFixed(6)} - ${imagPart.toFixed(6)}i</p>
        `;
    }
    
    resultHTML += `
            </div>
            <div class="bg-gray-900 p-3 rounded-lg">
                <pre class="text-green-400 text-xs">% Código MATLAB equivalente:
coeficientes = [${a}, ${b}, ${c}];
raices = roots(coeficientes);
disp(raices);</pre>
            </div>
        </div>
    `;
    
    resultsDiv.innerHTML = resultHTML;
}


// ===== FUNCIONES PARA CONSOLA MATLAB/OCTAVE =====

// Ejecutar código de la consola MATLAB/Octave
function executeMatlabConsoleCode() {
    const code = document.getElementById('matlab-console-code').value;
    const outputDiv = document.getElementById('matlab-console-output');
    
    if (!code.trim()) {
        outputDiv.innerHTML = '<p class="text-red-400">Escribe código MATLAB/Octave</p>';
        return;
    }
    
    outputDiv.innerHTML = '<p class="text-yellow-400">Ejecutando...</p>';
    
    setTimeout(() => {
        let result = '';
        
        if (code.includes('roots(')) {
            // Extraer coeficientes y calcular raíces
            const match = code.match(/\[([^\]]+)\]/);
            if (match) {
                const coefs = match[1].split(',').map(x => parseFloat(x.trim()));
                if (coefs.length >= 3) {
                    const a = coefs[0], b = coefs[1], c = coefs[2];
                    if (a !== 0) {
                        const discriminant = b * b - 4 * a * c;
                        if (discriminant >= 0) {
                            const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                            const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
                            const roots = [x1, x2].sort((a, b) => b - a);
                            result = `${roots[0].toFixed(6)}\n${roots[1].toFixed(6)}`;
                        } else {
                            result = 'Raíces complejas';
                        }
                    } else {
                        result = 'Error: primer coeficiente no puede ser 0';
                    }
                } else {
                    result = 'Error: faltan coeficientes';
                }
            } else {
                result = 'Error: no se encontraron coeficientes';
            }
        } else if (code.includes('fzero(')) {
            // Detectar función para fzero
            if (code.includes('x^2') || code.includes('x**2')) {
                // Extraer coeficientes de la función cuadrática
                const match = code.match(/x\^2\s*([+-])\s*(\d+)\*x\s*([+-])\s*(\d+)/);
                if (match) {
                    const sign1 = match[1] === '+' ? 1 : -1;
                    const b = sign1 * parseFloat(match[2]);
                    const sign2 = match[3] === '+' ? 1 : -1;
                    const c = sign2 * parseFloat(match[4]);
                    const a = 1;
                    
                    const discriminant = b * b - 4 * a * c;
                    if (discriminant >= 0) {
                        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
                        
                        // Determinar cuál raíz está más cerca del punto inicial
                        const initialMatch = code.match(/fzero\([^,]+,\s*(\d+)\)/);
                        if (initialMatch) {
                            const initial = parseFloat(initialMatch[1]);
                            const dist1 = Math.abs(x1 - initial);
                            const dist2 = Math.abs(x2 - initial);
                            result = (dist1 < dist2 ? x1 : x2).toFixed(6);
                        } else {
                            result = x1.toFixed(6);
                        }
                    } else {
                        result = 'Raíces complejas';
                    }
                } else {
                    result = '2.000000';
                }
            } else {
                result = '2.000000';
            }
        } else if (code.includes('disp(')) {
            if (code.includes('raices') || code.includes('Raíces')) {
                result = '3.000000\n2.000000';
            } else if (code.includes('Raíz') || code.includes('raiz')) {
                result = '2.000000';
            } else {
                result = 'Resultado ejecutado';
            }
        } else {
            result = 'Código MATLAB/Octave ejecutado exitosamente';
        }
        
        outputDiv.innerHTML = `<pre class="text-green-400">${result}</pre>`;
    }, 500);
}

// Limpiar código de la consola MATLAB/Octave
function clearMatlabConsoleCode() {
    document.getElementById('matlab-console-code').value = '';
    document.getElementById('matlab-console-output').innerHTML = '<p class="text-gray-500">Escribe código y haz clic en "Ejecutar"</p>';
}

// ===== FUNCIONES PARA EXCEL/GOOGLE SHEETS =====

// Abrir modal de Excel/Google Sheets
function openExcelModal() {
    const modal = document.getElementById('excelModal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Agregar entrada al historial para poder cerrar con botón atrás
    history.pushState({ modal: 'excel' }, '', window.location.href);
    
    // Cargar contenido siempre
    loadExcelContent();
}

// Cerrar modal de Excel/Google Sheets
function closeExcelModal() {
    const modal = document.getElementById('excelModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Función para cargar el contenido de Excel/Google Sheets dinámicamente
function loadExcelContent() {
    const excelContent = document.getElementById('excel-content');
    if (!excelContent) return;
    
    excelContent.innerHTML = `
        <div class="space-y-8">
            

            <!-- Caso para Función Cuadrática -->
            <div class="mb-6">
                <h3 class="text-2xl font-bold text-gray-800 mb-2 projector-optimized">Caso para Función Cuadrática</h3>
                <p class="text-gray-600 classroom-text">Ejemplo usando f(x) = x² - 5x + 6 = 0</p>
            </div>

            <!-- Paso 1: Preparar la función -->
            <div class="space-y-4">
                <h4 class="text-lg font-semibold text-gray-800 flex items-center projector-optimized">
                    <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">1</span>
                    Preparar la función
                </h4>
                
                <div class="pl-9 space-y-3">
                    <p class="text-gray-700">En Excel, crea celdas para los coeficientes de f(x) = ax² + bx + c:</p>
                    <ul class="text-gray-600 space-y-1 ml-4">
                        <li>• <strong>a = 1</strong> en B3</li>
                        <li>• <strong>b = -5</strong> en B4</li>
                        <li>• <strong>c = 6</strong> en B5</li>
                    </ul>
                    
                    <p class="text-gray-700">Configura las celdas principales:</p>
                    <ul class="text-gray-600 space-y-1 ml-4">
                        <li>• <strong>En B7:</strong> valor inicial para x (ejemplo: 0)</li>
                        <li>• <strong>En B9:</strong> fórmula:</li>
                    </ul>
                    <div class="bg-gray-100 rounded p-3 ml-4">
                        <code class="text-gray-800 text-sm">=B3*B7^2 + B4*B7 + B5</code>
                    </div>
                </div>
            </div>

            <!-- Paso 2: Configurar Solver -->
            <div class="space-y-4">
                <h4 class="text-lg font-semibold text-gray-800 flex items-center projector-optimized">
                    <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">2</span>
                    Configurar Solver
                </h4>
                
                <div class="pl-9 space-y-3">
                    <p class="text-gray-700">Solver es una herramienta de Excel que encuentra automáticamente el valor de una variable para que una función sea igual a un objetivo específico.</p>
                    <p class="text-gray-700">Ve a <strong>Datos → Solver</strong> y configura:</p>
                    <ul class="text-gray-600 space-y-1 ml-4">
                        <li>• <strong>Definir objetivo:</strong> B9 (f(x))</li>
                        <li>• <strong>A valor de:</strong> 0</li>
                        <li>• <strong>Cambiando celda:</strong> B7 (valor de x)</li>
                    </ul>
                </div>
            </div>

            <!-- Paso 3: Ejecutar -->
            <div class="space-y-4">
                <h4 class="text-lg font-semibold text-gray-800 flex items-center projector-optimized">
                    <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">3</span>
                    Ejecutar
                </h4>
                
                <div class="pl-9 space-y-3">
                    <p class="text-gray-700">Haz clic en <strong>Resolver</strong>.</p>
                    <p class="text-gray-600">Excel ajustará el valor de B7 para que f(x) sea cero. El valor final será una raíz de la función.</p>
                </div>
            </div>

            <!-- Nota importante -->
            <div class="border-l-4 border-orange-400 pl-4">
                <h4 class="text-lg font-semibold text-gray-800 mb-2">Nota importante</h4>
                <p class="text-gray-700 mb-2">Solver no puede encontrar ambas raíces al mismo tiempo. Si tu ecuación tiene dos raíces, tienes dos opciones:</p>
                <div class="text-gray-600 space-y-2">
                    <p><strong>Opción 1:</strong> Cambia el valor inicial de B7 y ejecuta Solver otra vez.</p>
                    <p><strong>Opción 2:</strong> Crea una segunda columna (por ejemplo, C7 y C9) con la misma fórmula y ejecuta Solver por separado para cada columna.</p>
                </div>
            </div>

            <!-- Imágenes de Solver -->
            <div class="mt-6">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 max-w-3xl mx-auto">
                    <div class="relative">
                        <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-25"></div>
                        <div class="relative bg-white rounded-xl p-0.5">
                            <img src="images/solverExcel2.png" alt="Configuración de Solver" class="w-full h-auto rounded-lg">
                        </div>
                    </div>
                    
                    <div class="relative">
                        <div class="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl blur opacity-25"></div>
                        <div class="relative bg-white rounded-xl p-0.5">
                            <img src="images/solverExcel1.png" alt="Resultado de Solver" class="w-full h-auto rounded-lg">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    `;
}


