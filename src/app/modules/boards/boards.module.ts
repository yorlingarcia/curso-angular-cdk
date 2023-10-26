import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardsRoutingModule } from './boards-routing.module';
import { BoardsComponent } from './pages/boards/boards.component';
import { BoardComponent } from './pages/board/board.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutModule } from '../layout/layout.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DialogModule } from '@angular/cdk/dialog';
import { FormsModule } from '@angular/forms';
import { TodoDialogComponent } from './components/todo-dialog/todo-dialog.component';

@NgModule({
  declarations: [BoardsComponent, BoardComponent, TodoDialogComponent],
  imports: [
    CommonModule,
    BoardsRoutingModule,
    SharedModule,
    FontAwesomeModule,
    LayoutModule,
    DragDropModule,
    CdkAccordionModule,
    DialogModule,
    FormsModule,
  ],
})
export class BoardsModule {}
