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

   // Find all projects
    findAll(): Promise<Project[]> {
        return this.connection.query(`SELECT * FROM ${this.table}`)
          .then((results: any) => {
            return results.map((project: any) => new Project(project));
          });
    }

   // Find resa by ID
    findById(id: number): Promise<Project> {
        return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
          .then((results: any) => new Project(results[0]));
    }

    // create project
    insert(project: Project) {
      return this.connection.query(
        `INSERT INTO ${this.table} (name, description, youtube_link, github_link) VALUES (?,?,?,?)`,
        [project.name, project.description, project.youtube_link, project.github_link],
      ).then((result: any) => {
        // After an insert the insert id is directly passed in the promise
        return this.findById(result.insertId);
      });
    }

   // modify project
    update(project: Project) {
      return this.connection.query(
        `UPDATE ${this.table} SET name = ?, description = ?, youtube_link = ?, github_link = ? WHERE id = ?`,
        [project.name, project.description, project.youtube_link, project.github_link],
      ).then(() => {
        return this.findById(project.id);
      });
    }

    /**
     * Make a query to the database to delete an existing project and return an empry promise
     * @param id reservation id to delete
     */
    delete(id: number): Promise<any> {
      return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
    }
}
