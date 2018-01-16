import { Component, OnInit } from '@angular/core';
import { RepositoryListPageComponent } from '../../repository/repository-list-page/repository-list-page.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { NotificationService, ContentService } from '@alfresco/adf-core';
import { MinimalNodeEntryEntity, RecordEntry } from 'alfresco-js-api';
import { RmService } from '../../rm/rm.service';

@Component({
  selector: 'app-my-files-list-page',
  templateUrl: './my-files-list-page.component.html',
  styleUrls: ['./my-files-list-page.component.scss']
})
export class MyFilesListPageComponent extends RepositoryListPageComponent implements OnInit {
  currentFolderId = '-my-'; // By default display /Company Home/User Homes/<userid>

  constructor(notificationService: NotificationService,
              contentService: ContentService,
              dialog: MatDialog,
              activatedRoute: ActivatedRoute,
              router: Router,
              private rmService: RmService) {
    super(notificationService, contentService, dialog , activatedRoute, router);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  onDetails(event: any) {
    const entry: MinimalNodeEntryEntity = event.value.entry;
    this.router.navigate(['/my-files', entry.id]);
  }

  onDeclareRecord(event: any) {
    const entry: MinimalNodeEntryEntity = event.value.entry;
    console.log('MyFilesListPageComponent: Declaring document as record: ' + entry.name);

    const record: RecordEntry = this.rmService.declareRecord(entry.id, null);

    this.notificationService.openSnackMessage(
      `Created Record for '${entry.name}' successfully: ${record}`,
      8000);
  }
}
