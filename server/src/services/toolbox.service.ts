import { ToolboxRepository } from '../repository/toolbox.repository';
import { ToolboxItem } from 'src/models/toolboxItem';

export class ToolboxService {

private static instance: ToolboxService;
static getInstance() {
    if (!this.instance) {
    this.instance = new ToolboxService();
    }
    return this.instance;
}

private repository: ToolboxRepository;
private constructor() {
    this.repository = ToolboxRepository.getInstance();
}

getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}

findById(id: number): Promise<ToolboxItem> {
    return this.repository.findByProjectsId(id);
}
}
