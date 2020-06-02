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


    getById(id: number): Promise<Project> {
        return this.repository.findById(id);
    }



    create(Project: any): Promise<Project> {
      return this.repository.insert(Project);
    }


    update(Project: any): Promise<Project> {
      return this.repository.update(Project);
    }


    delete(id: number): Promise<any> {
      return this.repository.delete(id);
    }
}