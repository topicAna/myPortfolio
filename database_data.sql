INSERT INTO toolbox_item (id, name, sortcut) VALUES
(1, 'Angular', 'fab fa-angular'),
(2, 'JavaScript', 'fab fa-js'),
(3, 'TypeScript', ' '),
(4, 'NodeJS', 'fab fa-node-js'),
(5, 'Express', ' '),
(6, 'HTML', 'fab fa-html5'),
(7, 'CSS', 'fab fa-css3'),
(8, 'SASS', 'fab fa-sass'),
(9, 'Bootstrap', 'fab fa-bootstrap'),
(10, 'MySQL', 'fas fa-database'),
(11, 'GitHub', 'fab fa-github'),
(12, 'Bash', 'fas fa-terminal'),
(13, 'SCRUM', ' '),
(14, 'Agile', ' '),
(15, 'Git', ' '),
(16, 'Java', 'fab fa-java');


INSERT INTO projects (id, name, description, youtube_link, github_link) VALUES
(1, 'Skyplanet', 'Skyplanet is final project finished during 6 month formation in Wild Code School Lyon.
It’s a project done for the client, owner of the Free fall simulator in Lyon. For this project we had 
to develop Website with customized calendar that will allow users not only to book their slots but also to apply 
special promo discounts. Project is done in Angular 8 with back-end implemented with Express and NodeJS.', 
'https://www.youtube.com/watch?v=WrBQu4gTdfo', 'https://github.com/WildCodeSchool/lyon-0919-projet3-skyplanet/tree/main'),

(2, 'Space Invaders Elements', 'Space Invaders Elements was a second project I was working on during my formation in WCS Lyon. 
The projects idea was to re-visit classic arcade game - Space Invaders but with a little twist by adding
four elements: Fire, Water, Air and Earth. You need to match the elements with the enemies in order to eliminate them. 
Technologies used are Angular 8 (with addition of Angular Material).', 
'https://www.youtube.com/watch?v=agBOLygSc7c', 'https://github.com/lattara/Space-Invaders--Elements'),

(3, 'Escape', 'Escape-room style game realised during 24 hour Hackathon in Wild Code School. Game has 5 different rooms 
with 5 different puzzles that player needs to solve in order to find the exit. Puzzles range from solving mysteries 
with clues to finding hidden objects each of which is connected to the horror movie. Goal of the game is to find all 
the famous horror movies and put them in right order. Game is done in Angular 8', 
'https://www.youtube.com/watch?v=RB0sUjJiAgE', 'https://github.com/lattara/escape'),


(4, 'South Park Memory Game', 'Memory card game on the theme of the South Park series. 
Game has two modes: for one or two players. One-player game is smaller and has a 12 cards / 6 pairs you need to find.
Two player mode had a 18 cards/ 9 pairs. We have added animated avatars, special sounds and different themes based on
what game mode you choose. Game is entirely realised in Vanilla JavaScript', 
'https://www.youtube.com/watch?v=5_4E7E5dmNA&feature=youtu.be', 'https://github.com/lattara/memory-project');