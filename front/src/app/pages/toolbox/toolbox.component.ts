import { Component, OnInit } from '@angular/core';
import { ToolboxService } from '../../services/toolbox.service';
import { ToolboxItem } from 'src/app/models/toolboxItem';
import { GitHubService } from '../../services/git-hub.service';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {

  constructor(private toolboxService: ToolboxService, private githubService: GitHubService) { }

  toolboxItems: ToolboxItem[] = [];
  githubEvents = [];
  repos: number;
  gists: number;

  ngOnInit(): void {
    this.toolboxService.getToolboxItems().subscribe(
      response => {
        this.toolboxItems = response;
      }
    );

    this.githubService.getEvents().subscribe(
      response => {
        this.githubEvents = response;
      }
    );

    this.githubService.getProfile().subscribe(
      response => {
        const profile = response;
        // tslint:disable-next-line: no-string-literal
        this.repos = profile['public_repos'];
        // tslint:disable-next-line: no-string-literal
        this.gists = profile['public_gists'];
      }
    );
  }
}


