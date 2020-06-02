import { ProjectsRepository } from './../repository/projects.repository';
import { Project } from '../models/project';


export class ProjectsService {

    private static instance: ProjectsService;
    static getInstance() {
        if (!this.instance) {
            this.instance = new ProjectsService();
        }
        return this.instance;
    }

    private repository: ProjectsRepository;
    private constructor() {
        this.repository = ProjectsRepository.getInstance();
    }

    getAll(): Promise<Project[]> {
        return this.repository.findAll();
    }

    /**
     * Return a promise which contains the post relative to the id in parameter.
     * @param id post id
     */

    getById(id: number): Promise<Project> {
        return this.repository.findById(id);
    }

    /**
     * Create a new post and return a promise which contains the created post.
     * @param post post to create
     */
    create(project: any): Promise<Project> {
        return this.repository.insert(project);
    }

    /**
     * Update the post in parameter and return a promise which contains the updated post.
     * @param post post to update
     */
    update(project: any): Promise<Project> {
        return this.repository.update(project);
    }

    /**
     * Delete the post related to the id in parameter. Return an empty promise.
     * @param id post id
     */
    delete(id: number): Promise<any> {
        return this.repository.delete(id);
    }
}