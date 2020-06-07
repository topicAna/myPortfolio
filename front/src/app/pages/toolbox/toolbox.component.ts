import { Component, OnInit } from '@angular/core';
import { ToolboxService } from '../../services/toolbox.service';
import { ToolboxItem } from 'src/app/models/toolboxItem';
import { GitHubService} from '../../services/git-hub.service';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {

  constructor( private toolboxService: ToolboxService, private githubService: GitHubService) { }

  toolboxItems: ToolboxItem[] = [];
  githubEvents = [];

  ngOnInit(): void {
    this.toolboxService.getToolboxItems().subscribe (
      response => {
        this.toolboxItems = response;
      }
    );

    this.githubService.getEvents().subscribe (
      response => {
        this.githubEvents = response;
        console.log(this.githubEvents, 'github events');
      }
    );
  }
}



