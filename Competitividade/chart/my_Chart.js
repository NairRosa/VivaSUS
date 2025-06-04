document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('myChart');
    const earning = document.getElementById('earning');


    if (ctx && earning) {
        new Chart(ctx, {
            type: 'polarArea',
            data: {
                labels: ['Clinico Geral', 'Ortopedista', 'Dentista', 'Pediatra', 'Nutricionista', 'Outros'],
                datasets: [{
                    label: 'Especialidades',
                    data: [15, 12, 6, 18, 7, 3],
                    backgroundColor: [
                        '#2DAB62',
                        '#6EBB81',
                        '#005F26',
                        '#C0DEC2',
                        '#C0F2AC',
                        '#E1EFE1'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right'
                    }
                }
            }
        });

        new Chart(earning, {
            type: 'bar',
            data: {
                labels: ['Fila de espera', 'Encaminhado - UBS', 'Teleconsulta', 'Em atendimento', 'Retorno', 'Finalizado'],
                datasets: [{
                    label: 'Status - Pacientes',
                    data: [1120, 1990, 480, 900, 890, 3670],
                    backgroundColor: [
                        '#2DAB62',
                        '#6EBB81',
                        '#005F26',
                        '#C0DEC2',
                        '#C0F2AC',
                        '#E1EFE1'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});