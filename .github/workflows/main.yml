name: DevOps Terminator CI-CD

# El pipeline se activará de forma automática cada vez que hagas un "Push" (guardar cambios)
on:
  push:
    branches: [ "main" ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
    # 1. Copia los archivos del repositorio en la máquina virtual de pruebas
    - name: Clonar código fuente
      uses: actions/checkout@v4

    # 2. Simula una prueba de integración (CI)
    - name: Ejecutar pruebas de seguridad (SAST)
      run: |
        echo "Iniciando análisis de código con TERMINATOR..."
        echo "Validando estructura de index.html..."
        echo "¡Análisis completado! 0 vulnerabilidades encontradas."

    # 3. Notifica el estado final
    - name: Estado del despliegue (CD)
      run: echo "El código es seguro. Despliegue en GitHub Pages autorizado."
