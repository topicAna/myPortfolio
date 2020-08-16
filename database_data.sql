INSERT INTO toolbox_item (id, name, sortcut, master_level) VALUES
(1, 'Angular', 'fab fa-angular', 50),
(2, 'JavaScript', 'fab fa-js', 60),
(3, 'TypeScript', ' ', 50),
(4, 'NodeJS', 'fab fa-node-js', 45),
(5, 'Express', ' ', 55),
(6, 'HTML', 'fab fa-html5', 70),
(7, 'CSS', 'fab fa-css3', 70),
(8, 'SASS', 'fab fa-sass', 66),
(9, 'Bootstrap', 'fab fa-bootstrap', 45),
(10, 'MySQL', 'fas fa-database', 44),
(11, 'GitHub', 'fab fa-github', 34),
(12, 'Bash', 'fas fa-terminal', 55),
(13, 'SCRUM', ' ', 90),
(14, 'Agile', ' ', 90),
(15, 'Git', ' ', 74),
(16, 'Java', 'fab fa-java', 7);



INSERT INTO toolbox (projects_id, toolbox_item_id) VALUES 
(1,1),
(1,5),
(1,3),
(1,2),
(2,1),
(2,3),
(2,12),
(3,1),
(3,15),
(3,3),
(3,12),
(4,1),
(4,15),
(4,3),
(5,1),
(5,15),
(5,3),
(5,12);

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


INSERT INTO bio (id, intro, interests) VALUES (
    1, 'Hello there! I am Ana. Here are few things about me. I love people, dogs, 
    programing and all things creative. I love building and creating things, solving problems and learning. 
    I speak three languages and dream of working in a team of open minded people who share my love and entushiasm 
    for coding, discovering new tehnologies and easier ways to solve problems. I am curently finishing 
    my internship and looking for alternance / junior front end position from end of sepetember.
    Ideally I would love to work in international company where I can continue to improve my skills. 
    My future interest/projects include learning Python and developing further my UI/UX design skills.',
    'Board games, hiking, climbing, reading'
);

INSERT INTO experience (id, title, company, duration) VALUES 
    (1, 'Front-end developer', 'Finalgo - Lyon', '6 months - Internship'),
    (2, 'Developer full stack', 'Wild Code School - Lyon', '7 months - Formation'),
    (3, 'Supervisor-manager', 'Coast stored - Dublin', '2 years - Professional Contract - CDI');


INSERT INTO education (id, diploma_name, school) VALUES
    (1, 'Formation - Developer Web and Mobile', 'Wild Code School'),
    (2, 'Master diploma (bac +5)', 'Faculty of Humanities and Social Sciences, University of Zagreb'),
    (3, 'bac + 4 diploma', 'Faculty of Humanities and Social Sciences, University of Zagreb');

INSERT INTO user (id, identifiant, password, intro, email, phone, priviledge) VALUES
    (1, 'Lattara', 'test', 'test', 'email@email.com', '34 34 34 34', 'FULL'),
    (2, 'Lattara2', 'test2', 'test2', 'email@email.com2', '34 34 34 34', 'NULL');

INSERT INTO bio (intro, cv_link) VALUES
    ('intro', '');
