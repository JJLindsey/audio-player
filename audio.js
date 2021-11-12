//initialize Amplitude method
Amplitude.init({
    bindings: {
        37: 'prev',
        39: 'next',
        32: 'play_pause'
    },
    debug: true,
    visualization: 'michaelbromley_visualization',
    songs: [
        {
            "name": "Bridges",
            "artist": "Bird Dog Jubilee",
            "url": "/assets/audio/Bird Dog Jubilee/Bridges m.wav",
            "cover_art_url": "/assets/images/bridge.webp",
            "visualization": "michaelbromley_visualization"
        }
    ],

    waveforms: {
        sample_rate: 50
    },

    visualizations: [
        {
            object: MichaelBromleyVisualization,
            params:{

            }
        }
    ]
});

document.getElementsByClassName('visualization-toggle')[0].addEventListener('click', function(){
    if(this.classList.contains('visualization-off') ){
        this.classList.remove('visualization-off');
        this.classList.ass('visualization-on');
        document.getElementById('larger-now-playing-albun-art').style.display = 'none';
        document.getElementById('large-visualization').style.display = 'block';
    } else {
        this.classList.remove('visualization-on');
        this.classList.add('visualization-off');
        document.getElementById('large-now-playing-album-art').style.display = 'block';
        document.getElementById('large-visualization').style.display = 'none';
    }
});

document.getElementsByClassName('arrow-up-icon')[0].addEventListener('click', function(){
    document.getElementById('visualizations-player-playlist').style.display = 'block';
});

document.getElementsByClassName('arrow-down-icon')[0].addEventListener('click', function(){
    document.getElementById('visualizations-player-playlist').style.display = 'none';
});
