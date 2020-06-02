import { Project } from '../models/project';
import { MysqlConnection } from '../loaders/mysql';


export class ProjectsRepository {

    private static instance: ProjectsRepository;
    private connection: MysqlConnection = MysqlConnection.getInstance();

    private table: string = 'projects';

    static getInstance() {
        if (!this.instance) {
            this.instance = new ProjectsRepository();
        }
        return this.instance;
    }

    private constructor() {
    }

    /**
     * Make a query to the database to retrieve all posts and return it in a promise.
     */
    findAll(): Promise<Project[]> {
        return this.connection.query(`SELECT * from ${this.table}`)
            .then((results: any) => {
                return results.map((project: any) => new Project(project));
            });
    }

    /**
     * Make a query to the database to retrieve one post by its id in parameter. 
     * Return the post found in a promise.
     * @param id post id
     */

    findById(id: number): Promise<Project> {
        return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
            .then((results: any) => new Project(results[0]));
    }


    /**
     * Make a query to the database to insert a new post and return the created post in a promise.
     * @param project post to create
     */
    insert(project: Project) {
        return this.connection.query(
            `INSERT INTO ${this.table} (name, description, youtube_link, github_link ) VALUES (?,?,?,?)`,
            [project.name, project.description, project.youtube_link, project.github_link]
        ).then((result: any) => {
            // After an insert the insert id is directly passed in the promise
            return this.findById(result.insertId);
        });
    }


    /**
     * Make a query to the database to update an existing post and return the updated post in a promise.
     * @param project post to update
     */
    update(project: Project) {
        return this.connection.query(
            `UPDATE ${this.table} SET name = ?, description = ?, youtube_link, github_link WHERE id = ?`,
            [project.name, project.description, project.youtube_link, project.github_link]
        ).then(() => {
            return this.findById(project.id);
        });
    }

    /**
     * Make a query to the database to delete an existing post and return an empry promise
     * @param id post id to delete
     */
    delete(id: number): Promise<any> {
        return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
    }
}