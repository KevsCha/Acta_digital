// conts para abrir y cerrar el menu de opciones
const btn_exit_options = document.getElementById('box_exit');
const box_options = document.querySelector('.box_options');
const more_options = document.querySelector('.more_options');
//conts para la bola
const ball_service = document.querySelector('.ball_service');
//conts par el counter del marcador 
let score_team_a = document.querySelector('.score_team_a');
let score_team_b = document.querySelector('.score_team_b');


btn_exit_options.addEventListener('click', () => {
    box_options.style.display = 'none';
});
more_options.addEventListener('click', () => {
    box_options.style.display = 'block';
});

ball_service.addEventListener('click', () => {
    ball_service.classList.toggle('change_side');
});

function add_point(team){
    if(team == 'A'){
        score_team_a.value = parseInt(score_team_a.value) + 1;
        console.log(score_team_a);
    }
    else if(team == 'B'){
        score_team_b.value = parseInt(score_team_b.value) + 1;
        console.log(score_team_b);
    }
    if(score_team_a.value == 25 || score_team_b.value == 25)
        check_winner();
}

function check_winner(){
    
}