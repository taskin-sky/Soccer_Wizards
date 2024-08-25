console.log("Script loaded");

function showPlayerDetails(playerId) {
    const playerData = {
        ratul: {
            name: 'Ratul',
            position: 'Forward',
            stats: { sprint: 8, dribbling: 9, shot: 7, defending: 6, goalkeeping: 3 }
        },
        mursalin: {
            name: 'Mursalin',
            position: 'Midfielder',
            stats: { sprint: 7, dribbling: 8, shot: 6, defending: 7, goalkeeping: 4 }
        },
        taskin: {
            name: 'Taskin',
            position: 'Defender',
            stats: { sprint: 6, dribbling: 7, shot: 5, defending: 8, goalkeeping: 5 }
        },
        momin: {
            name: 'Momin',
            position: 'Goalkeeper',
            stats: { sprint: 5, dribbling: 6, shot: 4, defending: 7, goalkeeping: 9 }
        },
        sabbir: {
            name: 'Sabbir',
            position: 'Striker',
            stats: { sprint: 9, dribbling: 8, shot: 8, defending: 5, goalkeeping: 3 }
        }
    };

    const player = playerData[playerId];
    document.getElementById('player-name').textContent = player.name;
    document.getElementById('player-position').textContent = 'Position: ' + player.position;

    // Show modal
    document.getElementById('player-modal').style.display = 'block';

    // Destroy previous chart instance if it exists
    if (window.playerChart) {
        window.playerChart.destroy();
    }

    // Create pie chart
    const ctx = document.getElementById('player-stats-chart').getContext('2d');
    window.playerChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Sprint', 'Dribbling', 'Shot', 'Defending', 'Goalkeeping'],
            datasets: [{
                label: 'Player Stats',
                data: [
                    player.stats.sprint,
                    player.stats.dribbling,
                    player.stats.shot,
                    player.stats.defending,
                    player.stats.goalkeeping
                ],
                backgroundColor: [
                    '#007bff',
                    '#28a745',
                    '#dc3545',
                    '#ffc107',
                    '#17a2b8'
                ]
            }]
        }
    });
}

function closeModal() {
    document.getElementById('player-modal').style.display = 'none';
}

// Close modal if clicked outside
window.onclick = function(event) {
    const modal = document.getElementById('player-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
